import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from './SideNavContent';
import {motion} from 'framer-motion';
import { useSelector } from 'react-redux';

function HeaderBottom() {
    const ref=useRef();
    const [sidebar,setSidebar]=useState(false);
    const userInfo = useSelector((state) => state.amazon.userInfo);
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if(e.target.contains(ref.current)){
                setSidebar(false);
            }
        })
    },[ref,sidebar])
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* list items */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="lgl:headerHover lgl:h-[83.42px] sm:h-0 absolute top-4 left-4 lgl:static lgl:inline-flex items-center gap-1"
        >
          <MenuIcon />
          <span className='hidden lgl:flex'>All</span>
        </li>
        <li className="headerHover hidden lgl:inline-flex">Today's Deals</li>
        <li className="headerHover hidden lgl:inline-flex">Customer Service</li>
        <li className="headerHover hidden lgl:inline-flex">Gift Cards</li>
        <li className="headerHover hidden lgl:inline-flex">Registry</li>
        <li className="headerHover hidden lgl:inline-flex">Sell</li>
      </ul>
      {/* list items end here */}
      {/* sidenav start here */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
                {userInfo ? (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide">
                    {userInfo.userName}
                  </h3>
                ) : (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide">
                    Hello, Sign In
                  </h3>
                )}
                <span
                  onClick={() => setSidebar(false)}
                  className="cursor-pointer absolute top-0 left-[74%] md:left-[310px] xs:left-[68%] bg-transparent w-10 h-10 flex items-center justify-center hover:text-red-400 text-white duration-300"
                >
                  <CloseIcon />
                </span>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstrore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Progress & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
            </motion.div>
          </div>
        </div>
      )}
      {/* sidenav end here */}
    </div>
  );
}

export default HeaderBottom