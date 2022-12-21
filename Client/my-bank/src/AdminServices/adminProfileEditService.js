import axios from '../PublicServices/axios';
const getProfileData = async ()=>{
    var response = await axios.get('/admin/update');
    return response.data;
}
const profileEdit = async (data)=>{
    const res = await axios.post('/admin/update', data);
    return res.data;
}
export {getProfileData}
export {profileEdit}