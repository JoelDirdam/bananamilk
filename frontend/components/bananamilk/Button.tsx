import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "gradient"
    size?: "sm" | "md" | "lg"
    children: React.ReactNode
}

export default function Button({ variant = "primary", size = "md", children, className = "", ...props }: ButtonProps) {
    const baseStyles = "font-winkle rounded-full transition-all duration-300 hover:scale-105 active:scale-95"

    const variantStyles = {
        primary: "bg-[#FFDEE7] text-[#FF96B2] hover:bg-[#FFC5D3]",
        secondary: "bg-[#FFD9E1] text-[#FF6F91] hover:bg-[#FFC5D3]",
        gradient: "gradient-button1 text-white",
    }

    const sizeStyles = {
        sm: "text-base sm:text-lg py-1.5 px-4 sm:px-6",
        md: "text-lg sm:text-xl lg:text-2xl py-2 px-6 sm:px-8",
        lg: "text-xl sm:text-2xl lg:text-3xl py-2.5 px-8 sm:px-10",
    }

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}
