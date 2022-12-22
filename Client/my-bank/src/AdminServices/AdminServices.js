import axios from "../PublicServices/axios"

//get admin profile
const userProfile = async () => {
    var response = await axios.get('/admin/adminProfile');
    return response.data;
}

//get all loan requests
const loanApprovalList = async () => {
    var response = await axios.get('/admin/loanApprovalList');
    console.log('responses fro loan aproval list')
    console.log(response.data)
    return response.data;
}

//approve loan
const loanApprove = (loanId, e) => {
    e.preventDefault()
    axios.post('/admin/loanApprove/' + loanId)
    

}
//reject loan
const loanReject = (loanId, e) => {
    e.preventDefault()
    axios.post('/admin/loanReject/' + loanId)
}

//get all account approve requests
const accountApproveList = async () => {
    var response = await axios.get('/admin/accountApproveList');
    return response.data;

}

//approve account
const accountApprove = (id, e) => {
    e.preventDefault()
    axios.post('/admin/accountApproval/' + id)
}

//view all account details
const allAccountDetails = async  ()=>{
    var response = await axios.get('/admin/allAccountDetails');
    return response.data;
}

//view all loan details
const allLoanDetails = async () => {
    var response = await axios.get('/admin/allLoanDetails');
    return response.data;
}

export { userProfile, loanApprovalList, loanApprove, accountApproveList, accountApprove, allAccountDetails, allLoanDetails, loanReject };