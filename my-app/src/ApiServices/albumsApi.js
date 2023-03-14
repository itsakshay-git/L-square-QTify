import axios from 'axios';


const AlbumsURL = "https://qtify-backend-labs.crio.do";

 export async function getTopAlbum(){
    try{
       let response = await axios.get(`${AlbumsURL}/albums/top`);
       return response.data
    }catch(e){
        console.log(e)
    }
}

export async function getNewAlbum(){
    try{
       let response = await axios.get(`${AlbumsURL}/albums/new`);
       return response.data
    }catch(e){
        console.log(e)
    }
}
