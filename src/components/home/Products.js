import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";
import { setResultNotFound } from "../../redux/amazonSlice";

function Products() {
  const dispatch=useDispatch();
  const data = useLoaderData();
  const [productData,setProductData] = useState(data.data);
  const search = useSelector((state) => state.amazon.userSearch);
  // const [notFound,setNotFound]=useState(false);
  useEffect(() => {
    let ddata = productData.filter((item) =>{
      return (
        item.title.toLowerCase().includes(search.searchItem) ||
        item.category.toLowerCase().includes(search.searchItem) ||
        item.description.toLowerCase().includes(search.searchItem)
      );
    }
    );
    console.log(ddata);
    if (ddata.length && search.searchItem !== "") {
      setProductData(ddata);
      dispatch(setResultNotFound(false));
    } 
    else {
      if (search.searchItem !== "" && search.searchItem!==undefined && ddata.length===0){
        // console.log("no found true", search.searchItem);
        // setNotFound(true);
        dispatch(setResultNotFound(true));
      }
      else{
        // console.log("all");
        setProductData(data.data);
        dispatch(setResultNotFound(false));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search]);
  return (

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-6 lgl:gap-10 px-4 w-full -mt-14 lgl:-mt-36 py-18">
          {productData.map((item) => (
            <div
              key={item.id}
              className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative"
            >
              <div className="w-full h-auto flex items-center justify-center">
                <img
                  className="w-52 h-64 object-contain"
                  src={item.image}
                  alt="ProductImg"
                />
              </div>
              <div className="px-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                    {item.title.substring(0, 20)}
                  </h2>
                  <p className="text-sm text-gray-600 font-semibold">
                    &#8377;{item.price}
                  </p>
                </div>

                <div>
                  <p className="text-sm">
                    {item.description.substring(0, 100)}...
                  </p>
                  <div className="text-yellow-500">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        price: item.price,
                        category: item.category,
                        image: item.image,
                        quantity: 1,
                      })
                    );
                  }}
                  className="yellowButton"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

  );
}

export default Products;
