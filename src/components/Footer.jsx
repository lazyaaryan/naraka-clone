import {
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaFacebookSquare,
    FaSteam,
    FaDiscord,
} from 'react-icons/fa';

const socialIcons = [
    { Icon: FaInstagram, label: 'Instagram' },
    { Icon: FaTwitter, label: 'Twitter' },
    { Icon: FaYoutube, label: 'YouTube' },
    { Icon: FaFacebookSquare, label: 'Facebook' },
    { Icon: FaSteam, label: 'Steam' },
    { Icon: FaDiscord, label: 'Discord' },
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* links and social icons */}
            <div className="footer-top">
                <div className="footer-links">
                    <a href="#" className="footer-link">CONTACT US</a>
                    <span className="footer-divider">|</span>
                    <a href="#" className="footer-link">CUSTOMER SERVICE</a>
                </div>
                <div className="footer-social">
                    <span className="footer-follow">FOLLOW US</span>
                    {socialIcons.map(({ Icon, label }) => (
                        <a key={label} href="#" className="footer-social-icon" aria-label={label}>
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>

            {/* partners */}
            <div className="footer-partners">
                <div className="footer-partner-logos">
                    <span className="partner-logo">unity</span>
                    <span className="partner-logo">NVIDIA</span>
                    <span className="partner-logo">intel</span>
                    <span className="partner-logo">AMD</span>
                </div>
                <div className="footer-rating">
                    <div className="rating-badge">
                        <span className="rating-age">12</span>
                        <span className="rating-label">www.pegi.info</span>
                    </div>
                </div>
            </div>

            {/* copyright */}
            <div className="footer-bottom">
                <div className="footer-studio">
                    <span className="studio-name">24 ENTERTAINMENT</span>
                </div>
                <div className="footer-legal">
                    <p>©1997-2026 NetEase, Inc. All Rights Reserved</p>
                    <p>
                        <a href="#">Privacy Policy</a> and <a href="#">User Agreement</a> · Terms and Conditions
                    </p>
                    <p>Company Address: #599 Wangshang Rd., Binjiang District, Hangzhou, China</p>
                    <p>Providing Online Computer Games</p>
                    <p>GLOBAL@NARAKATHEGAME.COM</p>
                </div>
            </div>
        </footer>
    );
}
