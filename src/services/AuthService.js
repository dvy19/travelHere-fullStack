import { ENDPOINTS } from "../api/endpoints"
import api from "../api/axios";

const AuthService={

    register:async(req)=>{
        const response=await api.post(ENDPOINTS.REGISTER,req)
        return response
    },

    login:async(req)=>{

        const response=await api.post(ENDPOINTS.LOGIN,req)
        return response
    }
}

export default AuthService;