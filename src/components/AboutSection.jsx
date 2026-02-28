export default function AboutSection() {
    return (
        <section className="about">
            <div className="about-inner">
                {/* description */}
                <div className="about-text">
                    <h2 className="about-heading">
                        THE ONE AND ONLY<br />
                        MELEE-FOCUSED BATTLE ROYALE
                    </h2>

                    <p className="about-paragraph">
                        Years ago on the Morus Isle, two ancient gods collided – creating the Mask of
                        Immortality: an artifact of legendary power. Now, all heroes across the
                        world assemble on this very same land, each wishing to claim the Mask as
                        their own.
                    </p>

                    <p className="about-paragraph">
                        NARAKA: BLADEPOINT offers you a Battle Royale experience unlike any
                        other: you'll enjoy dynamic, fast-paced and ever shifting melee-focused
                        combat, battle your enemies with punishing combos, parries, and grit or
                        outsmart them using lethal counters in an intense mind game. Wall run,
                        swoop down, and zip across mountains and buildings to hunt down
                        unsuspecting foes using your grappling hook and parkour skills.
                    </p>

                    <p className="about-paragraph">
                        More than 10 million players have joined the fray, and it's your turn now!
                        Travel with NARAKA: BLADEPOINT to the magnificent but dangerous lands
                        of Morus and Holoroth!
                    </p>
                </div>

                {/* image */}
                <div className="about-image-wrap">
                    <img
                        className="about-image"
                        src="/gallery1.jpg"
                        alt="Anime battle scene"
                    />
                </div>
            </div>
        </section>
    );
}
