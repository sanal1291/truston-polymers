'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import { features } from 'process'

export default function Features() {

  const [tab, setTab] = useState<number>(0)

  const [tabs, setTabs] = useState([
    {
      index: 0,
      name: "UHMW-PE ",
      description: "Is an extremely tough plastic with high abrasion and wear resistance. The versatility of polyethylene has made it a popular plastic for countless industrial applications that require durability, low friction, and chemical resistance. It is used in biomedical engineering due to its high wear-resistance, ductility, and biocompatibility, high tensile & compressive strength.",
      // text: "Ram Extrusion Rods upto 150mm dia, Compression moulded sheets upto 175mm Thcikness & Profiles.   We can supply large quantity with colour choice.",
      advantages: [
        "Impact Resistant",
        "Abrasion Resistance",
        "Non-staining, Non toxic.",
        "Self-Lubricating Low Friction Polymer",
        "High operational temperatures",
        "UHMW is 8 Times Lighter Than Steel",
        "UHMW Reduces Maintenance Costs & Downtime",
        "Highly resistant to most alkalis and acid, organic solvents, degreasing agents.",
      ],
      applications: [
        "Conveyor systems",
        "Food processing industries",
        "Pumping and valve parts",
        "Marine Fenders, Navy Plates, Pickers, Check Strips, Trolley Wheels, Star Wheels, Guide Rollers,  Belt scrapers, chain guides, idler rollers, sprockets ",
      ]
    },
    {
      index: 1,
      name: "NYLON ",
      description: "polymers are defined by their toughness, high impact resistance and good abrasion resistance.  Nylon is frequently used to replace metal bearings, bushings and often eliminating the need for external lubrication. Other benefits include a reduction in part weight, less operating noise, and decreased wear on mating parts.",
      // text: "Nylons offer high impact resistance,  high heat distortion temperature, and resist wear, abrasion, and vibration coupled with high tensile strength and modulus of elasticity",
      advantages: [
        "Resistance to shrinkage",
        "High Impact Resistance",
        "Anticorrosive",
        "Shock absorbing properties",
        "Good electrical properties",
        "Less expensive and durable",
      ],
      applications: [
        "It is used primarily in sheets, rods, tubes, pipes, screws, bolts, safety nets, plumbing fittings, and more.",
        "Gears, Bushes, Rollers, Washers, Seals.",
        "Sprockets, Cams, Bearings, Star wheels Guides.",
        "In addition, custom cast nylon is used for crane pads, industrial hammer heads, and more applications.",
      ]
    },
    {
      index: 2,
      name: "DELRIN ",
      description: "is the ideal material in parts designed to replace metal. This highly-crystalline engineered thermoplastic is widely regarded for its durability, stiffness, and exceptional dimensional stability. It combines low-friction and high-wear resistance with the high strength and stiffness such applications require. These characteristics make Delrin ideal for high-load and high-impact applications such as gears, conveyor belts, bearings, rollers, bushings, fittings and safety restraints. It provides a wide operating temperature range and good colors.",
      // text: "Essentially, Delrin provides a decent balance of properties that actually bridge the gap between metals and plastics. Delrin is a free-cut plastic that offers excellent machinability properties, making it ideal for parts that require complex geometrics or tight tolerances. Due to its superior dimensional stability and good creep resistance, plastic CNC machining works perfectly with Delrin",
      advantages: [
        "High durability, Stiffness and impact strength",
        "Low noise and vibrations",
        "Anticorrosive",
        "Natural Lubricity",
        "Good machinability",
      ],
      applications: [
        "High load mechanical applications. Gears. Safety restraints. Conveyor belts. Bushings,....",
        "Applications exposed to the external environment. Pumps and valves. Actuator parts. Piping Fittings,……",
        "Automotive applications. Fasteners. Fuel system components. Interior trimmings. ...",
        "Electrical insulator parts and components,……",
      ]
    },
    {
      index: 3,
      name: "POLYPROPYELENE (PP) ",
      description: "is a versatile thermoplastic polymer widely used in various industries for its exceptional properties. It's known for being lightweight, durable, and resistant to many chemicals and moisture. PP is easily moldable, making it suitable for a wide range of applications such as packaging, automotive parts, textiles, medical devices, and consumer goods. Its affordability, recyclability, and ability to withstand high temperatures further contribute to its popularity in manufacturing processes.",
      // text: "Polypropylene uses range from plastic packaging, plastic parts for machinery and equipment and even fibres and textiles. It is a rigid, semi-crystalline thermoplastic that was first polymerised in 1951 and is used widely today in a range of domestic and industrial applications",
      advantages: [
        "Lightweight",
        "High chemical resistance",
        "Low moisture absorption",
        "Good thermal resistance",
        "Flexible and durable",
        "Excellent fatigue resistance",
        "Economical",
        "Recyclable",
      ],
      applications: [
        "Impellers, Flanges",
        "Packaging and Containers",
        "Automotive Components",
        "Medical Devices",
        "Electrical and Electronic Components",
        "Building Materials",
      ]
    },
    {
      index: 4,
      name: "TEFLON",
      description: ", also known as polytetrafluoroethylene (PTFE), is a synthetic polymer renowned for its non-stick properties and resistance to heat and chemicals. Teflon finds wide application in cookware coatings, industrial seals, electrical insulation, and medical devices. Its key attributes include exceptional non-stick performance, high temperature resistance, low friction, chemical inertness, and biocompatibility, making it indispensable across diverse industries.",
      // text: "The products and applications that depend on the characteristics of Teflon fluoropolymers range from aerospace to energy, cookware to textiles, semiconductors to smart cities.",
      advantages: [
        "Non-Stick Properties",
        "Heat Resistance",
        "Chemical Inertness",
        "Low Friction",
        "Electrical Insulation",
        "Biocompatibility",
        "Weather Resistance",

      ],
      applications: [
        "Insulators for electrical industries",
        "Pumps, Gasket, Seals, Valves",
        "PTFE Ball valve seats, piston rings, seals, lips, cups.",
        "PTFE bearings, bushings, wear strips, gears, side plates,",
        "Diaphragms, insulators, lantern rings, V-rings, washers, balls.",
      ]
    },
    {
      index: 5,
      name: "Fiber-reinforced polymer (FRP) ",
      description: ") is a composite material made of a polymer matrix reinforced with fibers. These fibers, typically glass, carbon, or aramid, provide strength and stiffness to the polymer matrix, enhancing its mechanical properties. FRP is known for its lightweight, high strength-to-weight ratio, corrosion resistance, and durability. It finds extensive applications in industries such as construction, automotive, aerospace, marine, and infrastructure. In construction, FRP is used for structural elements like beams, columns, and panels due to its strength and resistance to environmental factors. In the automotive and aerospace sectors, FRP components help reduce weight while maintaining structural integrity. Its corrosion resistance makes it suitable for marine applications like boat hulls and decks. Overall, FRP offers a versatile and cost-effective solution for various engineering challenges.",
      // text: "The stiffness and strength of composite materials are controlled by fibers which serves to enhance the mechanical strength and elasticity of the plastic, while the role of matrix is to transfer load and provide protection against environmental elements",
      advantages: [
        "High Strength-to-Weight Ratio",
        "Corrosion Resistance",
        "Lightweight",
        "Durable",
        "Electrical Insulation",
        "Thermal Insulation",
        "Design Flexibility",
        "Impact Resistance",
        "Low Maintenance",
      ],
      applications: [
        "Construction and Infrastructure",
        "Automotive Industry",
        "Aerospace and Marine Structures",
        "Electrical and Electronics Enclosures",
        "Sporting Goods and Recreation",
        "Chemical Processing Equipment",
        "Water and Wastewater Treatment",
        "Renewable Energy Structures",
      ]
    },
    // {
    //   name: "",
    //   description: "",
    //   text: "",
    //   advantages: [],
    //   applications: []
    // },
  ])

  // const heightFix = () => {
  //   if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  // }

  // useEffect(() => {
  //   heightFix()
  // }, [])

  return (
    <section id='features' className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
            <h1 className="h2 mb-4" data-aos="zoom-y-out">Instant Features </h1>
          </div> */}
          {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}

          {/* Section content */}
          <div className="md:grid  md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-5 md:mt-6" data-aos="fade-right">
              {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Instant Features </h3>
                <p className="text-xl  text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div> */}
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {
                  tabs.map(content =>
                    <a
                      className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== content.index ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-green-200 border-transparent'}`}
                      href="#0"
                      onClick={(e) => { e.preventDefault(); setTab(content.index); }}
                      key={content.index}
                    >
                      <div>
                        <div className={`font-bold leading-snug tracking-tight mb-1 ${tab !== content.index ? '' : ' text-green-600'}`} >{content.name}</div>
                        {/* <div className="text-gray-600">{content.text}</div> */}
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg key={content.index} className='transition  duration-700' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0ee112" transform={tab === content.index ? "rotate(0)" : "rotate(180)"}>
                          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                          <g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={tab === content.index ? "#3bdb0f" : "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g>
                        </svg>
                      </div>
                    </a>)
                }

              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7 mb-8 md:mb-0 md:order-1 ">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out"
                // ref={tabs}
                >
                  {
                    tabs.map(content =>
                      <Transition
                        show={tab === content.index}
                        appear={true}
                        className="w-full"
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterFrom="opacity-0 translate-y-16"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in-out duration-300 transform absolute"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-16"
                        // beforeEnter={() => heightFix()}
                        unmount={false}
                        key={content.index}
                      >
                        <div className="text-start">
                          <div className='pb-3'>
                            <span className='h4'>{content.name}</span>
                            {content.description}
                          </div>
                          {/* <div>{content.text}</div> */}
                          {
                            content.advantages.length != 0 ?
                              <div className="p-2">
                                <div className='h4 text-xl'>FEATURES</div>
                                <ul className="text-lg text-gray-800 mb-2 mr-2">
                                  {
                                    content.advantages.map((advantage) =>
                                      <li className="flex  mb-2" key={advantage}>
                                        <svg className="w-3 h-3 mt-2 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>{advantage}</span>
                                      </li>
                                    )
                                  }
                                </ul>
                              </div> : <div></div>
                          }
                          {
                            content.applications.length != 0 ?
                              <div className="p-2">
                                <div className='h4 text-xl'>APPLICATIONS</div>
                                <ul className="text-lg text-gray-800 mb-2 mr-2">
                                  {
                                    content.applications.map((application) =>
                                      <li className="flex  mb-2" key={application}>
                                        <svg className="w-3 h-3 mt-2 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>{application}</span>
                                      </li>
                                    )
                                  }
                                </ul>
                              </div> : <div></div>
                          }
                          {/* <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                          <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                        </div>
                      </Transition>)
                  }

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}