// import { addRequestHeaders } from 'firebase-tools/lib/api';
import React, { useState, useEffect} from 'react'
import axios from './axios';

export default function Row({title, fetchUrl}) {



    const  {movies, setMovies} = useState([]);


    useEffect(() =>{
async function fetchData(){

const request= await axios.get(fetchUrl);
console.log(request);
return request;
}
fetchData();

}, []);
    return (
        <div>
        <h2>{title}</h2>

        {/*container -> posters*/}
            
        </div>
    )
}
