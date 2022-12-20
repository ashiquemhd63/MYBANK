
import axios from '../PublicServices/axios';


// User profile Edit
    const profileEdit = async (data)=>{
        const res = await axios.post('/user/update', data);
        return res.data;
    }
// Getting back the user profile data
    const getProfileData = async ()=>{
        var response = await axios.get('/user/update');
        return response.data;
    }
    
export {getProfileData}
export {profileEdit}
    

   

