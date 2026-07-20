
import { useEffect,  useState } from "react";
import PlaceService from "../services/PlaceService";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function PlaceDetails(){

    const navigate=useNavigate();

    const {id}=useParams()


    const[placeDetail, setPlaceDetail]=useState("");
    const[loading,setLoading]=useState(false);
    const[error, setError]=useState("");

    const get_place_details=async()=>{

        try{

            setLoading(true)
            const data=await PlaceService.get_place_details(id)
            console.log(data.data)
            setPlaceDetail(data.data)

        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }


    useEffect(() => {
            get_place_details();
        }, [id]);


        return(
             <div className="max-w-6xl mx-auto p-4 md:p-6">
   
    <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
    >
        <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span> 
        Back to listings
    </button>

    
    <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
        
       
        <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-slate-100 min-h-[300px]">
            
           
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <span className="text-amber-500 font-bold">★</span>
                <span className="text-sm font-semibold text-slate-800">{placeDetail.id}</span>
            </div>
        </div>

        
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
               
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    <span>{placeDetail.id}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-indigo-600">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        {placeDetail.location}
                    </span>
                </div>

               
                <h1 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight mb-4">
                    {placeDetail.name}
                </h1>

                <hr className="border-slate-100 mb-4" />

               
                <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-slate-800">About this place</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {placeDetail.description}
                    </p>
                </div>
            </div>

           
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                    <span className="text-xs text-slate-400 block">Status</span>
                    <span className="text-sm font-medium text-emerald-600 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Available
                    </span>
                </div>
                <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-colors duration-200 shadow-sm">
                    Book Now
                </button>
            </div>

        </div>
    </div>
</div>
        )

    
}


export default PlaceDetails;