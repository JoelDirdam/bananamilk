"use client"

import { useState } from "react"

interface ProductCardProps {
    image: string
    title: string
    hoverText?: string
    onClick?: () => void
}

export default function ProductCard({ image, title, hoverText = "quiero\nsaber mas", onClick }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="flex flex-col items-center group relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className="relative w-full aspect-square overflow-hidden rounded-[12px] sm:rounded-[20px] border-[8px] sm:border-[13px] border-transparent group-hover:border-[#FFAFE3] group-hover:bg-[#FFAFE3] transition-all duration-300 ease-in-out">
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                    <p className="absolute text-[#FFAFE3] font-winkle text-2xl sm:text-3xl lg:text-4xl text-center whitespace-pre-line">
                        {hoverText}
                    </p>
                    <p className="text-white font-winkle text-2xl sm:text-3xl lg:text-4xl text-center whitespace-pre-line text-stroke-white-sm">
                        {hoverText}
                    </p>
                </div>
            </div>

            {/* Product Title */}
            <p className="text-center mt-3 sm:mt-4 text-base sm:text-lg text-[#7AA9FF] underline decoration-[#7AA9FF] group-hover:decoration-[#FFAFE3] group-hover:text-[#FFAFE3] transition-all duration-300 ease-in-out font-winkle">
                {title}
            </p>
        </div>
    )
}
