import axios from "../PublicServices/axios"

//Getting account information account number and balance
const getAccountData = async ()=>{
    var response = await axios.get('/money/withdraw');
    return response.data;
}

//Sending amount to withdraw
const postWithdrawAccountData = async (data)=>{
    var response = await axios.post('/money/withdraw',data);
    return response.data;
}


const postDepositAccountData = async (data)=>{
    var response = await axios.post('/money/deposit',data);
    return response.data;
}

export {getAccountData}
export {postDepositAccountData}
export {postWithdrawAccountData}