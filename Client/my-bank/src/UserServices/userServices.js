import axios from "../PublicServices/axios"



const userProfile = async ()=>{

    var response = await axios.get('/user');
    // console.log('i am from response')
    // console.log(response.data.data)
    
    return response.data.data;

}



const saveLoan = async (data) => {

    




    var response = await axios.post('/user/applyLoan',data);

    console.log(response)

    return response.data;



}



export {userProfile, saveLoan}