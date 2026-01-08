import React from "react"
import BananaMilkLayout from "../components/bananamilk/BananaMilkLayout"
import "../styles/bananamilk.css"
import "../src/index.css"

// Import the existing Home component
import Home from "../src/components/Home/Home"

export default function Page() {
    return (
        <BananaMilkLayout>
            <Home />
        </BananaMilkLayout>
    )
}
