import './Home.css';

const Home = () => {
    return (
        <div className="home1">
            <h2>HELLO!! EXPLORE OUR CONTENT</h2>
            {/* Add some content here to make the page scrollable */}
            <div className="content">
            
                {/* You can repeat or add more content to ensure the page is scrollable */}
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                    <p>Follow us on:</p>
                    <div className="social-media-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Instagram_logo.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;