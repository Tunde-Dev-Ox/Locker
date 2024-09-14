import '/src/css/header.css'

function Header() {
    return(
        <header>
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <img src="/src/assets/logo.svg" alt="" />
                    <span className="logo-text">Locker</span>
                </div>
                <div className="social-media">
                    <a href="https://github.com/Tunde-Dev-Ox" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/github-svgrepo-com.svg" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/josephtunde/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/linkedin-svgrepo-com.svg" alt="linkedin" />
                    </a>
                    <a href="https://x.com/__jot" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/twitter-svgrepo-com.svg" alt="twitter" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header