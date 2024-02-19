import { Color } from "@/types";
import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
// const URL = `http://localhost:3000/api/25568edc-9181-489a-a99a-fe5ad3ff7ce4/colors`;

const fetchColors = async () =>{

    try {
        const res = await axios.get(URL)
        console.log(res.data, 'RESPONSE');
        return res.data;
    } catch (error) {
        
        console.log(error, 'RESPONSE_____FETCH');
    }
    
}

export default fetchColors;