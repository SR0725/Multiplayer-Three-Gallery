import { Server } from "socket.io";
import { playerController } from "@/services/player/playerController";
import { gptService } from "@/services/gpt";

export const setupSocketHandler = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("A user connected.");

    socket.on("player:join", playerController.handlePlayerJoin(socket));
    socket.on("player:update", playerController.handlePlayerUpdate(socket));
    socket.on("player:leave", playerController.handlePlayerLeave(socket));

    socket.on("disconnect", () => {
      console.log("A user disconnected.");
    });

    // AI 聊天
    socket.on('ai:chat', async (messages) => {
      const response = await gptService.generateGptResponse(messages);
      socket.emit('ai:chat', response);
    });

    // 通話
    socket.on('join-room', () => {
      socket.broadcast.emit('user-connected', socket.id);
    });
  
    socket.on('send-offer', (targetId, offer) => {
      io.to(targetId).emit('receive-offer', socket.id, offer);
    });
  
    socket.on('send-answer', (targetId, answer) => {
      io.to(targetId).emit('receive-answer', socket.id, answer);
    });
  
    socket.on('send-candidate', (targetId, candidate) => {
      io.to(targetId).emit('receive-candidate', socket.id, candidate);
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  function handleUpdateSocket() {
    playerController.handleEmitPlayerUpdate(io)();
  }

  setInterval(handleUpdateSocket, 30);
};
