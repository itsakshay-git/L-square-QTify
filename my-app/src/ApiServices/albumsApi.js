import axios from 'axios';


const URL = "https://qtify-backend-labs.crio.do"

async function getTopAlbum(){
    try{
       let response = await axios.get(`${URL}/albums/top`);
       return response.data
    }catch(e){
        console.log(e)
    }
}

export default getTopAlbum