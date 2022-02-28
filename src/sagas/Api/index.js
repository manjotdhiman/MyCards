import axios from "axios"
export const fetchCardsApi =()=>(
    axios({
        method: 'get',
        url: 'https://bmsrampura.com/test.json',
        responseType: 'json'
      })

)