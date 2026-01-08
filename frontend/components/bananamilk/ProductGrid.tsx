import type React from "react"

interface ProductGridProps {
    children: React.ReactNode
    columns?: {
        mobile?: number
        tablet?: number
        desktop?: number
    }
}

export default function ProductGrid({ children, columns }: ProductGridProps) {
    const gridClass = columns
        ? `grid gap-4 sm:gap-6 lg:gap-8 ${`grid-cols-${columns.mobile || 1} sm:grid-cols-${columns.tablet || 2} lg:grid-cols-${columns.desktop || 4}`}`
        : "bm-product-grid"

    return <div className={gridClass}>{children}</div>
}
