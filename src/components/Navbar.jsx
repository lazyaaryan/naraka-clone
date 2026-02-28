import { useState } from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaDiscord,
} from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

const navLinks = [
  { label: 'Game', hasDropdown: true },
  { label: 'Community', hasDropdown: true },
  { label: 'Esport', hasDropdown: true },
  { label: 'Guide', hasDropdown: true },
  { label: 'Explore', hasDropdown: true },
  { label: 'Language', hasDropdown: true },
];

const socialIcons = [
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaTwitter, label: 'Twitter' },
  { Icon: FaYoutube, label: 'YouTube' },
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaDiscord, label: 'Discord' },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar-logo">
        <span className="navbar-logo-title">NARAKA</span>
        <span className="navbar-logo-subtitle">Bladepoint</span>
        <span className="navbar-logo-badge">Free to Play</span>
      </div>

      {/* nav links */}
      <div className="navbar-center">
        {navLinks.map((link) => (
          <a
            key={link.label}
            className="navbar-link"
            href="#"
            onMouseEnter={() => setHoveredLink(link.label)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.label}
            {link.hasDropdown && (
              <IoChevronDown className="navbar-link-chevron" />
            )}
          </a>
        ))}
      </div>

      {/* socials + login */}
      <div className="navbar-right">
        <div className="navbar-socials">
          {socialIcons.map(({ Icon, label }) => (
            <a
              key={label}
              className="navbar-social-icon"
              href="#"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
        <button className="navbar-login">Log In</button>
      </div>
    </nav>
  );
}
