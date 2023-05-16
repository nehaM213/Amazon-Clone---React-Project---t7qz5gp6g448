import React from 'react';

import {
  bannerImgFive,
} from "../../assets/index";
function Banner() {
  // const [dotActive, setDotActive] = useState(0);
      // var settings = {
      //   dots: false,
      //   infinite: true,
      //   autoplay: true,
      //   speed: 200,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   arrows: false,
      //   beforeChange: (prev, next) => {
      //     setDotActive(next);
      //   },
      //   appendDots: (dots) => (
      //     <div
      //       style={{
      //         position: "absolute",
      //         top: "70%",
      //         left: "45%",
      //         transform: "translate(-50% -50%)",
      //         width: "210px",
      //       }}
      //     >
      //       <ul
      //         style={{
      //           width: "100%",
      //           display: "flex",
      //           alignItems: "center",
      //           justifyContent: "space-between",
      //         }}
      //       >
      //         {" "}
      //         {dots}{" "}
      //       </ul>
      //     </div>
      //   ),
      //   customPaging: (i) => (
      //     <div
      //       style={
      //         i === dotActive
      //           ? {
      //               width: "30px",
      //               height: "30px",
      //               borderRadius: "50%",
      //               display: "flex",
      //               alignItems: "center",
      //               justifyContent: "center",
      //               color: "white",
      //               background: "#131921",
      //               padding: "8px 0",
      //               cursor: "pointer",
      //               border: "1px solid #f3a847",
      //             }
      //           : {
      //               width: "30px",
      //               height: "30px",
      //               borderRadius: "50%",
      //               display: "flex",
      //               alignItems: "center",
      //               justifyContent: "center",
      //               background: "#232F3E",
      //               color: "white",
      //               padding: "8px 0",
      //               cursor: "pointer",
      //               border: "1px solid white",
      //             }
      //       }
      //     >
      //       {i + 1}
      //     </div>
      //   ),
      // };
  return (
    <div className="w-full">
      <div className="w-full h-full relative ">
        <div className='relative'>
          <img
            src={bannerImgFive}
            className=""
            alt="bannerImgOne"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner