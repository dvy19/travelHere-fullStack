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
    }


    useEffect(() => {
                get_all_saved_places();
            }, []);


            
  return (
    <div>
      
    </div>
  )
}

export default UserProfile
