import { useState } from 'react';

const tabs = ['WALLPAPER', 'SCREENSHOT', 'VIDEO'];

const base = import.meta.env.BASE_URL;
const galleryImages = [
    { src: `${base}gallery1.jpg`, alt: 'Demon Slayer - Akaza eye reflection' },
    { src: `${base}gallery2.jpg`, alt: 'One Piece - Luffy' },
    { src: `${base}gallery3.jpg`, alt: 'Dragon Ball - Goku & Vegeta' },
    { src: `${base}gallery4.jpg`, alt: 'Demon Slayer - Tanjiro vs Akaza' },
];

export default function MediaSection() {
    const [activeTab, setActiveTab] = useState('WALLPAPER');
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="media">
            {/* title and tabs */}
            <div className="media-header">
                <h2 className="media-title">MEDIA</h2>
                <div className="media-tabs">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab}
                            className={`media-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                            {i < tabs.length - 1 && <span className="media-tab-divider">|</span>}
                        </button>
                    ))}
                </div>
            </div>

            {/* gallery image */}
            <div className="media-main">
                <button
                    className="media-arrow media-arrow-left"
                    onClick={() => setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                >
                    ‹
                </button>
                <div className="media-main-image-wrap">
                    <img
                        className="media-main-image"
                        src={galleryImages[activeIndex].src}
                        alt={galleryImages[activeIndex].alt}
                    />
                </div>
                <button
                    className="media-arrow media-arrow-right"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % galleryImages.length)}
                >
                    ›
                </button>
            </div>

            {/* thumbnails */}
            <div className="media-thumbnails">
                {galleryImages.map((img, i) => (
                    <button
                        key={i}
                        className={`media-thumb ${i === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(i)}
                    >
                        <img src={img.src} alt={img.alt} />
                    </button>
                ))}
            </div>
        </section>
    );
}
