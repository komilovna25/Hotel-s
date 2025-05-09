import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { footer } from '../../constants'


const Footer = () => {
  return (
    <div className="bg-[#F6F9FC] px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
            <Link href='/'><img className="h-9 invert opacity-80" src={assets.logo} alt="dummyLogoDark" /></Link>
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            {/* <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul> */}
            <ul>
              {footer.map((foot,index) => (
                <li key={index}>
                  <Link href={foot.route}>
                  {foot.name}
                  </Link>
                  </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
            <div className="text-sm space-y-2">
              <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-black/90 w-24 h-9 text-white rounded">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 © Company name. All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
