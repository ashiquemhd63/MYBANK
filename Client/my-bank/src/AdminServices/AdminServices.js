import axios from "../PublicServices/axios"

//get admin profile
const userProfile = async () => {
    var response = await axios.get('/admin/adminProfile');
    return response.data;
}

//get all loan requests
const loanApprovalList = async () => {
    var response = await axios.get('/admin/loanApprovalList');
    return response.data;
}

//approve loan
const loanApprove = (loanId, e) => {
    e.preventDefault()
    axios.post('/admin/loanApprove/' + loanId)
    

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


export { userProfile, loanApprovalList, loanApprove, accountApproveList, accountApprove };