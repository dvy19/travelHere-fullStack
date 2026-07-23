import React, { useState , useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
import CityCard from '../components/CityCard'
import PlaceCard from '../components/PlaceCard'

import CityService from '../services/CityService';
import PlaceService from '../services/PlaceService';
import FeelingRecommCard from '../components/FeelingRecommCard';

const Home = () => {

  const[cities,setCities]=useState([]);
  const[loading,setLoading]=useState(false);
  const[error, setError]=useState("")


  const[places,setPlaces] = useState([]);
  
  const get_places=async()=>{

    setLoading(true)

    try{

        const data=await PlaceService.getPlaces()
        console.log(data.data)

        setPlaces(data.data)
    }
    catch(err){
        setError(err)
    }
    finally{
        setLoading(false)
    }
  }

   const [currentPage, setCurrentPage] = useState(1);
    const placesPerPage = 9;
  const navigate=useNavigate()

  const get_cities=async()=>{

    setLoading(true)

    try{

      const data=await CityService.getCities();
      console.log(data.data)
      setCities(data.data)
    } 

    catch(err){
      setError(err);
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }


   useEffect(() => {
        get_cities();
    }, []);

    useEffect(() => {
        get_places();
    }, []);

   


    const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
    const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

    const currentCities = cities.slice(indexOfFirstPlace, indexOfLastPlace);


    const totalPages = Math.ceil(places.length / placesPerPage);

    if (loading) {
        return <h2>Loading cities...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    const onLogout=()=>{
        localStorage.clear()
        navigate("/")
    }

    const toProfile=()=>{
        navigate('/userProfile')
    }


  return (
    <div>

      <div className="cities-container">
<div className="cities-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 m-4 mb-6">
                <h1 className="text-3xl font-bold tracking-wide font-sans text-indigo-800">TravelHere</h1>
                <button 
                className="search-btn bg-blue-500 hover:bg-blue-700 hover:border  text-white hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300 
                hover:shadow-lg
                ease-in-out cursor-pointer "
                onClick={() => navigate("/search")}> Search </button>

                <button 
                className="logout-btn bg-white-500 hover:bg-blue-700 hover:border  text-red-500 hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300 
                hover:shadow-lg
                ease-in-out cursor-pointer "
                onClick={toProfile}> Profile </button>

                <button 
                className="logout-btn bg-white-500 hover:bg-blue-700 hover:border  text-red-500 hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300 
                hover:shadow-lg
                ease-in-out cursor-pointer "
                onClick={onLogout}> LogOut </button>
            </div>
      </div>


      <div className="search-container flex flex-row justify-center mb-6 py-4 px-6 bg-gray-100 rounded-lg shadow-md align-items-center gap-4">
                <input
                    className="search-input border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <button
                    onClick={console.log("clicked")}
                    className="search-btn bg-blue-500 hover:bg-blue-700 hover:border  text-white hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300 h-auto"
                >
                    Filter
                </button>
            </div>

            <FeelingRecommCard></FeelingRecommCard>

            <div className="home-grid
                    grid grid-cols-3 grid-rows-1
                    gap-6
                    items-start
                    px-6
                    py-4  "
            >
                {currentCities.map((city) => (
                    <CityCard
                        key={city.id}
                        city={city}
                    />
                ))}
            </div>


    <div className="places-container flex flex-col m-4 bg-gray-200 w-full h-auto">


                    <div className="
                    grid grid-cols-1 grid-rows-2
                    gap-6
                    items-start
                    px-6
                    py-4  "
            >
                {currentPlaces.map((place) => (
                    <PlaceCard
                        key={place.id}
                        place={place}
                    />
                ))}
            </div>
                


        <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3.5 py-2 rounded-xl text-sm font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed transition-colors duration-200"
            >
                Previous
        </button>

   
        {Array.from({ length: totalPages }, (_, index) => {
            const pageNum = index + 1;
            const isActive = currentPage === pageNum;
            
            return (
                <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 flex items-center justify-center text-sm font-semibold rounded-xl transition-all duration-200 ${
                        isActive
                            ? "bg-indigo-600 text-white shadow-sm shadow-indigo-100"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200"
                    }`}
                >
                    {pageNum}
                </button>
            );
        })}


        <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3.5 py-2 rounded-xl text-sm font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed transition-colors duration-200"
        >
            Next
        </button>

    </div>
    </div>
   
     )
}

export default Home
