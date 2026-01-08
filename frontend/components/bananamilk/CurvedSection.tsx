import type React from "react"

interface CurvedSectionProps {
    children: React.ReactNode
    backgroundColor: string
    curveColor?: string
    curvePosition?: "top" | "bottom" | "both"
    className?: string
}

export default function CurvedSection({
    children,
    backgroundColor,
    curveColor = "#FFF",
    curvePosition = "top",
    className = "",
}: CurvedSectionProps) {
    return (
        <div className={`relative ${className}`} style={{ backgroundColor }}>
            {/* Top Curve */}
            {(curvePosition === "top" || curvePosition === "both") && (
                <div className="custom-shape-divider-top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 120" preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86c82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill={curveColor}
                        />
                    </svg>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">{children}</div>

            {/* Bottom Curve */}
            {(curvePosition === "bottom" || curvePosition === "both") && (
                <div className="custom-shape-divider-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 100" className="scale-y-[-1]">
                        <path
                            d="M500 4c-125 0-125 96-250 96S125 4 0 4V0h1000v4c-125 0-125 96-250 96S625 4 500 4Z"
                            fill={curveColor}
                        />
                        <path
                            d="M1500 4c-125 0-125 96-250 96S1125 4 1000 4V0h1000v4c-125 0-125 96-250 96S1625 4 1500 4Z"
                            fill={curveColor}
                        />
                    </svg>
                </div>
            )}
        </div>
    )
}
