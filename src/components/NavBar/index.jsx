import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/esm/Button'
/* eslint-disable react/prop-types */

const NavBar = () => {
	return (
		<Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary fixed-top">
			<Container>
				<Navbar.Brand  as ={Link} to="/"><img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} Quidditch</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
				<Nav className='me-auto'>
					<Nav.Link as ={Link} to="category/escobas">Escobas</Nav.Link>
					<Nav.Link as ={Link} to="category/tunicas">Tunicas</Nav.Link>
					<Nav.Link as ={Link} to="category/bolas">Bolas de juego</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar