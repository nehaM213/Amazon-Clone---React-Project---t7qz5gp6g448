import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/amazonSlice";

function Cart() {
    const dispatch=useDispatch();
  const products = useSelector((state) => state.amazonReducer.products);
  const [totalPrice,setTotalPrice]=useState("");
  useEffect(()=>{
    let Total=0;
    products.map((item)=>{
        Total+=item.price * item.quantity;
        return setTotalPrice(Total.toFixed(2));
    })
  });

  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="mx-auto h-auto grid grid-cols-4 gap-4">
        <div className="w-full h-full bg-white px-4 col-span-3">
          <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
            <h2 className="text-3xl font-medium">Shopping Cart</h2>
            <h4 className="text-xl font-normal">Subtitle</h4>
          </div>
          {/* products start here */}
          <div>
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
              >
                <div className="w-full flex item-center justify-between gap-6">
                  <div className="w-2/5">
                    <img
                      className="w-full h-44 object-contain"
                      src={item.image}
                      alt="products"
                    />
                  </div>
                  <div className="w-4/5">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-sm">
                      {item.description.substring(0, 200)}
                    </p>
                    <p className="text-base mt-2">
                      Unit Price:{" "}
                      <span className="font-semibold">&#8377;{item.price}</span>
                    </p>
                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md ">
                      <p className="cursor-pointer bg-gray-200 px-1 rounded-md duration-300">
                        Qty:
                      </p>
                      <p
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  <div className="w-1/5">
                    <p className="text-lg font-titleFont font-semibold">
                      &#8377;{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={() => dispatch(resetCart())}
              className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="w-full h-52 bg-white col-span-1 flex flex-col  justify-center items-center p-4">
          <div>
            <p className="flex gap-2 items-start text-xs">
              <span>
                <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
              </span>{" "}
              Your order qualifies for FREE Shipping choose this option at
              checkout, See details....
            </p>
          </div>
          <div>
            <p className="font-semibold px-10 py-1 flex items-center justify-between gap-2">
              Total:{" "}
              <span className="text-lg font-bold">
                &#8377; {totalPrice ? totalPrice : 0}
              </span>
            </p>
          </div>
          <button className="yellowButton">Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
