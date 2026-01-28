import React, { useState, useRef, useEffect } from 'react';
import './AIChatBot.css';

const AIChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hello! I\'m the AHF AI Assistant. How can I help you today? Ask me anything about AHF cryptocurrency, blockchain, or how to get started!'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Format markdown-style text to HTML
    const formatMessage = (text) => {
        // Replace **text** with bold
        let formatted = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        // Replace *text* with italic
        formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        // Replace line breaks
        formatted = formatted.replace(/\n/g, '<br/>');
        return formatted;
    };

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue('');

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_API_KEY;

            // System context about AHF
            const systemContext = `You are the official AI assistant for AHF (Alieus Coin), a next-generation decentralized cryptocurrency. 
            
Key information about AHF:
- AHF is the world's first hedge fund-backed cryptocurrency
- Total Supply: 1 Billion AHF2 tokens
- Technology: Binance Smart Chain (BSC)
- Token Name: Alieus 2.0 (AHF2)
- Distribution: 45% Staking Rewards, 20% Ecosystem Development, 10% ICO, 10% Liquidity, 10% Advisory/Marketing, 3% Reserve, 2% Charity

Be helpful, professional, and concise. If asked about something unrelated to crypto/AHF, politely redirect to AHF-related topics.`;

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: 'user',
                                parts: [{ text: systemContext + '\n\nUser question: ' + userMessage }]
                            }
                        ],
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 500,
                        }
                    })
                }
            );

            const data = await response.json();

            if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                const assistantMessage = data.candidates[0].content.parts[0].text;
                setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
            } else if (data.error) {
                throw new Error(data.error.message || 'API Error');
            } else {
                throw new Error('Invalid response from API');
            }
        } catch (error) {
            console.error('Error:', error);
            let errorMessage = 'Sorry, I encountered an error. Please try again later.';

            if (error.message?.includes('429') || error.message?.includes('quota')) {
                errorMessage = 'I\'m receiving too many requests right now. Please wait a moment and try again.';
            }

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: errorMessage
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                className={`ai-chat-float ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="AI Chat"
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        {/* AI Sparkle/Brain Icon */}
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        <path d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                        <path d="M16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                )}
                <span className="ai-pulse"></span>
            </button>

            {/* Chat Box */}
            <div className={`ai-chat-box ${isOpen ? 'open' : ''}`}>
                <div className="ai-chat-header">
                    <div className="ai-header-info">
                        <div className="ai-avatar">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1.07A7 7 0 0113 22h-2a7 7 0 01-6.93-6H3a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zm0 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" />
                            </svg>
                        </div>
                        <div>
                            <h3>AHF AI Assistant</h3>
                            <span className="ai-status">
                                <span className="status-dot"></span>
                                Online
                            </span>
                        </div>
                    </div>
                    <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="ai-chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`ai-message ${message.role}`}>
                            {message.role === 'assistant' && (
                                <div className="ai-message-avatar">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1.07A7 7 0 0113 22h-2a7 7 0 01-6.93-6H3a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2z" />
                                    </svg>
                                </div>
                            )}
                            <div className="ai-message-content">
                                <p dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="ai-message assistant">
                            <div className="ai-message-avatar">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1.07A7 7 0 0113 22h-2a7 7 0 01-6.93-6H3a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2z" />
                                </svg>
                            </div>
                            <div className="ai-message-content typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="ai-chat-input">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Ask me anything about AHF..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isLoading}
                    />
                    <button
                        className="ai-send-btn"
                        onClick={sendMessage}
                        disabled={isLoading || !inputValue.trim()}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AIChatBot;
