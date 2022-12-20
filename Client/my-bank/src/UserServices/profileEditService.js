// import axios from './apiBase';

// export default class ProfileEditService{
//     baseUrl = 'http://localhost/user';

//     async profileEdit(data){
        
//         console.log(this.baseUrl+"/update")
//         const res = await axios.post(this.baseUrl + '/update', data);
//         return res.data;
//     }
    

//     test(){
//         return axios.get(this.baseUrl + '/test');
//     }
// }
import axios from '../PublicServices/axios';

    const profileEdit = async (data)=>{
        const res = await axios.post('/user/update', data);
        return res.data;
    }
    const getProfileData = async ()=>{
        var response = await axios.get('/user/update');
        return response.data;
    }
 export {getProfileData}
export {profileEdit}
    

   

