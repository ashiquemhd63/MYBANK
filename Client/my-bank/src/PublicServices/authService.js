import axios from './apiBase';

export default class AuthService{
    baseUrl = 'http://localhost/auth';

    async login(data){
        console.log(this.baseUrl)
        const res = await axios.post(this.baseUrl + '/login', data);
        return res.data;
    }

    test(){
        return axios.get(this.baseUrl + '/test');
    }
}