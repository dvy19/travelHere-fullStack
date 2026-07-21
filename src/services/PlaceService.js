import { ENDPOINTS } from "../api/endpoints"
import api from "../api/axios";

const PlaceService={

    getPlaces:async()=>{

        const token = localStorage.getItem("accessToken");

        const response=await api.get(ENDPOINTS.GETPLACES,{
            headers: {
            Authorization: `Bearer ${token}`,
                    },
        });

        return response.data
    },


    getSinglePlace: async (id) => {
    const token = localStorage.getItem("accessToken");

    const response = await api.get(
        `${ENDPOINTS.SINGLEPLACE(id)}`
    );

    return response.data;
},

    addReview:async(req)=>{

        const token=localStorage.getItem("accessToken");

        const res=await api.post(ENDPOINTS.ALLREVIEW,req , {
            headers:{
                Authorization:`Bearer ${token}`
            }
        });

        return res
    },

    getAllReviews:async()=>{

        const data=await api.get(ENDPOINTS.ALLREVIEW);
        return data.data
    },

    savePlace:async(req)=>{
        const res=await api.post(ENDPOINTS.SAVEDPLACES,req)
        return data.data
    },

    getSavePlace:async()=>{
        const res=await api.get(ENDPOINTS.SAVEDPLACES)
        return data.data

    }



}


export default PlaceService;