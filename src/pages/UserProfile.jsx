import React, { useState } from 'react'
import PlaceService from '../services/PlaceService'
const UserProfile = () => {

    const[savedPlaces, setSavedPlaces]=useState([]);
    const[loading,setLoading]=useState("")
    const[error,setError]=useState(false)

    const get_all_saved_places=async()=>{


        try{

            setLoading(true)

            const data= await PlaceService.getSavePlace()
            setSavedPlaces(data.data)
            console.log(data.data)
        }
        catch(err){
            setError(err)
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }


    useEffect(() => {
                get_all_saved_places();
            }, []);


            
  return (
    <div>

     <div className="saved-places-container">
        {loading && <p>Loading...</p>}

        {error && <p>Something went wrong!</p>}

        {!loading && savedPlaces.length === 0 && (
            <p>No saved places found.</p>
        )}

        {savedPlaces.map((place) => (
            <PlaceCard
                key={place.id}
                place={place}
            />
        ))}
    </div>

      
    </div>
  )
}

export default UserProfile
