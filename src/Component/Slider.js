import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { CardContext } from "./Context/Cardcontext";


const marks = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 25,
    label: '250',
  },
  {
    value: 50,
    label: '500',
  },
  {
    value: 75,
    label: '750',
  },
  {
    value:100,
    label:'1000'
  }
];


function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderLabel({sliderbar,setSliderbar}) {
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        value={sliderbar}
        onChange={(event)=>setSliderbar(event.target.value)}
      />
    </Box>
  );
}
