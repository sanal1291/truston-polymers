import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className=" align-middle  px-4 sm:px-6 bg-gray-200">

        {/* Bottom area */}
        < div className="max-w-6xl mx-auto flex flex-col-reverse items-center sm:flex-row  sm:items-start justify-between py-4 md:py-8 border-t border-gray-200" >


          <div>
            <Logo />
            <div className="text-sm text-gray-600 mr-4" >trustonpolymers.com</div >

          </div>
          <div>
            <div className='flex font-bold items-center  text-xl align-middle '>
              <span className=''> Address</span>
              <svg fill="#000000" width="40px" height="40px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" /></svg>
            </div>
            <ul>
              <li>No.829</li>
              <li>Ramu's Centre,MES  Ring Road</li>
              <li>Muthyalanagar</li>
              <li>Bangalore-560054</li>
            </ul>
          </div>
          < div className="mb-4 md:order-1 md:ml-4 md:mb-0 " >
            <div className='flex font-bold  text-xl items-center'>
              <p className='pr-2'>Contact us</p>
              <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <a href='mailto:trustonpolymers@gmail.com' className='flex text-blue-600 items-center '>
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              </svg>
              trustonpolymers@gmail.com
            </a>
          </ div>
        </div >

      </div >
    </footer >
  )
}
