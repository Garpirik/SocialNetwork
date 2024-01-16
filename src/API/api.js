import axios from "axios";
import { login } from "../redux/authReducer";
import { follow } from "../redux/usersPageReducer";


const instance = axios.create({
    
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        headers:{
            "API-KEY": "256f37f2-d953-4fef-b295-1ae9d708951e"
        },
});
export const usersAPI = {
    getUsers(currentPage =1 ,pageSize =10){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response =>{
            return response.data;
        });
    },
    follow(userid){
        return instance.post(`/follow/${userid}`)
    },
    
    unFollow(userid){
        return instance.delete(`/follow/${userid}`)
    },
    getProfile(id){
        console.warn("Please use profile profile Object")
   return profileAPI.getProfile(id)

    }
}

export const profileAPI = {
   getProfile(id){
   return instance.get(`/profile/` + id);
        
    },
    getStatus(id){
        return instance.get('profile/status/' + id)
    },
    updateStatus(status){
        return instance.put('profile/status' , {status: status} )
    }
}



export const authAPI = {
    me () {
        return instance.get(`/auth/me`)
       
    },
    login(email,password,rememberMe = false){
        return instance.post(`/auth/login`, {email,password,rememberMe});
    },
    logout(){
        return instance.delete(`/auth/login`);
    }
}
export const getUsers2 = (currentPage = 1 , pageSize = 10) =>{
return instance.get(instance.baseURL + `/users?page=${currentPage}&count=${pageSize}`,

).then(response =>  
    {
        return response.data;
    });
}

