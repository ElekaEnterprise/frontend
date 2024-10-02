"use client"

import { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoSend } from "react-icons/io5";

export default function Chatbot() {
  const [userQuery, setUserQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Array to store chat history
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatContainerRef = useRef(null); // Reference for auto-scrolling

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user query to chat history
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", message: userQuery }, // User message
      { sender: "bot", message: (<div className="loader"></div>) }, // Placeholder for bot response
    ]);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/gradio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_query: userQuery }),
      });

      const data = await response.json();

      if (response.ok) {
        // Replace the "Loading..." placeholder with the actual response
        setChatHistory((prev) => {
          const updatedHistory = [...prev];
          updatedHistory[updatedHistory.length - 1] = {
            sender: "bot",
            message: data.data[0], // Bot response
          };
          return updatedHistory;
        });
      } else {
        setError(data.error || "An error occurred.");
      }
    } catch (err) {
      setError("Failed to fetch the result.");
    } finally {
      setLoading(false);
      setUserQuery(""); // Clear input field
    }
  };

  // Auto-scroll to the bottom of the chat container whenever chat history updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="chat-bg p-4">
      <div style={{
        maxWidth: "50%", margin: "0 auto"
      }} className="border-2 shadow-design border-[#ffffff20] p-4 mt-2 rounded-xl overflow-hidden">
        <h1 className="font-extrabold text-xl border-b border-[#ffffff20] pb-3">Chat with ELEKA.AI</h1>

        {/* Chat Container */}
        <div
          ref={chatContainerRef}
          className=""
          style={{
            height: "75vh",
            overflowY: "auto",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: chat.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: "1rem",
              }}
            >
              {/* { chat.sender === "user"? (<CiUser />) : (<FaRobot />)} */}
              <div
                style={{
                  color: chat.sender === "user" ? "#fff" : "#fff",
                  // padding: "0.5rem 1rem",
                  maxWidth: "75%",
                }}
                className={chat.sender === "user" ? 
                  "rounded-b-2xl rounded-l-2xl bg-[#007bff] text-sm py-4 px-6" 
                  : 
                  "rounded-b-2xl rounded-r-2xl bg-[#192746] border-[#0F172A] border-[1px] text-sm py-4 px-6"}
              >
                {chat.message}
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem" }}
          className="border border-[#ffffff20] p-2 rounded-md">
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Type your question..."
            required
            className="bg-[#13043400] border border-[#ffffff20] focus:!border-[#7C72FF]"
            style={{ flexGrow: 1, padding: "0.5rem", borderRadius: "5px" }}
          />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#7C72FF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <IoSend className="text-xl"/>
          </button>
        </form>
        {/* {loading && <p>Loading...</p>} */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
