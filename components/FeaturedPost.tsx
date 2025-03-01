import React from 'react'

import { Raleway } from "next/font/google";
const fontRaleway = Raleway({
    subsets: ["latin"],
    weight: "400",
});
function FeaturedPost() {
    return (
        <div className={`${fontRaleway.className} min-h-[80vh] bg-secondary-background`}>

        </div>
    )
}

export default FeaturedPost
