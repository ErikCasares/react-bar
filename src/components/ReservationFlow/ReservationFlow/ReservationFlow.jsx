import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import ConfirmationStep from './ConfirmationStep';

const ReservationFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [reservationData, setReservationData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    cantidadPersonas: '',
    preferencias: '',
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const saveReservationData = (data) => {
    setReservationData({ ...reservationData, ...data });
    nextStep();
  };

  switch (currentStep) {
    case 1:
      return <Step1 nextStep={nextStep} saveReservationData={saveReservationData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} saveReservationData={saveReservationData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} saveReservationData={saveReservationData} />;
    case 4:
      return <Step4 nextStep={nextStep} prevStep={prevStep} saveReservationData={saveReservationData} />;
    case 5:
      return <ConfirmationStep prevStep={prevStep} reservationData={reservationData} />;
    default:
      return null;
  }
};

export default ReservationFlow;
