import './Home.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const asideImg1 = document.querySelector('.asideImg1');
            const asideImg2 = document.querySelector('.asideImg2');

            if (scrollTop > 80) { // Adjust the scroll position value as needed
                asideImg1.style.transform = 'translateX(0)';
                asideImg2.style.transform = 'translateX(0)';
            } else {
                asideImg1.style.transform = 'translateX(60px)';
                asideImg2.style.transform = 'translateX(-60px)';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="home1">
            <main className="content">
                <aside className="asideLeft">
                    <h1>IPL-LLM</h1>
                    <h1>Indian Premier League</h1>
                    <h2>Explore our content</h2>
                </aside>
                <aside className="asideRight">
                    <div className="asideBox">
                    <Link to="/News">
                        <img className="asideImg1" src="/images/news.jpg"/>
                    </Link>
                    <Link to="/Chatbot">
                        <img className="asideImg2" src="/images/chatbot.jpg" alt="chatbot"/>
                    </Link>
                    </div>
                </aside>
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                    <p>Follow us on:</p>
                    <div className="social-media-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{"textDecoration":"none","color":"white"}}>
                            <img src="/images/instagram.png" alt="Instagram" />Instagram
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
