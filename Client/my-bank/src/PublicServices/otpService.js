import axios from './apiBase';

export default class OtpService{
    baseUrl = 'http://localhost/auth';

    async otp(data,data2){
        console.log(this.baseUrl)
        const res = await axios.post(this.baseUrl + '/otp/' + data,data2);
        return res.data;
    }

    test(){
        return axios.get(this.baseUrl + '/test');
    }
}