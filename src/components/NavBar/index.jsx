import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Noticias from '../Noticias';
import Offcanvas from 'react-bootstrap/Offcanvas';

/* eslint-disable react/prop-types */

const NavBar = () => {


	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
return (

	<Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary fixed-top">
	<Container>
		<Navbar.Brand  as ={Link} to="/"><img
	alt=""
	src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEzklEQVR4nO1cbYgWVRR+NjXxM5VEjfwoFcSPEiW2yB8lqeDqWknIVuQPQ6PQXEJLN6I0hX6kGH6gKCoalGCtqZgIGoKKBopiKuFarOGmuxZUfqTmGweekWGY9525d+ae9x3ffeD82Jl7zznzvHfuPfecOwu0ohWu0BbAowAe90lPlCEqALwD4A8AuRA5DuAplBHez0OEX24CGIYyQDcAN2IQIvItygDPxiRD5DeUAcYaENKM+3xF6Q6g2oCQFvZ5CPcJHgDwGleNfw2ICBNZkeoBPFHE52kDoEOSpXWD74FkIm2wlEYA/1HPbQCToY+PAFwHcAvAQhsFM32/7MtkNwm6AlhKneLYI9DDW4HRetc0TqoAcJadq1J2bj31LoEefg55hWtNFDzGTo0kJ008Td0/QgftOCKChMwwUTKVnb5x4GAHziM36awGmgJkyALR10TBEnb80JGDJ6l/JHRQ6yNDJve3TRXsYeeJbvzDRpthmwCTaO8UgFE2Cq5QQW+4wRzqXwUdrKa9+Tad+ynsQ8bQxhHo4BfaG27T+UV2/g7u0Jnv8g2FiXWYb8W0wiIq+Bhu4cU5IxzbmUc7a2wV7KYC2cS5xJe0M92xnQO0Y7VdmM6wOqcoEkUOhRt05d5FYp5ONpPpbWUyPDnsho97AeZe14mfXMpyGW7g7dbftenciUttrgiyjsHTKylLky/+iGr7fBgpA7gRkiVxm2M5RGcP+lINxZbKMFKukxTJlrnENDqxCUB/X43nPIC1Kchp6jsa0a6F7c4B6BjmaDMbSPDkEjNoZyX/ruLIvMVINimOUP+4Am1q2OafQjWkX9moF9zC28985rv2Ka9dSriPehjAHT5o+zxthvO+2HujkLKf2EjqtC6xgHYk1+lBXtPveX1/grTl69QhSe0wdAFwhm2+iFJ2lA1dZ8cX0857getSLL/IezJivACrB4DBzLhV8VetZRsJy7dwst7nG+UXAOwC8DVfzQWsItTzvrxWD0Y5up+Nn4FbLKedWSH3KlMoe0TJVa6qkdjJDi/ALdbRjgzvMMx2SIZM3hPiOvoVO02BzubupQJtNjsipM6mTPAq3MJ7j8dHRM9ePJGW7DKNsVaw4w8pBUj5pJF25DRBIQwB8FdKZFxgrdkISx1PZkF5MoZPU/LUVkxEsnOjYYE6ZUIGxfRrWUI71hn+ucqE9DE4jnHQ0obEKNZ4U5kQiRrjojfDehP9J/Nt2uKiRpkQ0/D8OYPM3p8ABiIhqhXJkFSDDT6IoftuRIxTkqnEZksf5UTC9gjdqR23qFQkRDZhtujiq+0EJclOOTRPkFMSSTUkgRS5rgV0NhmsXLEwQJGQYyn4uymg06qgXQg9FQmRoZ0U3t4rlye/khgdFQmRVEPJE1LhO0LpWiTVUPKECP5WIkQeJhOE/K5EiKQaMkFIgxIhkmrIBCGnlAgxSuUVk5DDSoRIqiEThOxTIkRSDZkgpF6JEEk1ZIKQrUqEVGeFkLVKhEiqIROELCvmAZVSJKROiRApXmeCkPEKZFxhJj0ThLQBcCIDQZkaIWAByTtnkbZsS5Dik7rsDt8HjsEyZ4vv3udIGd0BfMLPwRoSynmeDqpJ+Nlae9/nK8U6EFxy6Bz4Fx35JN/5sla0Avb4HyDr8V4osQqYAAAAAElFTkSuQmCC"
	width="30"
	height="30"
	className="d-inline-block align-top"
	/>{' '} The Crafty</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
		<Nav className='me-auto'>
			<Nav.Link as ={Link} to="/category">toda la carta</Nav.Link>
			<Nav.Link as ={Link} to="category/food">Foods</Nav.Link>
			<Nav.Link as ={Link} to="category/drink">Drinks</Nav.Link>
			<Nav.Link as ={Link} to="category/cocktail">Cocktails</Nav.Link>
			<Nav.Link as ={Link} to="reservas">Reservas</Nav.Link>
			<Nav.Link as ={Link} to="reservas2">Reservas step by step</Nav.Link>
		</Nav>
		<Button variant="secondary" onClick={handleShow}>
        Noticias
      </Button>

      <Offcanvas className="noticias" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h2>Noticias</h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Noticias />
        </Offcanvas.Body>
      </Offcanvas>
		</Navbar.Collapse>
	</Container>
</Navbar>
)
}

export default NavBar