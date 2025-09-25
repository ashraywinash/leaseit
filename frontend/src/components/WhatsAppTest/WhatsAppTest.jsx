import { useState } from "react";
import axios from "axios";


function WhatsAppTest() {
const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Hardcoded user details for now
  const user = {
    name: "Ashray",
    phone_no: "9866393725",
    rental_id: "AB101",
  };

  const webhookUrl =
    "https://ashun8n.duckdns.org/webhook/c3013778-fea1-44f0-a498-f3ed84dbd91a";

  const sendMessage = async () => {
    if (!input && !imageUrl) return;

    const newMessage = {
      text: input || "",
      image: imageUrl || "",
      sender: "user",
    };

    // Add user's message to chat immediately
    setMessages((prev) => [...prev, newMessage]);

    try {
      const res = await axios.get(webhookUrl, {
        params: {
          image_url: imageUrl || "",
          phone_no: user.phone_no,
          user_text: input || "",
          rental_id: user.rental_id,
          name: user.name,
        },
      });

      console.log("Webhook response:", res);
      // Show system confirmation
      setMessages((prev) => [
        ...prev,
        { text: res.data.output, sender: "system" },
      ]);
    } catch (err) {
      console.error("Webhook error:", err);
      setMessages((prev) => [
        ...prev,
        { text: "❌ Failed to send message", sender: "system" },
      ]);
    }

    // Reset input fields
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl flex flex-col h-[600px] overflow-hidden">
        {/* Chat window */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-2xl shadow max-w-[75%] break-words ${
                  msg.sender === "user"
                    ? "bg-green-200 text-right"
                    : msg.sender === "system"
                    ? "bg-gray-300 text-center text-sm text-gray-700"
                    : "bg-gray-100"
                }`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="uploaded"
                    className="mt-2 max-w-[200px] rounded-lg"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div className="p-3 border-t flex flex-col gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="z-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400 text-amber-950"
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400 text-amber-950"
          />
          <button
            onClick={sendMessage}
            className="bg-green-500 hover:bg-green-600 transition text-white py-2 rounded-lg font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatsAppTest;