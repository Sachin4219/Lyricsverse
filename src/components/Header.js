import "./Header.css";

function Header() {
    return ( 
        <div className="header">
            <div className="header-left">
                <a>Home</a>
                <a>Blog</a>
            </div>
            <div className="header-center">
                <h2 className="logo">
                    LyricsVerse
                </h2>
            </div>
            <div className="header-right">
                <a>Contact us</a>
                <a>About us</a>
            </div>
        </div>
     );
}

export default Header;