import React from 'react';
import { useLocation } from "react-router-dom";

function ProductView(props) {
    const location = useLocation();
    const productData = location.state;
    console.log("this",productData.id,"end");
  return (
    <div className="lgl:flex lgl:m-10 bg-white lgl:h-[400px] p-4">
      <div>
        <img
          src={productData.image}
          className="lgl:max-w-[314px] max-h-[409px] p-4"
          alt="product"
        />
      </div>
      <div className="p-4 overflow-y-scroll">
        <h1 className="text-2xl py-4 border-b-[1px]">{productData.title}</h1>
        <p className="text-2xl py-4">₹{productData.price}</p>
        <p className=" text-[14px] py-2">
          Inclusive of all taxes
        </p>
        {/* <button className=" p-1 my-2 hover:bg-slate-300  rounded-lg">
          Add to Wish List
        </button> */}
        <div className="border-y-[1px] my-5 p-2 hidden md:block">
          <h2 className="p-2 font-bold">Offers</h2>
          <div className="flex">
            <div className="border-[1px] p-2 m-2">
              <h3 className=" font-semibold">No Cost EMI</h3>
              <p className=" text-sm">
                Avail No Cost EMI on select cards for orders above ₹3000
              </p>
              <p className=" text-[#007185] text-sm">1 offer</p>
            </div>
            <div className="border-[1px] p-2 m-2">
              <h3 className=" font-semibold">Bank Offer</h3>
              <p className=" text-sm">
                Upto ₹9.95 discount on HSBC Cashback Credit Cards
              </p>
              <p className=" text-[#007185] text-sm">1 offer</p>
            </div>
            <div className="border-[1px] p-2 m-2">
              <h3 className=" font-semibold">Partner Offer</h3>
              <p className=" text-sm">
                Get GST invoice and save up to 28% on business purchases.
              </p>
              <p className=" text-[#007185] text-sm">1 offer</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className=" font-semibold text-lg py-2">Product Details</h3>
          <p>{productData.description}</p>
        </div>
      </div>
      <div className="lgl:w-[600px] p-4">
        <button className=" yellowButton">Add to Cart</button>
        <button className="yellowButton bg-yellow-500 hover:bg-amber-500">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductView