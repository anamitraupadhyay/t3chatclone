import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/Welcomescreen';
import ChatInput from './components/ChatInput';
import Login from './components/Login';
import './App.css';

function ChatLayout() {
  const [responseText, setResponseText] = useState("");
  return (
    <div
      className="flex h-screen bg-[#1e1e2f] text-white sidebar-msg"
      style={{ background: 'hsl(262.5 10% 15.7%)', width: '100vw' }}
    >
      <Sidebar />
      <div className="flex flex-col flex-1">
        <WelcomeScreen response={responseText}/>
        <ChatInput setResponse={setResponseText}/>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatLayout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
