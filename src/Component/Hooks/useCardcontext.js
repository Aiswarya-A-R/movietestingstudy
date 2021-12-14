import {useState} from "react";
import { API_KEY, baseUrl } from "../../Constants";
import axios from "axios";
import { useEffect } from "react";


function useCardcontext(){
    const [movies,setMovies]=useState([])
    const[api,setApi]=useState("")
  useEffect(() => {
   
    axios
      .get(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=${api}`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((errr) => {
        //alert("Network Error")
      });
  }, [api]);

    return{
        movies,
        setMovies,
        api,setApi,
    }
}
export default useCardcontext;