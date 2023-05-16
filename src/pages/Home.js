import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'

function Home() {
  return (
    <div>
      <Banner/>
      <div className='w-full -mt-14 lgl:-mt-36 py-18'>
        <Products />
      </div>
    </div>
  );
}

export default Home