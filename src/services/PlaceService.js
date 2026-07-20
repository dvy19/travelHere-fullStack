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


    getSinglePlace:async()=>{

        const token=localStorage.get("accessToken");

        const response=await api.get(ENDPOINTS.SINGLEPLACE , {

            headers:{
                Authorization:`Bearer ${token}`
            },
        })


        return response.data
    },

    addReview:async=(req)=>{

        const token=localStorage.get('accessToken')

        const res=await api.post(ENDPOINTS.ADDREVIEW,req , {
            header:{
                Authorization:`Bearer ${token}`
            }
        }),

        return res

    }



}


export default PlaceService;