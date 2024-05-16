import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Step4 = ({prevStep, nextStep, saveReservationData }) => {
  const [seleccion, setSeleccion] = useState(null);

  // Manejar cambio en el input del nombre
  const[preferencias, setPreferencias] = useState('');
  const handlePreferenciasChange = (e) =>{
    setPreferencias(seleccion)
  }


  // Manejar cambio en el input del nombre
  const handleSelect = (opcion) => {
    setSeleccion(opcion)
    setPreferencias(opcion)
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar el nombre en el estado de la reserva y avanzar al siguiente paso
    saveReservationData({ preferencias });
  };

  return (
    <><Form onSubmit={handleSubmit}>
<div className="cantidad-personas-selector">
  <div className='cantidad-personas'>
  <div
        className={` opcion preferencia ${seleccion === "Salon" ? ' seleccionada' : ''}`}
        onClick={() => handleSelect("Salon")}
      >
        Salon
      </div>
      <div
        className={` opcion preferencia ${seleccion === "Vereda" ? ' seleccionada' : ''}`}
        onClick={() => handleSelect("Vereda")}
      >
        Vereda
      </div>
      <div
        className={`opcion preferencia ${seleccion === "Terraza" ? ' seleccionada' : ''}`}
        onClick={() => handleSelect("Terraza")}
      >
        Terraza
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

export default Step4;