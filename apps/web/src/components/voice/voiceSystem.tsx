'use client';

import React, { useRef, useState, useEffect } from 'react';
import { socket } from '@/utils/socket';

function VoiceSystem() {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const remoteStreams = useRef<Map<string, MediaStream>>(new Map());
  const peerConnections = useRef<Map<string, RTCPeerConnection>>(new Map());

  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);

  const toggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleDeafen = () => {
    setIsDeafened(!isDeafened);
    Array.from(remoteStreams.current.values()).forEach((stream) => {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = isDeafened;
      });
    });
  };
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        setLocalStream(stream);
        socket.emit('join-room');
      });
  }, []);

  useEffect(() => {
    if (!socket || !localStream) return;

    socket.on('user-connected', async (userId: string) => {
      const peerConnection = new RTCPeerConnection({
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' }
        ]
      });
      localStream
        .getTracks()
        .forEach((track) => peerConnection.addTrack(track, localStream));

      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit('send-candidate', userId, event.candidate);
        }
      };

      peerConnection.ontrack = (event) => {
        const remoteStream = new MediaStream(event.streams[0].getTracks());
        remoteStreams.current.set(userId, remoteStream);
        updateRemoteStreams();
      };

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit('send-offer', userId, offer);

      peerConnections.current.set(userId, peerConnection);
    });

    socket.on(
      'receive-offer',
      async (userId: string, offer: RTCSessionDescriptionInit) => {
        const peerConnection = new RTCPeerConnection();
        localStream
          .getTracks()
          .forEach((track) => peerConnection.addTrack(track, localStream));

        peerConnection.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit('send-candidate', userId, event.candidate);
          }
        };

        peerConnection.ontrack = (event) => {
          const remoteStream = new MediaStream(event.streams[0].getTracks());
          remoteStreams.current.set(userId, remoteStream);
          updateRemoteStreams();
        };

        await peerConnection.setRemoteDescription(
          new RTCSessionDescription(offer),
        );
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.emit('send-answer', userId, answer);

        peerConnections.current.set(userId, peerConnection);
      },
    );

    socket.on(
      'receive-answer',
      (userId: string, answer: RTCSessionDescriptionInit) => {
        const peerConnection = peerConnections.current.get(userId);
        if (peerConnection) {
          peerConnection.setRemoteDescription(
            new RTCSessionDescription(answer),
          );
        }
      },
    );

    socket.on(
      'receive-candidate',
      (userId: string, candidate: RTCIceCandidate) => {
        const peerConnection = peerConnections.current.get(userId);
        if (peerConnection) {
          peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        }
      },
    );

    return () => {
      socket.off('user-connected');
      socket.off('receive-offer');
      socket.off('receive-answer');
      socket.off('receive-candidate');
    };
  }, [socket, localStream]);

  const updateRemoteStreams = () => {
    // 用于更新页面上的其他用户音频流
    // 可以根据 remoteStreams.current 渲染音频元素
  };

  return (
    <div className='pointer-events-none fixed bottom-0 left-0 flex h-20 w-full items-center justify-center'>
      <div className='pointer-events-auto flex space-x-4 bg-white rounded-full px-4 py-2'>
        <button
          onClick={toggleMute}
          className={`rounded-full p-2 ${
            isMuted ? 'bg-red-500' : 'bg-white'
          }`}
        >
          🎙️
        </button>
        <button
          onClick={toggleDeafen}
          className={`rounded-full p-2 ${
            isDeafened ? 'bg-red-500' : 'bg-white'
          }`}
        >
          🎧
        </button>
      </div>
      <audio
        autoPlay
        muted
        ref={(audio) => {
          if (audio && localStream) {
            audio.srcObject = localStream;
          }
        }}
      ></audio>
      {Array.from(remoteStreams.current.values()).map((stream, index) => (
        <audio
          key={index}
          autoPlay
          ref={(audio) => {
            if (audio && stream) {
              audio.srcObject = stream;
            }
          }}
        ></audio>
      ))}
    </div>
  );
}

export default VoiceSystem;
