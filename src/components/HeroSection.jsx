import {
    FaSteam,
    FaXbox,
    FaPlaystation,
    FaGooglePlay,
} from 'react-icons/fa';
import { SiEpicgames } from 'react-icons/si';

const YOUTUBE_VIDEO_ID = 'CY5WLrSYPzo';

const platforms = [
    { Icon: FaSteam, label: 'Steam' },
    { Icon: SiEpicgames, label: 'Epic Games' },
    { Icon: FaXbox, label: 'Xbox' },
    { Icon: FaPlaystation, label: 'PlayStation' },
    { Icon: FaGooglePlay, label: 'Mobile' },
];

export default function HeroSection() {
    return (
        <section className="hero">
            {/* video bg */}
            <div className="hero-video-wrap">
                <iframe
                    className="hero-video-iframe"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&cc_load_policy=0&start=0`}
                    title="Naraka Bladepoint Background"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                />
            </div>

            {/* overlay */}
            <div className="hero-overlay" />

            {/* main content */}
            <div className="hero-content">
                <h1 className="hero-title">NARAKA</h1>
                <span className="hero-title-sub">Bladepoint</span>

                <div className="hero-season">
                    <span className="hero-season-line" />
                    <span className="hero-season-text">Season 19 : Skybreak</span>
                    <span className="hero-season-line" />
                </div>

                <div className="hero-download">
                    <button className="hero-download-btn">Download Now</button>
                </div>

                <div className="hero-divider-dot" />

                <div className="hero-platforms">
                    {platforms.map(({ Icon, label }) => (
                        <a
                            key={label}
                            className="hero-platform-icon"
                            href="#"
                            aria-label={label}
                            title={label}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>


        </section>
    );
}
