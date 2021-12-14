import React, { useContext } from "react";
import Accord from "./Accord";
import Card from "./Card";
import { useState } from "react";
import { CardContext } from "./Context/Cardcontext";
//import { MovieSharp } from '@material-ui/icons';


function Body() {
 //const [movie, setMovies] = useState([]);
  const [sortmovie, setSortMovie] = useState("");
  const [api, setApi] = useState("");
  const [filteredFilm, setfilteredFilm]=useState(null);
  const [sliderbar,setSliderbar]=useState(null)

  return (
    <div>
      <div style={{ fontFamily: "Roboto" }}>
        <div style={{ marginTop: 20 }}>
          
     
          <Accord  sortmovie={sortmovie}
           setSortMovie={setSortMovie}
           filteredFilm={filteredFilm} 
           setfilteredFilm={setfilteredFilm} 
           api={api}
            setApi={setApi}
            sliderbar={sliderbar}
            setSliderbar={setSliderbar}
            />
          <div style={{ marginLeft: 400 }}>
            
              <Card sortmovie={sortmovie} 
              filteredFilm={filteredFilm}
              sliderbar={sliderbar} />
              
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Body;
