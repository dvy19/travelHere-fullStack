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
    }



}


export default PlaceService;