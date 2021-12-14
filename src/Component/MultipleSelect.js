import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const sortingElements = [
  'popularity  Ascending',
  'popularity Descending',
  'Rating Ascending',
  'Rating Descenting',
  'Title',
  
];

function getStyles(sortingElement, cardValue, theme) {
 
  return {
    fontWeight:
      cardValue.indexOf(sortingElement) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
    
  const theme = useTheme();
  const [cardValue, setcardValue] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcardValue(
      // On autofill we get a the stringified value.
       typeof value === 'string' ? value.split(',') : value 
       
      
    );

      
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={cardValue}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {sortingElements.map((sortingElement) => (
            <MenuItem
              key={sortingElement}
              value={sortingElement}
              style={getStyles(sortingElement, cardValue, theme)}
            >
              {sortingElement}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
