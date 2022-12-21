import axios from './apiBase';

export default class RegService{
    baseUrl = 'http://localhost/auth';

    async register(data){
        const res = await axios.post(this.baseUrl + '/register', data);
        return res.data;
    }

    test(){
        return axios.get(this.baseUrl + '/test');
    }
}