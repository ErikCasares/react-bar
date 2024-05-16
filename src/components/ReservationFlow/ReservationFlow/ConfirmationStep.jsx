import React, {useState} from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ConfirmationStep = ({ reservationData, prevStep }) => {
  const confirmReserva = () =>{
    console.log('Reserva confirmada:', reservationData);
    let timerInterval;
    Swal.fire({
      title: 'Confirmar reserva',
      html: `
      <ul>
        <li><strong>Nombre:</strong> ${reservationData.nombre} ${reservationData.apellido}</li>
        <li><strong>Correo electrónico:</strong> ${reservationData.email}</li>
        <li><strong>Teléfono:</strong> ${reservationData.telefono}</li>
        <li><strong>Dia:</strong> ${reservationData.dia}</li>
        <li><strong>Hora:</strong> ${reservationData.hora}</li>
        <li><strong>Cantidad de personas:</strong> ${reservationData.cantidadPersonas}</li>
        <li><strong>Preferencias:</strong> ${reservationData.preferencias}</li>
      </ul>
    `,
    icon: 'info',
    confirmButtonColor: "#000000",
    showCancelButton: true,
    confirmButtonText: 'Confirmar reserva',
    cancelButtonText: 'Cancelar',
    reverseButtons: true,
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.isConfirmed) {
        window.location.href = '/';

      }
    });
  }
  
  return (
    <Form>
    <Card>
      <Card.Body>
        <Card.Title>Confirmar Reserva</Card.Title>
        <Card.Text>
          <strong>Nombre:</strong> {reservationData.nombre} {reservationData.apellido} <br />
          <strong>Correo electrónico:</strong> {reservationData.email} <br />
          <strong>Teléfono:</strong> {reservationData.telefono} <br />
          <strong>Cantidad de personas:</strong> {reservationData.cantidadPersonas} <br />
          <strong>Dia:</strong> {reservationData.dia} <br />
          <strong>Hora:</strong> {reservationData.hora} <br />
          <strong>Preferencias:</strong> {reservationData.preferencias} <br />
        </Card.Text>
        <Button variant="dark" onClick={prevStep}>Volver</Button>{' '}
        
        <Button variant="success"  onClick={confirmReserva}>Enviar</Button>
        
        
      </Card.Body>
    </Card>
    </Form>
  );
};

export default ConfirmationStep;