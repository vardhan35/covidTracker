import axios from 'axios'

const url ='https://api.rootnet.in/covid19-in/stats/latest'

export const fetchData = async () =>{
    try {
        const {data :{data}} = await axios.get(url);
        // console.log('regional=',data.regional, 'summary=',data.summary)
        const modiFiedData = {
            regional : data.regional,
            summary : data.summary
        }
        // console.log(modiFiedData)
        return modiFiedData
    } catch (error) {
        
    }
}