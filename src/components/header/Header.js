import React, { useEffect, useState } from 'react'
import {logo} from "../../assets/index";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { allItems } from "../../constants";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSearch, setResultNotFound } from "../../redux/amazonSlice";

function Header() {
    const dispatch = useDispatch();
    const [searchItem,setSearchItem]=useState("");
    const [showAll,setShowAll]=useState(false);
    const products=useSelector((state)=>state.amazon.products);
    useEffect(()=>{
      if (searchItem.trim().length === 0) {
        handleUserSearch();
        dispatch(setResultNotFound(false));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchItem])
    const handleUserSearch=()=>{
      dispatch(setUserSearch({ searchItem }));
    }
    // const search = useSelector((state) => state.amazon.userSearch);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center md1:justify-between sm:justify-between gap-4">
        <Link to="/ ">
          <div className="headerHover">
            <img className="w-24 mt-2" src={logo} alt="logo"></img>
          </div>
        </Link>
        <div className="headerHover hidden md1:inline-flex">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Delhi
            </span>
          </p>
        </div>
        <div className="h-10 rounded-md lgl:flex hidden flex-grow relative">
          <span
            className="w-14 h-full  bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
            onClick={() => setShowAll(!showAll)}
          >
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
            onChange={(e)=>{
              setSearchItem(e.target.value.toLocaleLowerCase());
            }}
            onKeyDown={(e)=>{
              if(e.key === 'Enter'){
                handleUserSearch();
              }
            }}
            value={searchItem}
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md" onClick={()=>
            {handleUserSearch()}
          }>
            <SearchIcon />
          </span>
        </div>
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover ">
            <p className="text-sm md1:text-xs text-white md1:text-lightText font-light">
              Hello, sign in
            </p>
            <p
              className="text-sm font-semibold -mt-1 text-whiteT
             hidden md1:inline-flex"
            >
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p
            className="text-sm font-semibold -mt-1 text-whiteT
            "
          >
            & Orders
          </p>
        </div>
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header