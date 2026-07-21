import React, { useEffect, useState } from 'react'
import PlaceService from '../services/PlaceService';
import ReviewCard from './ReviewCard';

const GetAllReviews = () => {

    const[allReviews, setAllReviews]=useState([]);
    const[error,setError]=useState("");
    const[loading,setLoading]=useState(false);

    
       const [currentPage, setCurrentPage] = useState(1);
        const placesPerPage = 3;
     const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
    const currentPlaces = allReviews.slice(indexOfFirstPlace, indexOfLastPlace);

    const currentCities = allReviews.slice(indexOfFirstPlace, indexOfLastPlace);

    const totalPages = Math.ceil(allReviews.length / placesPerPage);


    const get_all_reviews=async()=>{

        setLoading(true)

        try{
            const data=await PlaceService.getAllReviews();
            setAllReviews(data.data)
            console.log(data.data)
        }
        catch(err){
                console.log(err)
                setError(err)

        }
        finally{
            setLoading(false)
        }
    }


    useEffect(() => {
            get_all_reviews();
        }, []);

    



  return (
    <>

     <div className="review-grid
                    grid grid-cols-3 grid-rows-1
                    gap-6
                    items-start
                    px-6
                    py-4  "
            >
                {currentCities.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    />
                ))}
            </div>
    
    </>
  )
}

export default GetAllReviews
