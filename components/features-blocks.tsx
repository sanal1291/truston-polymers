import { useState } from "react"
import Image from 'next/image'
import main from '@/public/images/products/2.jpg'
import main2 from '@/public/images/products/1.jpg'

export default function FeaturesBlocks() {

  const [features, usefeatures] = useState([
    {
      title: "Stock material",
      image: main2,
      contents: "we offer Polymer rods and sheets of various sizes and colours as per requirement"
    },
    {
      title: "Machined Components",
      image: main,
      contents: "We offer wide range of machined polymer parts and components"
    },
  ])
  return (
    <section id="products" className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h2 className="h2 mb-4">Our Products</h2>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Items */}
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 items-start max-w-none ">
            {
              features.map(feature =>
                <div key={feature.title} className="relative mx-auto max-w-lg h-1/1  grid grid-cols-2 gap-4 p-6 bg-white rounded  shadow-inner min-w-48">
                  <div className="grid">
                    <Image src={feature.image} objectFit="" alt="stock material image"></Image>
                  </div>
                  <div className="min-h-fit">
                    <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-center">{feature.contents}</p>
                  </div></div>
              )
            }


            {/* 6th item */}
            {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" strokeLinecap="square">
                    <path className="stroke-current text-white" d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775" />
                    <path className="stroke-current text-blue-300" d="M44.571 43.429H34.286M44.571 37.714H34.286" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}