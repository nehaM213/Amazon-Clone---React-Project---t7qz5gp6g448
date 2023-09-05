import React, { useEffect, useState } from 'react'
import {logo} from "../../assets/index";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { allItems } from "../../constants";
import { accountsLists } from "../../constants";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './HeaderBottom';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUserSearch, setResultNotFound, userSignOut } from "../../redux/amazonSlice";
import { getAuth, signOut } from "firebase/auth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import UseWindowSize from '../../constants/UseWindowSize';

function Header() {
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchItem,setSearchItem]=useState("");
    const [showAll,setShowAll]=useState(false);
    const [showAccountsAndList,setShowAccountsAndList]=useState(false);
    const products=useSelector((state)=>state.amazon.products);
    const userInfo=useSelector((state)=>state.amazon.userInfo);
    const size = UseWindowSize();
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
    const handleLogout=()=>{
      signOut(auth)
        .then(() => {
          dispatch(userSignOut());
        })
        .catch((error) => {
          console.log("error logging out")
        });
    }
    const handleAccountsAndLists=(e,data)=>{
      e.preventDefault();
      if(data==="Your Wish List"){
        navigate("/wishList");
      }
    }

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center lgl:justify-between sm:justify-between gap-4">
        <Link to="/ ">
          <div className="lgl:headerHover">
            <img
              className="w-24 mt-2 lgl:static sm:absolute left-14 top-3"
              src={logo}
              alt="logo"
            ></img>
          </div>
        </Link>
        <div className="headerHover hidden lgl:inline-flex">
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
            onChange={(e) => {
              setSearchItem(e.target.value.toLocaleLowerCase());
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUserSearch();
              }
            }}
            value={searchItem}
          />
          <span
            className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
            onClick={() => {
              handleUserSearch();
            }}
          >
            <SearchIcon />
          </span>
        </div>
        <Link
          to={userInfo ? "/accountAndList" : "/signin"}
          onClick={(event) => {
            if (size.width < 1024) event.preventDefault();
          }}
        >
          <div className="flex flex-col items-start justify-center lgl:headerHover">
            <span
              className="lgl:hidden absolute right-20 top-3"
              onClick={() => {
                if (size.width < 1024)
                  setShowAccountsAndList(!showAccountsAndList);
              }}
            >
              <PersonOutlineIcon />
            </span>
            {userInfo ? (
              <p className="text-sm text-lightText font-light lgl:static absolute right-28 top-4">
                Hello {userInfo.userName}
              </p>
            ) : (
              <p className="text-sm lgl:text-xs text-white lgl:text-lightText font-light lgl:static absolute right-28 top-4">
                Hello, sign in
              </p>
            )}
            <span
              className="text-sm font-semibold -mt-1 text-whiteT
            hidden lgl:inline-flex"
              onMouseEnter={() => {
                if (userInfo) setShowAccountsAndList(true);
              }}
            >
              Accounts & Lists <span></span>
              <ArrowDropDownOutlinedIcon />
            </span>
            {showAccountsAndList ? (
              <div onMouseLeave={() => setShowAccountsAndList(false)}>
                <ul className="absolute lgl:w-[450px] h-84 top-14 lgl:right-48 sm:right-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 lgl:flex gap-1 z-50">
                  {accountsLists.map((item) => (
                    <li
                      className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent cursor-pointer duration-200"
                      key={item._id}
                    >
                      <p className=" font-bold text-lg pb-2">{item.title}</p>
                      <ul className="flex flex-col gap-1 font-bodyFont ">
                        {item.listItems.map((data, i) => (
                          <li
                            key={i}
                            className="text-sm tracking-wide border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                            onClick={(e) => {
                              handleAccountsAndLists(e, data);
                            }}
                          >
                            {data}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-sm text-lightText font-light">Returns</p>
          <p
            className="text-sm font-semibold -mt-1 text-whiteT
            "
          >
            & Orders
          </p>
        </div>
        <Link to="/cart">
          <div className="flex items-start justify-center lgl:headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {userInfo && (
          <div
            onClick={handleLogout}
            className="lgl:flex flex-col justify-center items-center headerHover relative hidden"
          >
            <LogoutIcon />
            <p className="hidden lgl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header