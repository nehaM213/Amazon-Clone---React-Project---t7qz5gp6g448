import React from 'react'
const list = [
  {
    img: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png",
    heading: "Your Orders",
    paragraph: "Track, return, or buy things again",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png",
    heading: "Login & security",
    paragraph: "Edit login, name, and mobile number",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png",
    heading: "Prime",
    paragraph: "View benefits and payment settings",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png",
    heading: "Your Addresses",
    paragraph: "Edit addresses for orders and gifts",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png",
    heading: "Payment options",
    paragraph: "Edit or add payment methods",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png",
    heading: "Amazon Pay Balance",
    paragraph: "Add your money to your balance",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png",
    heading: "Contact Use",
    paragraph: "",
  },
];
function AccountAndList() {
  return (
    <div className=" mt-5 mx-28 border pb-20">
      <h1 className="text-[30px] mb-3">Your Account</h1>
      <div className="grid grid-cols-3 gap-5">
        {list.map((el) => {
          return (
            <div className="border border-gray-300 p-5 rounded-lg flex hover:bg-gray-200 cursor-pointer">
              <img src={el.img} className="object-fit w-[68px] h-[55px] mr-3" />
              {/* object-fit: cover; width: 100%; height: 250px; */}
              <div>
                <h2 className="font-medium text-[17px] pb-1">{el.heading}</h2>
                <p className="text-gray-600 text-sm">{el.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccountAndList