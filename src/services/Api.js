import constant from "@/services/constant";
import axios from "axios";

class Api {
    async getComments(){
        const res = axios({
            url: constant.comments,
            method: 'get'
        })
        return res;
    }
    async  getPhotos(id){
        const res = axios({
            url: id ? constant.photos + '/' + id : constant.photos,
            method: 'get'
        })
        return res;
    }
} 
export default Api