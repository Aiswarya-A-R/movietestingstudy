import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Dotdiv, Progresscircle, Progressarc, Progressvalue } from "./Style";
import CircularProgress from "@mui/material/CircularProgress";
import { imageUrl } from "../Constants";

import { CardContext } from "./Context/Cardcontext";
import { useContext } from "react";

export default function ActionAreaCard({sortmovie,filteredFilm,sliderbar}){
  


  const {movies} =useContext(CardContext)  

  
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

 






  let selectValue=[];
  
  if(filteredFilm==null){
    selectValue=movies;
  }
  else if(filteredFilm.length==0){
    selectValue=movies;
  }
  else{
    selectValue= filteredFilm;
  }



//sliderbar

let slidevalue=sliderbar

if(sliderbar && selectValue){
 
  if(sliderbar>=100){
    selectValue =  selectValue.filter((data =>{
      if(data.vote_count >= 1000) {
        return data;
      }
    }));
    console.log("slidevalue",slidevalue,"data",selectValue)
  }
  else if(sliderbar>=75){
    
    selectValue =  selectValue.filter((data =>{
      if(data.vote_count >= 750) {
        console.log(data.vote_count)
        return data;
        
      }
    }));
  }
  else if(sliderbar>=50){
    selectValue =  selectValue.filter((data =>{
      if(data.vote_count >= 500) {
        return data;
      }
    }));
  }
  else{
    selectValue =  selectValue.filter((data =>{
      if(data.vote_count >= 250) {
        return data;
      }
    }));
  }
}


  
console.log("filter:",selectValue,filteredFilm)
  if (sortmovie === "0") {
    shuffle(selectValue);
  } else if (sortmovie === "Rating Descending") {
    //Descending
    selectValue.sort(function (a, b) {
      return b.vote_average - a.vote_average;
      
    });
  } else if (sortmovie === "Rating Ascending") {
    //Ascending
    selectValue.sort(function (a, b) {
      return a.vote_average - b.vote_average;
    });
  } else if (sortmovie === "Popularity Ascending") {
   // Ascending
    selectValue.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
  } else if (sortmovie=== "Popularity Descending") {
   // Descending
    selectValue.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
  } else if (sortmovie === "titles") {
    //Ascending
    selectValue.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
   
  }
 const outerColor="";


  return (
    <>
      {selectValue.map((movie) => {
        return (
          <Card
            sx={{ maxWidth: 200, float: "left", margin: "1%", height: 420 }}
          >
            <CardActionArea>
              <Dotdiv>
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  opacity="0.6"
                  color="black"
                />
              </Dotdiv>

              <Progresscircle>
                <Progressarc></Progressarc>
                <CircularProgress
                  outerColor={movie.vote_average*10>50?"green":"yellow"}
                  style={{color:outerColor}}
                  variant="determinate"
                  value={movie.vote_average * 10}
                />
              </Progresscircle>
              <Progressvalue>{movie.vote_average * 10}</Progressvalue>

              <CardMedia
                style={{ position: "relative" }}
                component="img"
                height="300"
                image={`${imageUrl}${movie.backdrop_path}`}
                alt="trendingmovies"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  style={{ fontWeight: "bold", fontSize: 16 }}
                  component="div"
                >
                  {movie.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.first_air_date}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
