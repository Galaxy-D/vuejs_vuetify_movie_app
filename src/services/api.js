import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGE5MDQ2YmEwYTBiNjdlYzdlNjE5ZmQ4ZDU2Y2MyOCIsInN1YiI6IjVmN2NkZThkODc0MWM0MDAzYTc1ZGE1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ko-8V7fBZDNOG2oI5Y675NEDsgtHV4xKEtSJCixtkuo';
export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${token}`
    }
})