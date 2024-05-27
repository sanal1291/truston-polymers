import { useState } from "react";

export default function Advantages() {

    const [advantages, setadvantages] = useState([
        "High resistance to Abrasion, Corrosion, wear, Impact, Chemical, fatigue, Heat, Fire ",
        "Low maintenance, coefficient of friction, wear, moisture absorption,",
        "Design flexibility (colours, textures)  ",
        "Lightweight ",
        "Low Noise and vibration ",
        "Lower cost than traditional materials",
        "Better sealing performance",
        "Easier to fabricate, machining, ship & install  ",
        "Self-lubricating, ",
        "High pressure/velocity performance",
        "Stable and rigid ",

    ]);
    const [applications, setApplications] = useState([
        "Improve safety.",
        "Resist abrasion, impact & corrosion.",
        "Reduce cost and weight.",
        "Increase colour options without painting.",
    ])
    return (
        <section >
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-6 md:pt-10   h4">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto  pb-3 md:pb-3">
                        {/* <h1 className="h2 mb-4">Benefits of Engineering Plastics</h1> */}
                        <h3 className="mb-4 " data-aos="zoom-y-out">TRUSTON was established in 2017 as a partnership firm to serve quality Polymers & customized products to boost the thrust of engineering growth in India. Three decades of experience & technical expertise in the Polymer processing industry helps us to identify perfect material combination for each application.</h3>
                        <h4 className="mb-4 text-gray-600" data-aos="zoom-y-out">Truston committed to provide the best service and the best products to our customers.</h4>
                        <h4 className="mb-4 text-gray-600" data-aos="zoom-y-out">The high-performing Engineering Plastics are used in numerous industrial applications including,</h4>
                        <div className="flex  flex-col md:flex-row">
                            <ul className="text-lg  mb-2 mr-2">
                                {
                                    applications.map((application) =>
                                        <li className="flex  mb-2" key={application} data-aos="zoom-y-out">
                                            <svg className="w-3 h-3 mt-2 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>{application}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>{/* Section header */}
                </div>
            </div></section>
    )
}