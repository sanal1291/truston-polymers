import { useState } from "react";

export default function Benefits() {

    const [advantages, setadvantages] = useState([
        "High resistance to Abrasion, Corrosion, wear, Impact, Chemical, fatigue, Heat, Fire ",
        "Low maintenance, coefficient of friction, wear, moisture absorption,",
        "Design flexibility (colours, textures)  ",
        "Lightweight & Safe to handle",
        "Low Noise and vibration ",
        "Lower cost than traditional materials",
        "Better sealing performance",
        "Easier to fabricate, machining, ship & install  ",
        "Self-lubricating, ",
        "High pressure/velocity performance",
        "Stable and rigid & Colour options ",

    ]);
    const [applications, setApplications] = useState([
        "Improve safety.",
        "Resist abrasion, impact & corrosion.",
        "Reduce cost and weight.",
        "Increase colour options without painting.",
    ])
    return (
        <section id="benefits">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-6 md:pt-10   h4">
                    <div className="max-w-3xl mx-auto  pb-12 md:pb-16">
                        <h1 className="h2 text-center mb-4" data-aos="zoom-y-out">Benefits of Engineering Plastics</h1>
                        {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
                        <div className="flex justify-center flex-col md:flex-row">
                            <ul className="text-lg text-gray-800 mb-2 mr-2 columns-1 md:columns-2">
                                {
                                    advantages.map((advantage) =>
                                        <li className="flex  mb-2" key={advantage} data-aos="zoom-y-out">
                                            <svg className="w-3 h-3 mt-2 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>{advantage}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div></section>
    )
}