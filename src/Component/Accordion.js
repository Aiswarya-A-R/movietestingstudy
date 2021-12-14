import React from 'react'
import { AccordionDetails,AccordionSummary } from '@material-ui/core'
import { Accordion } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import {Button} from '@material-ui/core'
import {Popularmovies,Accordtiondiv} from './Style'
import { faBold } from '@fortawesome/free-solid-svg-icons'


function Asccordion() {
    return (
       <>
            <div style={{ width: 340,float: 'left' ,height:'100%' }}>
            <Popularmovies>Popular Movies</Popularmovies>
            <Accordtiondiv>
            <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 'bold',
            }}
          >
            Sort
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             xvcbkhf,kjdthajgue {/* <select>
              <option>Sadiq</option>
              <option>Aiswarya</option>
              <option>Govind</option>
              </select> */}
          </Typography>
        </AccordionDetails>
      </Accordion>   
      </Accordtiondiv>
      <Accordtiondiv>
               <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
        >
          <Typography
            style={{
              fontWeight: 'bold',
            }}
          >
            Filter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             xvcbkhf,kjdthajgue {/* <select>
              <option>Sadiq</option>
              <option>Aiswarya</option>
              <option>Govind</option>
              </select> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Accordtiondiv>


    <Accordtiondiv>
            <Accordion style={{ width:300}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
        >
          <Typography
            style={{
              fontWeight: 'bold', 
            }}
          >
            Where To Watch
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             xvcbkhf,kjdthajgue {/* <select>
              <option>Sadiq</option>
              <option>Aiswarya</option>
              <option>Govind</option>
              </select> */}
          </Typography>
        </AccordionDetails>
      </Accordion>   
</Accordtiondiv>

<Accordtiondiv>
<Button variant="contained" style={{width:300,borderRadius:20,fontWeight:faBold}} disabled>
  Search
</Button>
</Accordtiondiv>
</div>
      </>
      
    )
}

export default Asccordion

