// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { deleteFromWishList } from "../redux/amazonSlice";
import { emptyCart } from "../assets/index";
import { Link } from "react-router-dom";
// import axios from "axios";

function WishList() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const wishList = useSelector((state) => state.amazon.wishList);
  // const userInfo = useSelector((state) => state.amazon.userInfo);
  // useEffect(() => {
  //   let Total = 0;
  //   wishList.map((item) => {
  //     Total += item.price * item.quantity;
  //     return setTotalPrice(Total.toFixed(2));
  //   });
  // });
  // const handleCheckout = () => {
  //   if (userInfo) {
  //     setPayNow(true);
  //   } else {
  //     setTimeout(() => {
  //       navigate("/signin");
  //     }, 2000);
  //   }
  // };
  // const payment = async (token) => {
  //   await axios.post("http://localhost:8000/pay", {
  //     amount: totalPrice * 100,
  //     token: token,
  //   });
  // };

  return (
    <div className="w-full bg-gray-100 p-4">
      {wishList.length > 0 ? (
        <div className="mx-auto h-auto">
          <div className="w-full h-full bg-white px-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-3xl font-medium">WishList</h2>
              <h4 className="text-xl font-normal hidden lgl:block">Price</h4>
            </div>
            {/* wishList start here */}
            <div>
              {wishList.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
                >
                  <div className="w-full flex item-center justify-between gap-6">
                    <div className="w-2/5">
                      <img
                        className="w-full h-44 object-contain"
                        src={item.image}
                        alt="wishList"
                      />
                    </div>
                    <div className="w-4/5">
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-sm">
                        {item.description.substring(0, 200)}
                      </p>
                      <p className="text-base mt-2">
                        Unit Price:{" "}
                        <span className="font-semibold">
                          &#8377;{item.price}
                        </span>
                      </p>
                      <button
                        onClick={() => dispatch(deleteFromWishList(item.id))}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Remove Item
                      </button>
                    </div>
                    <div className="w-1/5 hidden lgl:block">
                      <p className="text-lg font-titleFont font-semibold">
                        &#8377;{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4 py-10">
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCartImg"
            ></img>
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your WishList is Empty.
            </h1>
            {/* <p className="text-sm text-center">
              {" "}
              Your Shopping cart lives to serve. Give it a purpose - fill it
              with books, electronics, videos, etc. and make it happy.
            </p> */}
            <Link to="/" className="w-full">
              <button className="yellowButton ">Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default WishList;
