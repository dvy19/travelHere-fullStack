import React, { useEffect, useState } from 'react';

import CityService from '../services/CityService'

import { useParams } from 'react-router-dom';

const CityDetails = () => {


    const {id}=useParams()
  // Fallback state if city data is not yet loaded


  const[city,setCity]=useState({});
  const[loading,setLoading]=useState(false)
  const[err,setErr]=useState("");


  const get_city_details=async()=>{

    setLoading(true)

    try{

        const data=await CityService.getSingleCity(id)
        console.log(data.data)

        setCity(data.data)
    }
    catch(err){
        setErr(err)
        console.log(err.response)
    }
    finally{
        setLoading(false)
    }
  }

 
    useEffect(() => {
            get_city_details();
        }, [id]);

  
 

 

  return (
    <div className="max-w-4xl mx-auto m-6 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden space-y-6">
      {/* Header Image / Hero Section */}
      {city.image ? (
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-100">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{city.name}</h1>
            <p className="text-sm font-medium text-gray-200">{city.state}</p>
          </div>
        </div>
      ) : (
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{city.name}</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">{city.state}</p>
        </div>
      )}

      {/* Main Details Body */}
      <div className="p-6 pt-0 space-y-6">
        {/* Coordinates Tag */}
        {(city.latitude !== undefined && city.longitude !== undefined) && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 text-xs font-semibold text-gray-700">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Lat: {city.latitude} • Long: {city.longitude}</span>
          </div>
        )}

        {/* Description Section */}
        {city.description && (
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">About {city.name}</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {city.description}
            </p>
          </div>
        )}

        {/* Famous For Section */}
        {city.famous_for && (
          <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 space-y-1">
            <h3 className="text-sm font-bold text-purple-900 uppercase tracking-wider">
              Famous For
            </h3>
            <p className="text-sm text-purple-800">
              {city.famous_for}
            </p>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default CityDetails;