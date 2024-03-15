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
      name: "UHMW (ultra high molecular weight polyethylene) ",
      description: "Is an extremely tough plastic with high abrasion and wear resistance. The versatility of polyethylene has made it a popular plastic for countless industrial applications that require durability, low friction, and chemical resistance. It is used in biomedical engineering due to its high wear-resistance, ductility, and biocompatibility, high tensile & compressive strength. ",
      text: "Ram Extrusion Rods upto 150mm dia, Compression moulded sheets upto 175mm Thcikness & Profiles.   We can supply large quantity with colour choice.",
      advantages: [
        "Self-Lubrication and Non-stick",
        "Excellent resistance to stress and high resistant    ",
        "High operational temperatures  ",
        "Excellent dielectric properties",
        "Highly resistant to most alkalis and acid, organic solvents, degreasing agents.  ",
        "Non-staining, Non toxic.",
        "Economic material is Easy to produce & assemble. ",
      ],
      applications: [
        "Biomedical materials ",
        "Diverse spectrum of applications ",
        "Transport related applications including truck trays, bins, hoppers, Liners etc",
        "Bulk material handling",
        "Food processing and beverage machinery",
        "Mining and mineral processing equipment",
        "Manufacturing equipment",
        "Civil engineering and earthmoving equipment.",
        "High speed conveyors, Packaging machinery parts,Bumpers, pile guards, dock fenders, Chute, hopper, truck bed liners, Wear strips, guide rails, fabricated parts,  plain sliding pads, sliding bearings, Marine Fenders, Navy Plates, Pickers, Check Strips, Trolley Wheels, Star Wheels, Conveyors, Guide Rollers, ..",
        "Due to its strength and durability, UHMW is often used in belt scrapers, chain guides, idler rollers, sprockets machinery components, ...",
      ]
    },
    {
      index: 1,
      name: "NYLON ",
      description: "is popular not just for its elastic properties but also because it is durable, easy to clean, resistant to shrinking, retains it shape even after being stretched or washed. Nylon grade products are strong, stiff engineering plastic with outstanding bearing & wear properties. Nylon is frequently used to replace metal bearings, bushings and often eliminating the need for external lubrication. Other benefits include a reduction in part weight, less operating noise, and decreased wear on mating parts",
      text: "Nylons offer high impact resistance,  high heat distortion temperature, and resist wear, abrasion, and vibration coupled with high tensile strength and modulus of elasticity",
      advantages: [
        "They are Less Expensive. Any time you are substituting a metal screw or bolt with plastics, you are going to save some money. ...",
        "They Weigh Less. As mentioned, nylon is a very lightweight material compared to metal. ...",
        "They're Heat Resistant. ...",
        "They Resist Fading. ...",
        "They are Durable. ...",
        "They Can Have Custom Finishes.",
      ],
      applications: [
        "Nylon is used for a wide range of construction applications. ",
        "It can be molded into a range of sheets and rods. ",
        "It is used primarily in sheets, rods, tubes, pipes, screws, bolts, safety nets, plumbing fittings, and more. ",
        "In addition, custom cast nylon is used for crane pads, industrial hammer heads, and more applications.",
        "Industrial uses – Conveyer and seat belts, parachutes, airbags, nets and ropes, tarpaulins, thread, and tents.",
        "Nylon rods and sheets are used in various industrial application including textile, railways, automobile, food processing, electrical and electronics, defence, appliance manufacturing industries machine parts,",

      ]
    },
    {
      index: 2,
      name: "Delrin® acetal homopolymer (Polyoxymethylene POM) ",
      description: "is the ideal material in parts designed to replace metal. This highly-crystalline engineered thermoplastic is widely regarded for its durability, stiffness, and exceptional dimensional stability. It combines low-friction and high-wear resistance with the high strength and stiffness such applications require. These characteristics make Delrin ideal for high-load and high-impact applications such as gears, conveyor belts, bearings, rollers, bushings, fittings and safety restraints. It provides a wide operating temperature range and good colourability",
      text: "Essentially, Delrin provides a decent balance of properties that actually bridge the gap between metals and plastics. Delrin is a free-cut plastic that offers excellent machinability properties, making it ideal for parts that require complex geometrics or tight tolerances. Due to its superior dimensional stability and good creep resistance, plastic CNC machining works perfectly with Delrin",
      advantages: [
        "Lighter Weight Components",
        "Low Noise and Vibration",
        "No Corrosion in Moist Environments",
        "Eliminates the Need for External Lubrication ",
        "Easily Mass Produced and Prototyped",
        "Less Deposit and Less Tool Cleaning",

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
      description: "is a type of polyolefin that is slightly harder than polyethylene. It is a commodity plastic with low density and high heat resistance. It finds application in plastic parts for machinery and equipment and even fibres and textiles, packaging, automotive, consumer goods, medical, cast films, etc.    It is a rigid, semi-crystalline thermoplastic which is used widely for domestic and industrial applications.  It most commonly used thermoplastics in the world",
      text: "Polypropylene uses range from plastic packaging, plastic parts for machinery and equipment and even fibres and textiles. It is a rigid, semi-crystalline thermoplastic that was first polymerised in 1951 and is used widely today in a range of domestic and industrial applications",
      advantages: [
        "Water, chemical, and detergent resistant",
        "Highly resistant to corrosion and chemical leaking",
        "Malleable and fatigue resistant",
        "Resists to freezing",
        "Can be molded into any desired shape and remolded several times without degradation",
      ],
      applications: []
    },
    {
      index: 4,
      name: "TEFLON  ",
      description: "Properties of Teflon is a chemical resistance compound, the only chemicals that can affect these compounds are alkali metals. It shows good resistance towards heat and low temperature. It has a low water absorption capacity. It has an anti-adhesion ability due to which it is used as non-stick kitchen utensils.",
      text: "The products and applications that depend on the characteristics of Teflon fluoropolymers range from aerospace to energy, cookware to textiles, semiconductors to smart cities.",
      advantages: [
        "It is heat-resistant and cold-resistant.",
        "It is chemical-resistant.",
        "It has great electrical properties.",
        "It has an excellent service life, retaining its properties over a long period of time.",
        "It is Low friction and out performs Acetal & Nylon",
      ],
      applications: [
        "PTFE Ball valve seats, piston rings, seals, lips, cups.",
        "PTFE bearings, bushings, wear strips, gears, side plates,",
        "Diaphragms, insulators, lantern rings, V-rings, gaskets, washers, balls.",
      ]
    },
    {
      index: 5,
      name: "FRP -Fibre Reinforced Polymer Composites ",
      description: "materials are composed of matrix (epoxy resin) and fibre (Aramid, Carbon, Glass, and Basalt).",
      text: "The stiffness and strength of composite materials are controlled by fibers which serves to enhance the mechanical strength and elasticity of the plastic, while the role of matrix is to transfer load and provide protection against environmental elements",
      advantages: [
        "FRP is a versatile, low cost, low maintenance and resilient materials have good mechanical properties that outperforms wood, steel or aluminum in all categories & significant advantages is their inherent resistance to corrosion and various chemicals. It weighs up to 75% less than steel but is equally stronger and unlike metals that can rust or deteriorate over time, FRP composites are impervious to moisture or chemical attacks, making them ideal for applications in harsh environments."
      ],
      applications: [
        "FRP can be used in a wide range of applications in construction, create strong walls and surfaces that are scratch-resistant and able to withstand high impacts, other industrial settings, grating, structures, and industrial shapes is reason enough to make the smart move to the future of industrial constructions, used in schools, hospitals, recreational facilities. The materials are often used for signboards, walkways, guardrails, and drainage systems, utility pipelines structures for water and sewage and can even be used for prefabricated houses. Aerospace is another industry that frequently uses FRP structural materials.",
        "Automotive: Used in vehicle components, body parts, and interior elements for their lightweight and corrosion-resistant properties. ",
        "Aerospace: Utilized in aircraft interiors, exteriors, and structural components due to their high strength-to-weight ratio",
        "INDUSTRIAL & DOMESTIC APLICATION MOULDED PRODUCTS, PROFILES, CHANNELS, RODS, COMPONENTS, BARS, SHEETS, STRIPS, TANKS, TRAYS, BOXS, ANGLE, BEAM, TUBE, PANELS, EQUIMENT FOR TREATMENT PLANTS ETC.  ",
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
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
            <h1 className="h2 mb-4">Instant Features </h1>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

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
                      className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== content.index ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                      href="#0"
                      onClick={(e) => { e.preventDefault(); setTab(content.index); }}
                      key={content.index}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">{content.name}</div>
                        {/* <div className="text-gray-600">{content.text}</div> */}
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
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
                          <div>{content.text}</div>
                          {
                            content.advantages.length != 0 ?
                              <div className="p-2">
                                <div className='h4 text-xl'>Advantages</div>
                                <ul className="text-lg text-gray-400 mb-2 mr-2">
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
                                <div className='h4 text-xl'>Applications</div>
                                <ul className="text-lg text-gray-400 mb-2 mr-2">
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