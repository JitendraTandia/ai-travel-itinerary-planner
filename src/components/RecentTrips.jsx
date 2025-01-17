import React from 'react'
import Card1 from "../assets/heroCard1.png";
import Card2 from "../assets/heroCard2.png";
import Card3 from "../assets/heroCard3.png";

function RecentTrips() {
  return (
    <div className='px-24 mt-10 '>
        <h1 className='text-2xl px-14 font-semibold'>Recent Trips</h1>
        <div className='py-4 grid grid-cols-3 justify-self-center gap-20'>
            <img className='rounded-2xl' src={Card1} alt="Card1"  />
            <img className='rounded-2xl' src={Card2} alt="Card2"  />
            <img className='rounded-2xl' src={Card3} alt="Card3"  />
        </div>
    </div>
  )
}

export default RecentTrips