"use client";

import React, { useState, useEffect } from "react";
import "./inspired.css"; // custom CSS

export default function InspiredPage() {
    const videos = [
        "BfdvbZFXbNA", "hSGt_rhu49U", "RKECKQWVlO4",
        "nJw9-15ncOM", "mKW4ZFP8bGY", "lrhPTqholcc",
        "yqR77sa4EVE", "nnSRJ5PRPWQ",
    ];

    const books = [
        { title: "The Power of Now", author: "Eckhart Tolle", img: "https://upload.wikimedia.org/wikipedia/en/6/66/TPON_Cover_LG.jpg", link: "https://www.amazon.in/Power-Now-Eckhart-Tolle/dp/0340733500" },
        { title: "Atomic Habits", author: "James Clear", img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834" },
        { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", img: "https://m.media-amazon.com/images/I/71rmHeQeuRL._UF1000,1000_QL80_.jpg", link: "https://www.amazon.in/Habits-Highly-Effective-People/dp/1471195201" },
        { title: "Think Like a Monk", author: "Jay Shetty", img: "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.in/Think-Like-Monk-Jay-Shetty/dp/0008386595" },
        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.in/Subtle-Art-Not-Giving/dp/0062457713" },
        { title: "Ikigai: The Japanese Secret", author: "Héctor García & F. Miralles", img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.in/Ikigai-Japanese-Secret-Long-Happy/dp/178633089X" },
    ];

    const apps = [
        { name: "Calm", description: "The #1 app for meditation and sleep.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Calm_%28company%29_logo.svg/1200px-Calm_%28company%29_logo.svg.png", link: "https://www.calm.com/" },
        { name: "Headspace", description: "Guided meditation for all levels.", img: "https://www.iestork.org/wp-content/uploads/2020/12/unnamed.png", link: "https://www.headspace.com/" },
        { name: "Wysa", description: "An AI chat-bot for mental wellness.", img: "https://mms.businesswire.com/media/20241010951447/en/2269216/22/Wysa_Logo.jpg", link: "https://www.wysa.io/" },
    ];
    
    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {
        const quotes = [
            { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
            { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" }
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    return (
        <div className="page-container">
            <div className="header">
                <h1>Get Inspired 🌟</h1>
                <p>Overcome your fears, fight anxiety, and embrace a life of peace. Here are hand-picked resources to uplift your spirit.</p>
            </div>
            
            {/* Quote of the Day */}
            <div className="quote-section">
                <h3>Quote of the Day</h3>
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">- {quote.author}</p>
            </div>

            {/* Videos Grid */}
            <h2 className="section-title">🎥 Motivational Videos</h2>
            <div className="video-grid">
                {videos.map((id, index) => (
                    <div key={index} className="box">
                        <iframe className="video-frame" src={`https://www.youtube.com/embed/${id}`} title={`Motivational Video ${index + 1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
                    </div>
                ))}
            </div>

            {/* Books Section */}
            <h2 className="section-title">📚 Recommended Books</h2>
            <div className="books-grid">
                {books.map((book, index) => (
                    <div key={index} className="book-card">
                        <img src={book.img} alt={book.title} className="book-img" />
                        <div className="book-info">
                            <h3>{book.title}</h3>
                            <p className="author">by {book.author}</p>
                            <a href={book.link} target="_blank" rel="noopener noreferrer" className="view-btn">View More</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Apps Section */}
            <h2 className="section-title">📱 Helpful Apps</h2>
            <div className="media-grid">
                {apps.map((app, index) => (
                    <a key={index} href={app.link} target="_blank" rel="noopener noreferrer" className="media-card">
                        <img src={app.img} alt={app.name} className="media-img" />
                        <div className="media-info">
                            <h3>{app.name}</h3>
                            <p>{app.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}