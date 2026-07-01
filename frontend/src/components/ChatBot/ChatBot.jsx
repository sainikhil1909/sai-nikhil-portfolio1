import React, {
  useState,
  useEffect,
  useRef
} from "react";

import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaUserCircle
} from "react-icons/fa";

import "./ChatBot.css";

function ChatBot() {

  const initialMessages = [
    {
      sender: "bot",
      text: "👋 Welcome to Sai Nikhil's Portfolio.\n\nMay I know your name?"
    }
  ];

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [visitorName, setVisitorName] = useState("");

  const [nameAsked, setNameAsked] = useState(false);

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState(initialMessages);

  const messagesEndRef = useRef(null);

  const inputRef = useRef(null);

  /* -----------------------------
      Auto Scroll
  ----------------------------- */

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({

      behavior: "smooth"

    });

  }, [messages]);

  /* -----------------------------
      Focus Input
  ----------------------------- */

  useEffect(() => {

    if (open) {

      setTimeout(() => {

        inputRef.current?.focus();

      }, 300);

    }

  }, [open]);

  /* -----------------------------
      Reset Chat
  ----------------------------- */

  const resetChat = () => {

    setMessages(initialMessages);

    setVisitorName("");

    setNameAsked(false);

    setTyping(false);

    setInput("");

    setOpen(false);

  };

  /* -----------------------------
      Toggle Chat
  ----------------------------- */

  const toggleChat = () => {

    if (open) {

      resetChat();

    }

    else {

      setOpen(true);

    }

  };
  /* -----------------------------
    Portfolio Knowledge Base
----------------------------- */

const getResponse = (question) => {

    const q = question.toLowerCase().trim();

    // Greetings
    if (
        q === "hi" ||
        q === "hello" ||
        q === "hey"
    ) {

        return `Hello ${visitorName || "there"} 👋

How can I help you today?`;

    }

    // Name
    if (
        q.includes("your name") ||
        q.includes("who are you")
    ) {

        return `I'm Sai Nikhil's Portfolio Assistant 🤖

I can answer questions about Sai Nikhil's:

• About
• Skills
• Projects
• Certifications
• Resume
• Contact
• GitHub
• LinkedIn`;

    }

    // About
    if (
        q.includes("about") ||
        q.includes("introduce")
    ) {

        return `Sai Nikhil is a passionate Full Stack Developer specializing in React.js, Node.js, Express.js and MongoDB.

He enjoys building scalable web applications, solving real-world problems and continuously learning modern technologies.`;

    }

    // Skills
    if (
        q.includes("skill") ||
        q.includes("technology")
    ) {

        return `💻 Skills

Frontend
• HTML
• CSS
• JavaScript
• React.js

Backend
• Node.js
• Express.js
• Flask

Database
• MongoDB
• SQL

Programming
• Python
• Java
• JavaScript

Machine Learning
• TensorFlow
• OpenCV
• NumPy
• Scikit-Learn`;

    }

    // React
    if (
        q.includes("react")
    ) {

        return "Sai Nikhil develops modern React.js applications with reusable components, React Router and responsive UI.";

    }

    // Node
    if (
        q.includes("node")
    ) {

        return "Sai Nikhil builds scalable REST APIs using Node.js and Express.js.";

    }

    // MongoDB
    if (
        q.includes("mongodb")
    ) {

        return "Sai Nikhil uses MongoDB with Mongoose for backend database development.";

    }

    // Python
    if (
        q.includes("python")
    ) {

        return "Python is one of Sai Nikhil's primary programming languages for Full Stack Development and Machine Learning.";

    }

    // Java
    if (
        q.includes("java")
    ) {

        return "Sai Nikhil has good knowledge of Java and holds Oracle Java certifications.";

    }

    // Projects
    if (
        q.includes("project")
    ) {

        return `🚀 Projects

1️⃣ Real-Time Sign Language Detection

2️⃣ Detection of Stress & Depression Using Machine Learning

3️⃣ Blood Bank Management System

4️⃣ Job Portal

5️⃣ Personal Portfolio

6️⃣ Real-Time Chat Application`;

    }

    // Certifications
    if (
        q.includes("certificate") ||
        q.includes("certification")
    ) {

        return `📜 Certifications

🏆 Programming in Java

🏆 Oracle Certified Java Programming

🏆 Programming Essentials in Python

🏆 Problem Solving Through Programming in C`;

    }

    // Education
    if (
        q.includes("education") ||
        q.includes("college")
    ) {

        return `🎓 Education

B.Tech in Computer Science (AI & ML)

JNTUH

Graduated in 2025`;

    }

    // Experience
    if (
        q.includes("experience")
    ) {

        return `Sai Nikhil has experience building Full Stack MERN applications, Machine Learning projects and responsive portfolio websites.`;

    }

    // Resume
    if (
        q.includes("resume") ||
        q.includes("cv")
    ) {

        return `📄 Please click the Resume section available in the portfolio to download Sai Nikhil's latest resume.`;

    }

    // GitHub
    if (
        q.includes("github")
    ) {

        return `🐙 GitHub

https://github.com/sainikhil1909`;

    }

    // LinkedIn
    if (
        q.includes("linkedin") ||
        q.includes("linkedlin") ||
        q.includes("linkdin") ||
        q.includes("linked in")
    ) {

        return `💼 LinkedIn

https://www.linkedin.com/in/sai-nikhil-palla-19042003p/`;

    }

    // Contact
    if (
        q.includes("contact") ||
        q.includes("email") ||
        q.includes("phone")
    ) {

        return `📞 Contact

📧 Email
pallasainikhil19@gmail.com

📱 Phone
+91 9154638079`;

    }

    // Location
    if (
        q.includes("location") ||
        q.includes("where")
    ) {

        return "📍 Hyderabad, Telangana, India";

    }

    // Hire
    if (
        q.includes("hire") ||
        q.includes("freelance")
    ) {

        return `Yes 😊

Sai Nikhil is available for:

✅ Full-Time Opportunities

✅ Freelance Projects

✅ MERN Stack Development

✅ React.js Development`;

    }

    // Hobbies
    if (
        q.includes("hobby")
    ) {

        return "Outside coding, Sai Nikhil enjoys learning new technologies, photography and exploring modern web development trends.";

    }

    // Strengths
    if (
        q.includes("strength")
    ) {

        return `💪 Strengths

• Problem Solving

• Quick Learner

• Team Player

• Full Stack Development

• Continuous Learning`;

    }

    // Weakness
    if (
        q.includes("weakness")
    ) {

        return "Sai Nikhil believes in continuous improvement and enjoys learning from every project.";

    }

    // Thanks
    if (
        q.includes("thank")
    ) {

        return `You're welcome ${visitorName}! 😊`;

    }

    // Bye
    if (
        q.includes("bye")
    ) {

        return `Goodbye ${visitorName}! 👋

Have a wonderful day.`;

    }

    // Default
    return `Sorry ${visitorName} 😅

I couldn't understand that.

Try asking about:

• About
• Skills
• Projects
• Certifications
• Resume
• GitHub
• LinkedIn
• Contact
• Education
• Experience`;

};
/* -----------------------------
    Send Message
----------------------------- */

const sendMessage = (customText = "") => {

    const message =
        customText || input;

    if (!message.trim()) return;

    const userMessage = {

        sender: "user",

        text: message

    };

    /* First message = Visitor Name */

    if (!nameAsked) {

        const name = message.trim();

        setVisitorName(name);

        setNameAsked(true);

        setMessages(prev => [

            ...prev,

            userMessage

        ]);

        setTyping(true);

        setInput("");

        setTimeout(() => {

            setTyping(false);

            setMessages(prev => [

                ...prev,

                {

                    sender: "bot",

                    text:
`Nice to meet you ${name} 😊

I'm Sai Nikhil's AI Assistant.

You can ask me about:

• About
• Skills
• Projects
• Certifications
• Resume
• GitHub
• LinkedIn
• Contact
• Education
• Experience`

                }

            ]);

        }, 1200);

        return;

    }

    setMessages(prev => [

        ...prev,

        userMessage

    ]);

    setInput("");

    setTyping(true);

    setTimeout(() => {

        setTyping(false);

        setMessages(prev => [

            ...prev,

            {

                sender: "bot",

                text: getResponse(message)

            }

        ]);

    }, 1000);

};
return (
<>
    <button
        className="chat-toggle"
        onClick={toggleChat}
        aria-label="Open Chatbot"
    >
        {
            open
                ? <FaTimes />
                : <FaRobot />
        }
    </button>

    {
        open && (

            <div className="chatbot">

                {/* Header */}

                <div className="chat-header">

                    <div className="chat-header-left">

                        <div className="bot-avatar">

                            <FaRobot />

                        </div>

                        <div>

                            <h3>
                                Sai Nikhil ChatBot
                            </h3>

                            <span>
                                {
                                    typing
                                        ? "Typing..."
                                        : "Online"
                                }
                            </span>

                        </div>

                    </div>

                    <button
                        className="close-chat"
                        onClick={toggleChat}
                    >
                        <FaTimes />
                    </button>

                </div>

                {/* Chat Body */}

                <div className="chat-body">

                    {
                        messages.map((msg, index) => (

                            <div
                                key={index}
                                className={`message ${msg.sender}`}
                            >

                                {
                                    msg.sender === "bot" && (

                                        <div className="avatar">

                                            <FaRobot />

                                        </div>

                                    )
                                }

                                <div className="message-content">

                                    <p
                                        style={{
                                            whiteSpace: "pre-line"
                                        }}
                                    >
                                        {msg.text}
                                    </p>

                                </div>

                                {
                                    msg.sender === "user" && (

                                        <div className="avatar user-avatar">

                                            <FaUserCircle />

                                        </div>

                                    )
                                }

                            </div>

                        ))
                    }

                    {
                        typing && (

                            <div className="message bot">

                                <div className="avatar">

                                    <FaRobot />

                                </div>

                                <div className="typing">

                                    <span></span>

                                    <span></span>

                                    <span></span>

                                </div>

                            </div>

                        )
                    }

                    <div
                        ref={messagesEndRef}
                    />

                </div>

                {/* Quick Buttons */}

                {
                    nameAsked && (

                        <div className="quick-buttons">

                            <button
                                onClick={() => sendMessage("about")}
                            >
                                About
                            </button>

                            <button
                                onClick={() => sendMessage("skills")}
                            >
                                Skills
                            </button>

                            <button
                                onClick={() => sendMessage("projects")}
                            >
                                Projects
                            </button>

                            <button
                                onClick={() => sendMessage("resume")}
                            >
                                Resume
                            </button>

                            <button
                                onClick={() => sendMessage("github")}
                            >
                                GitHub
                            </button>

                            <button
                                onClick={() => sendMessage("linkedin")}
                            >
                                LinkedIn
                            </button>

                            <button
                                onClick={() => sendMessage("contact")}
                            >
                                Contact
                            </button>

                        </div>

                    )
                }

                {/* Input */}

                <div className="chat-input">

                    <input

                        ref={inputRef}

                        type="text"

                        placeholder={
                            nameAsked
                                ? "Ask me anything..."
                                : "Enter your name..."
                        }

                        value={input}

                        onChange={(e) =>
                            setInput(e.target.value)
                        }

                        onKeyDown={(e) => {

                            if (e.key === "Enter") {

                                e.preventDefault();

                                sendMessage();

                            }

                        }}

                    />

                    <button
                        onClick={() => sendMessage()}
                    >

                        <FaPaperPlane />

                    </button>

                </div>

            </div>

        )
    }

</>
);
}
export default ChatBot;