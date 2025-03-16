"use client";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ChatUI() {
    const [messages, setMessages] = useState([
        { sender: "Jane Doe", text: "Hello!", time: "14:31", type: "text", image: "https://randomuser.me/api/portraits/women/1.jpg" },
        { sender: "Jane Doe", text: "How are you?", time: "14:34", type: "text", image: "https://randomuser.me/api/portraits/women/1.jpg" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() !== "") {
            setMessages([...messages, { sender: "You", text: input, time: "Now", type: "text", image: "https://randomuser.me/api/portraits/men/1.jpg" }]);
            setInput("");
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-900 text-white p-4">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-3">
                {messages.map((msg, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <img src={msg.image} alt="Profile" className="w-10 h-10 rounded-full" />
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-yellow-400">{msg.sender}</span>
                            <p className="bg-gray-800 p-2 rounded-lg inline-block mt-1">{msg.text}</p>
                            <span className="text-xs text-gray-500 mt-1">{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Box */}
            <div className="flex items-center bg-gray-800 p-3 rounded-lg mt-4">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    className="flex-1 bg-transparent outline-none text-white px-3" 
                    placeholder="Type a message..." 
                />
                <button onClick={sendMessage} className="text-yellow-400 hover:text-yellow-300">
                    <FiSend size={20} />
                </button>
            </div>
        </div>
    );
}
