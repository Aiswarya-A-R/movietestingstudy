import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import $ from "jquery";
import DiscreteSliderLabel from "./Slider";

import {
  Popularmovies,
  Accordtiondiv,
  Filterdiv,
  Filterh3,
  Filterul,
  Filterli,
  RangeSlider,
  RangeSliderDiv,
} from "./Style";
import { CardContext } from "./Context/Cardcontext";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import moment from "moment";
import axios from "axios";

export default function ControlledAccordions({
  sliderbar,
  setSliderbar,
  sortmovie,
  setSortMovie,
  filteredFilm,
  setfilteredFilm,
}) {
  const [genresdate, setGenresdata] = useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date(2017, 15, 24));
  const [endDate, setEndDate] = useState(new Date());
  let filteredData;
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { movies, setMovies, api, setApi } = useContext(CardContext);

  const filterMoviesByDate = (fromDate, toDate) => {
    const formattedFromDate = moment(fromDate).format("YYYY-MM-DD");
    const formattedToDate = moment(toDate).format("YYYY-MM-DD");

    let data = movies.filter((data) => {
      return   moment(data.first_air_date).format("YYYY-MM-DD") >= formattedFromDate && moment(data.first_air_date).format("YYYY-MM-DD") <= formattedToDate
      
      //return data;
    });
    console.log(data,"dateaaaaaaaa")
    if (data) {
      setfilteredFilm(data);
     // console.log(data,"dateaaaaaaaa")
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=0842c16ef26d454d5b5b1c1651782c76&language=en-US`
      )
      .then((response) => {
        console.log(response.data.genres, "axios");
        setGenresdata(response.data.genres);
      });
    console.log("in");
    filterMoviesByDate(startDate, endDate);
  }, [startDate, endDate]);

  //Genres Filter
  let result = []; //array
  let count = 0; //array count
  if (genresdate) {
    genresdate.forEach((gen) => {
      result[count] = (
        <Filterli
          value={gen.id}
          onClick={(event) => setApi(event.target.value)}
        >
          {gen.name}
        </Filterli>
      );
      count++;
    });
  }

  return (
    <>
      <div style={{ width: 340, float: "left", paddingTop: 16 }}>
        <Accordtiondiv>
          <Popularmovies>Popular Movies</Popularmovies>
        </Accordtiondiv>
        <Accordtiondiv>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                sort
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sort Result By
                <select
                  value={sortmovie}
                  onChange={(event) => {
                    setSortMovie(event.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="0">All</option>
                  <option value="Popularity Ascending">
                    Populatity Ascending
                  </option>
                  <option value="Popularity Descending">
                    Popularity Descending
                  </option>
                  <option value="Rating Ascending">Rating Ascending</option>
                  <option value="Rating Descending">Rating Descending</option>
                  <option value="titles">Titles</option>
                </select>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Accordtiondiv>
        <Accordtiondiv>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Filter
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <label>From date </label>{" "}
                <DatePicker value={startDate} onChange={setStartDate} />
                <br />
                <br />
                <label>To date </label>{" "}
                <DatePicker value={endDate} onChange={setEndDate} />
                <Filterdiv>
                  <Filterh3>Genres</Filterh3>
                  <Filterul>{result}</Filterul>
                </Filterdiv>
                <br />
                <br />
                Minimum User Votes
                <br />
                <br />
                <DiscreteSliderLabel
                  sliderbar={sliderbar}
                  setSliderbar={setSliderbar}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Accordtiondiv>
        <Accordtiondiv>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Where To Watch
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Accordtiondiv>
      </div>
    </>
  );
}
