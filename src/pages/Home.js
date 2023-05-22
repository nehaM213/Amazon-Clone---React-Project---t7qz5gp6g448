import React, { useEffect, useState } from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'
import { useSelector } from "react-redux";
function Home() {
  const [result,setResult]=useState(false);
  const resultNotFound = useSelector((state) => state.amazon.resultNotFound);
  useEffect(()=>{
    setResult(resultNotFound);
    console.log(resultNotFound);
  },[resultNotFound]);
  return (
    <>
      {result ? (
        <div className="w-full p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
          <h1 className="font-titleFont text-xl font-bold">
            No results found.
          </h1>
          <p>Try checking your spelling or use more general terms</p>
        </div>
      ) : (
        <div>
          <Banner />
          <div className="w-full -mt-14 lgl:-mt-36 py-18">
            <Products />
          </div>
        </div>
      )}
    </>
  );
}

export default Home