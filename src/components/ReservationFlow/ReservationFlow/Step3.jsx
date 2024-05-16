import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Step3 = ({ prevStep, nextStep, saveReservationData }) => {
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(null);


  const[cantidadPersonas, setCantidadPersonas] = useState('');
  const handleCantidadPersonasChange = (e) =>{
    setCantidadPersonas(cantidadSeleccionada)
  }


  // Manejar cambio en el input del nombre
  const handleSelect = (cantidad) => {
    setCantidadSeleccionada(cantidad)
    setCantidadPersonas(cantidad)
  };


  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar el nombre en el estado de la reserva y avanzar al siguiente paso
    saveReservationData({ cantidadPersonas });
  };
console.log(cantidadPersonas)
  return (
    <><Form onSubmit={handleSubmit}>
<div className="cantidad-personas-selector">
  <div className='cantidad-personas'>
  <div
        className={` opcion${cantidadSeleccionada === 2 ? ' seleccionada' : ''}`}
        onClick={() => handleSelect(2)}
      >
        2
      </div>
      <div
        className={` opcion${cantidadSeleccionada === 3 ? ' seleccionada' : ''}`}
        onClick={() => handleSelect(3)}
      >
        3
      </div>
      <div
        className={`opcion${cantidadSeleccionada === 4 ? ' seleccionada' : ''}`}
        onClick={() => handleSelect(4)}
      >
        4
      </div>
  </div>
  <div className='cantidad-personas'>
      <div
        className={`opcion${cantidadSeleccionada === 1 ? ' seleccionada' : ''}`}
        onClick={() => handleSelect(1)}
      >
        1
      </div>
      <div className={`opcionNull`}></div>
      <div
        className={`opcion${cantidadSeleccionada === 'mas' ? ' seleccionada' : ''}`}
        onClick={() => handleSelect('mas')}
      >
        Más de 4
      </div>
  </div>

      
    </div>
    <div className='controls'>
    <Button variant="danger" onClick={prevStep}>Volver</Button>{' '}
      <Button variant="dark" type="submit">Siguiente</Button>
    </div>
      </Form>
    </>
  );
};



export default Step3;