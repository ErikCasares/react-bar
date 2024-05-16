import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Step5 = ({prevStep, nextStep, saveReservationData }) => {
    const[seleccion1, setSeleccion1] = useState(null);
    const[seleccion2, setSeleccion2] = useState(null);





  // Manejar cambio en el input del nombre
  const [dia, setDia] = useState('');
  const [hora, setHora] = useState('');
  const handleDiaChange = (e) =>{
    setDia(seleccion1)
  }
  const handleHoraChange = (e) =>{
    setHora(seleccion2)
  }


  // Manejar cambio en el input del nombre
  const handleSelect1 = (opcion) => {
    setSeleccion1(opcion)
    setDia(opcion)
  };

  const handleSelect2 = (opcion) => {
    setSeleccion2(opcion)
    setHora(opcion)
  };
  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar el nombre en el estado de la reserva y avanzar al siguiente paso
    saveReservationData({ dia, hora });
  };

  return (
    <><Form onSubmit={handleSubmit}>
<div className="cantidad-personas-selector">
  <div className='cantidad-personas'>
    <h3 className='opcionNull'>Dia</h3>
  <div
        className={` opcion preferencia ${seleccion1 === "Viernes" ? ' seleccionada' : ''}`}
        onClick={() => handleSelect1("Viernes")}
      >
        Viernes
      </div>
      <div
        className={` opcion preferencia ${seleccion1 === "Sabado" ? ' seleccionada' : ''}`}
        onClick={() => handleSelect1("Sabado")}
      >
        Sabado
      </div>
  </div>
  <div className='cantidad-personas'>
    <h3 className='opcionNull'>Hora</h3>
  <div
        className={` opcion preferencia ${seleccion2 === "20:00" ? ' seleccionada' : ''}`}
        onClick={() => handleSelect2("20:00")}
      >
        20:00
      </div>
      <div
        className={` opcion preferencia ${seleccion2 === "22:00" ? ' seleccionada' : ''}`}
        onClick={() => handleSelect2("22:00")}
      >
        22:00
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

export default Step5;