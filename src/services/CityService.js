import { ENDPOINTS } from "../api/endpoints"
import api from "../api/axios";

const CityService={

    getCities:async()=>{

        const token = localStorage.getItem("accessToken");

        const response=await api.get(ENDPOINTS.GETCITY,{
            headers: {
            Authorization: `Bearer ${token}`,
                    },
        });

        return response.data
    },

    getSingleCity:async(id)=>{

        const res=await api.get(`${ENDPOINTS.SINGLECITY(id)}`)
        return res.data

    }


}

export default CityService;