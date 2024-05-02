import { useState, useEffect, useContext } from "react"
import Ratio from 'react-bootstrap/Ratio';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import { useParams, Link  } from "react-router-dom"
import { items} from '../ProductsData/productsData';
const ProductItem = ({ }) => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()


  useEffect(()=> {
    const getProductos = () =>{
      const timer = setTimeout(() => {
        setCargando(false);
      }, 500);
        const productos = items
        console.log(productos)
        const filteredProductos = productos.filter(productos => productos.categoryId == id)
        if (filteredProductos.length > 0) {
            setProductos(filteredProductos)
            console.log(productos)

            } else {
            setProductos(productos)

          }}
            getProductos()
        }, [id])
  return (





<div className='carta'>
<Container fluid className='mt4'> {cargando ? (
        <div><Spinner animation="border" /><p>Cargando productos...</p> </div>
        
        ) : (<Row>
        {productos.map(productos => (
        <Card border="secondary" style={{ width: '18rem' }} key={productos.id}>
            <Ratio aspectRatio={1 / 2}>
            <Placeholder xs={6} />
      </Ratio>
            <Card.Body>
                <Card.Title>{productos.name}</Card.Title>
                <Card.Text>
                Precio: ${productos.price}
                </Card.Text>
                <Link to={`/item/${productos.id}`}><Button>Mas Info</Button></Link>
            </Card.Body>
        </Card>
    ))}
    </Row>
    )}
    
    </Container> 
    </div> 
  );
};

export default ProductItem;