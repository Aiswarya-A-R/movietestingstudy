import React from 'react'
import { Logo,Header,NavBar,Image,Table,Tr,Th,Button} from './Style'
import img from '../images/header.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus ,faSearch} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
        <div>
            <Header>
            <NavBar>
            
            <Table>
                <thead>
                <Tr>
                    
                    <Th  style={{ width: 150 }}>
                        <Logo>
                            <Image src={img}></Image>
                        </Logo>
                    </Th>
                    <Th>Movies</Th>
                    <Th>TVShows</Th>
                    <Th>People</Th>
                    <Th>More</Th>
                    <Th></Th>
                    <Th></Th>
                     <Th></Th>
                     <Th></Th>
                     <Th></Th>
                    <Th><FontAwesomeIcon icon={faPlus} color="white"  /></Th>
                    <Th><Button>EN</Button></Th>
                    <Th>Login</Th>
                    <Th>joinTMDB</Th>
                    <Th><FontAwesomeIcon icon={faSearch} color="rgb(1,180,228)"/></Th>
                </Tr>
                </thead>
            </Table>



            </NavBar>
            </Header>
            movies
        </div>
    )
}
export default Navbar