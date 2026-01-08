"use client"
import Button from "./Button"

export default function HeroSection() {
    return (
        <div className="bg-hbg1 bg-cover bg-center min-h-[50vh] sm:min-h-[60vh] lg:h-[65vh] flex items-center justify-center px-4">
            <div className="bm-container">
                <div className="relative text-center">
                    {/* Main Heading with Text Stroke */}
                    <h1
                        className="gradient-text1 text-transparent bg-clip-text font-sanggar font-bold relative"
                        style={{ fontSize: "var(--bm-text-7xl)" }}
                    >
                        <span className="absolute inset-0 text-stroke-white">Mercancía de kpop original y fanmade</span>
                        <span className="relative">Mercancía de kpop original y fanmade</span>
                    </h1>

                    {/* Subtitle with Text Stroke */}
                    <p className="text-[#FFDEE7] font-winkle font-bold mt-4 relative" style={{ fontSize: "var(--bm-text-5xl)" }}>
                        <span className="absolute inset-0 text-stroke-pink">cerquita de ti</span>
                        <span className="relative">cerquita de ti</span>
                    </p>

                    {/* CTA Button */}
                    <div className="mt-6 sm:mt-10">
                        <Button variant="primary" size="lg" onClick={() => (window.location.href = "/shop")}>
                            Quiero comprar ya!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
