import axios from "../PublicServices/axios"


/**
 * Getting user data from server
 *  
 */
const userProfile = async ()=>{

    var response = await axios.get('/user');
    return response.data.data;

}

/**
 *Sending Loan details to the server 
 * data contains the data collected from the form submission
 */

const saveLoan = async (data) => {

    var response = await axios.post('/user/applyLoan',data);
    console.log(response)
    return response.data;



}



export {userProfile, saveLoan}