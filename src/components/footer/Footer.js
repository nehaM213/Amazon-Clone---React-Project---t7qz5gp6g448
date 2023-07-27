import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import { useSelector } from 'react-redux';

function Footer() {
  const userInfo = useSelector((state) => state.amazon.userInfo);
  console.log(userInfo);
  return (
    <div className="font-titleFont">
      {userInfo?(""):(<FooterTop />)}

      <FooterMiddle />
    </div>
  );
}

export default Footer