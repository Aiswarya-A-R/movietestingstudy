
import styled from "styled-components";
//import './assets/css/yellowtail.css';

 export const Header=styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color:  rgba( 3,37,65);
    height: 64px;
    width: 100%;
    z-index: 10;
    transition: top 0.2s linear;
`
export const NavBar=styled.div`
    display: flex;
    float:left;
    width:100%;
`
export const Image=styled.img`
    padding:0px;
    height:20px;
    float:left;

`
export const Logo=styled.div`
    width:60px;
    clear:both;
    margin-left:20px;
    
`


export const Table=styled.table`
    width:100%;
`

export const Tr=styled.tr`
    color:white;
`

export const Th=styled.th`
text-align: center;
width: 75px;
font-size: 15px;
    

`
export const Button=styled.button`
display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 3rem;
  background: transparent;
  color: white;
  border: 2px solid white;

`
export const Popularmovies=styled.div`
    font-size:1.5rem;
    font-weight:bold;
    
   

`
export const Accordtiondiv=styled.div`
padding-top:10px;
padding-left:15px;
`

export const ImageCard=styled.div`
    height:200px;
    width:200px;
    float:left;
    overflow:hidden;
    `

export const Footerr=styled.div`

   
    background-color:  rgba( 3,37,65);
    min-width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
  
    max-height:220px !important;
`
export const Footerdiv=styled.div`

font-family: 'Source Sans Pro', Arial, sans-serif;
font-size: 1em;
bottom:0;

`
export const Footimage=styled.div`
.img{
        
    display: block;
    position: absolute;
    right: 0;
    bottom:0;
}

margin-left:200px;
padding-left:300px;
text-align: right;
position: relative;
bottom: 6px;
right: 0;


`
export const Footnav=styled.div`

    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 0px;
    font-size: .9em;

`
export const Li=styled.li`
font-weight:bold
line-height: 1.6em;
max-width: 260px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
color: #fff;
`
export const H3=styled.h3`
font-weight: bold;
font-size: 1.4em;
line-height: 1.4em;
text-transform: uppercase;
color: #fff;
white-space: nowrap;
margin: 0 0 4px 0;
margin-left:5px;
`
export const Ul=styled.ul`
display: block;
list-style-type: disc;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;
`
export const Uldiv=styled.div`
display: block;
`
export const Jointhecommunity=styled.div`

    position: relative;
    bottom: -60px;
    border-color: #fff;
    background-color: #fff;
    color: rgba( 1,180,228);
    font-size: 1.3em;
    font-weight: bold;
    display: inline-block;
    word-wrap: break-word;
    white-space: normal;
    text-transform: uppercase;
    border-radius: 0.2rem;
    margin-left: -197px;
`
export const Dotdiv=styled.div`
position:absolute;
top:5px;
right:5px;
z-index:1;
background-color:rgba(255,255,255,0.5);
border-radius:50%;
width:20px;
height:20px;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`

 export const Progresscircle=styled.div`
 position:absolute;
 z-index:1;
 background-color:rgba(9, 18, 4);
 border-radius:50%;
 width:40px;
 height:40px;
 display:flex;
 justify-content:center;
 align-items:center;
 text-align:center;
 top:275px;
 margin-left:7px;

 `

 export const Progressarc=styled.div`
 position:absolute;
 z-index:2;
 border-radius:50%;
 width:40px;
 height:40px;
 display:flex;
 justify-content:center;
 align-items:center;
 text-align:center;
 top:275px;
 margin-left:7px;
 
 `

 export const Progressvalue=styled.div`
 position:absolute;
 z-index:3;
 width:40px;
 height:40px;
 display:flex;
 justify-content:center;
 align-items:center;
 text-align:center;
 top:275px;
 margin-left:7px;
 color:white;
 
 `

export const Filterdiv=styled.div`
display: flex;
    flex-direction: column;
    min-height: 100%;
    height: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    background-color: rgba(var(--tmdbDarkBlue), 1);
    color: #000;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-size: 1em;
    -webkit-font-smoothing: antialiased;
    
`
 export const Filterh3=styled.h3`
 display: inline-flex;
    align-items: center;
    width: 100%;
    font-size: 1em;
    font-weight: 300;
 `
 export const Filterul=styled.ul`
 display: block;
 list-style-type: disc;
 margin-block-start: 1em;
 margin-block-end: 1em;
 margin-inline-start: 0px;
 margin-inline-end: 0px;
 padding-inline-start: 40px;

 `
 export const Filterli=styled.li`
 display: inline-flex;
    border: 1px solid #9e9e9e;
    border-radius: 14px;
    padding: 4px 12px;
    font-size: 0.9em;
    margin-right: 6px;
    margin-top: 8px;
    text-align: -webkit-match-parent;
    cursor:pointer;
}
 `
 export const RangeSliderDiv=styled.div`
 
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
	display: flex;
	transition: all 100ms;
	transition: none;
	padding: 4px 0px;
	display: flex;
	flex-grow: 1;
	flex-shrink: 1;
	justify-content: space-between;
	position: relative;
	justify-content: space-between;

}
 `
