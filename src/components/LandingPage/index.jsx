import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProductItem from '../ProductItem';
import ProductList from '../ProductsData/ProductsList';
import Noticias from '../Noticias';

function LandingPage() {
  const [count, setCount] = useState(0)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <><div className='general'>
    <h1>The Crafty Bartender</h1>
    <h2>¡Bienvenido a The Crafty Bartender!</h2>
    <div className='class'>
    <p>En The Crafty Bartender, nos apasiona elevar la experiencia de tomar tragos a nuevas alturas. Somos más que un simple bar; somos artesanos de la coctelería, dedicados a crear momentos memorables con cada bebida que servimos.</p>
    <p>Desde los clásicos atemporales hasta nuestras creaciones innovadoras, cada cóctel en nuestro repertorio es cuidadosamente elaborado por expertos en la materia. Nos esforzamos por combinar los mejores licores, ingredientes frescos y técnicas artesanales para ofrecerte una experiencia sensorial incomparable.</p>
    <p>Únete a nosotros en The Crafty Bartender, donde la creatividad fluye libremente y cada trago es una obra maestra en sí misma. Permítenos llevarte en un viaje de descubrimiento de sabores, donde cada sorbo te transporta a un mundo de deleite y asombro.</p>
    <p>¡Salud a la artesanía, a la innovación y a la buena compañía! ¡Bienvenido a The Crafty Bartender!</p>
    </div>
    </div>
    </>
  )
}

export default LandingPage