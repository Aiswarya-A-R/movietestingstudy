import {Footerr,Footerdiv,Footimage,Footnav,Li,H3,Ul,Uldiv,Jointhecommunity} from './Style'
import img from "../images/footerimage.svg";

function Footer(){
    return(
        <>
        {/*Footer*/}
       
        <Footerr>
            <Footimage>
            <img src={img} alt={"tmdbimage" }style={{width:130, height:94, 
            }}/>
            </Footimage>
            <Jointhecommunity>
                JOIN THE COMMUNITY
            </Jointhecommunity>
          

            
        
        <Footnav>
        <Uldiv>
          <H3>The Basics</H3>
          <Ul>
            <Li>About TMDB</Li>
            <Li>Contact Us</Li>
            <Li>Support Forums</Li>
            <Li>API</Li>
            <Li>System Status</Li>
          </Ul>
        </Uldiv>
        <Uldiv>
          <H3>Get Involved</H3>
          <Ul>
            <Li>Contribution Bible</Li>
            <Li>3rd Party Applications</Li>
            <Li>Add New Movie</Li>
            <Li>Add New TV Show</Li>
          </Ul>
        </Uldiv>
        <Uldiv>
          <H3>Community</H3>
          <Ul>
            <Li>Guidelines</Li>
            <Li>Discussions</Li>
            <Li>Leaderboard</Li>
            <Li>Twitter</Li>
          </Ul>
        </Uldiv>
        <Uldiv>
          <H3 style={{paddingLeft:25}}>Legal</H3>
          <Ul>
            <Li>Terms of Use</Li>
            <Li>API Terms of Use</Li>
            <Li>Privacy Policy</Li>
          </Ul>
        </Uldiv>
        </Footnav>
       
        </Footerr>

        </>

    )
}
export default Footer






