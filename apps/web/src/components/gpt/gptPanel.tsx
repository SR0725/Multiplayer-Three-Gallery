import React, { useState, useEffect } from 'react';
import { socket } from '@/utils/socket';

function GptPanel() {
  const [messages, setMessages] = useState<
    { role: 'assistant' | 'user'; content: string }[]
  >([]);
  const [input, setInput] = useState<string>('');
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [showPanel, setShowPanel] = useState<boolean>(false);

  useEffect(() => {
    socket.on('ai:chat', (response: string) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: response },
      ]);
      setIsWaiting(false);
    });

    return () => {
      socket.off('ai:chat');
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '' || isWaiting) return;

    const newMessage = { role: 'user' as const, content: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');
    setIsWaiting(true);

    socket.emit('ai:chat', [...messages, newMessage]);
  };

  return (
    <div className='fixed bottom-2 left-2'>
      {!showPanel && (
        <button
          className='h-16 w-16 rounded-full bg-white text-black'
          onClick={() => setShowPanel(true)}
        >
          🤖
        </button>
      )}
      {showPanel && (
        <div className=' flex w-96 flex-col gap-2 rounded-lg bg-white p-4'>
          <button
            className='text-right text-sm text-gray-500'
            onClick={() => setShowPanel(false)}
          >
            關閉
          </button>
          <div className='flex flex-col gap-2 max-h-96 overflow-y-auto'>
            <div className='flex flex-col gap-2 border-b'>
              <div className='text-sm text-gray-500'>AI 導覽員</div>
              <div className='text-sm pb-2'>
                嗨，我是 AI
                美術館導覽員，歡迎詢問我任何關於美術館的問題。不過目前的我還在測試，可能會有回答上的錯誤
              </div>
            </div>
            {messages.map((message, index) => (
              <div key={index} className='flex flex-col gap-2 border-b'>
                <div className='text-sm text-gray-500'>
                  {message.role === 'assistant' ? 'AI 導覽員' : '你'}
                </div>
                <div className='text-sm pb-2'>{message.content}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className='flex gap-2'>
            <input
              className='flex-1'
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isWaiting}
              placeholder={isWaiting ? '等待 AI 回覆...' : '輸入訊息...'}
            />
            <button type='submit' disabled={isWaiting}>
              發送
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default GptPanel;
