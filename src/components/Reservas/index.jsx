import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';


function Reservas() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    dia:'',
    hora:'',
    cantidadPersonas: '',
    preferencias: '',
  });


  // Manejar cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

// Manejar envío del formulario
const handleSubmit = (e) => {
  e.preventDefault();
  // Mostrar el alert de confirmación
  Swal.fire({
    title: 'Confirmar reserva',
    html: `
      <p>Por favor, confirma la siguiente reserva:</p>
      <ul>
        <li><strong>Nombre:</strong> ${formData.nombre} ${formData.apellido}</li>
        <li><strong>Correo electrónico:</strong> ${formData.email}</li>
        <li><strong>Teléfono:</strong> ${formData.telefono}</li>
        <li><strong>Dia:</strong> ${formData.dia}</li>
        <li><strong>Hora:</strong> ${formData.hora}</li>
        <li><strong>Cantidad de personas:</strong> ${formData.cantidadPersonas}</li>
        <li><strong>Preferencias:</strong> ${formData.preferencias}</li>
      </ul>
    `,
    icon: 'info',
    confirmButtonColor: "#000000",
    showCancelButton: true,
    confirmButtonText: 'Confirmar reserva',
    cancelButtonText: 'Cancelar',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {Swal.fire({
      title: "Reserva completada",
      text: "Te esperamos",
      icon: "success"
    });
      // Aquí puedes agregar la lógica para confirmar la reserva
      console.log('Reserva confirmada:', formData);
      // Por ejemplo, puedes llamar a una función que maneje la creación de la reserva en tu backend
      // createReservation(formData);
      // Reiniciar el formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        dia:'',
        hora:'',
        cantidadPersonas: '',
        preferencias: '',
      });
    }
  });
};
return (
  <><div className='general'>
  <Form className='reservas' onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="nombre">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="apellido">
      <Form.Label>Apellido</Form.Label>
      <Form.Control type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="email">
      <Form.Label>Correo electrónico</Form.Label>
      <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="telefono">
      <Form.Label>Número de teléfono</Form.Label>
      <Form.Control type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="dia">
      <Form.Label>Dia de la reserva</Form.Label>
      <Form.Select name="dia" value={formData.dia} onChange={handleInputChange} required>
        <option value="">Dia</option>
        <option value="viernes">viernes</option>
        <option value="sabado">sabado</option>
        <option value="domingo">domingo</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="hora">
      <Form.Label>Hora de la reserva</Form.Label>
      <Form.Select name="hora" value={formData.hora} onChange={handleInputChange} required>
        <option value="">Hora</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
        <option value="23:00">23:00</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="cantidadPersonas">
      <Form.Label>Cantidad de personas</Form.Label>
      <Form.Select name="cantidadPersonas" value={formData.cantidadPersonas} onChange={handleInputChange} required>
        <option value="">Seleccionar cantidad</option>
        <option value="1">una</option>
        <option value="2">dos</option>
        <option value="3">cuatro</option>
        <option value="4">más de cuatro</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="preferencias">
      <Form.Label>Preferencias</Form.Label>
      <Form.Select name="preferencias" value={formData.preferencias} onChange={handleInputChange} required>
        <option value="">Seleccionar preferencia</option>
        <option value="salon">Salón</option>
        <option value="vereda">Vereda</option>
        <option value="terraza">Terraza</option>
      </Form.Select>
    </Form.Group>
        {/* Agrega los otros campos del formulario aquí */}
        <Button variant="dark" type="submit">Enviar</Button>
      </Form>
      </div>
  </>
);
};

export default Reservas;