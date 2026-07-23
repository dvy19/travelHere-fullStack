import React from 'react'
import {useNavigate} from 'react-router-dom'

const FeelingRecommCard = () => {

    const navigate=useNavigate();

    const onExplore=()=>{
        navigate("/feelingsPlaces")
    }
  return (
    <div className='w-full bg-gray-200 h-40 flex justify-center items-center'>


        <button onClick={onExplore}>Explore</button>


      
    </div>
  )
}

export default FeelingRecommCard
