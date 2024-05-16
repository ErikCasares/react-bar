import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
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
    dia:'',
    hora:'',
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const resetStep = () => {
    setCurrentStep(currentStep - 3)
  }

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
      return <Step4 resetStep={resetStep} prevStep={prevStep} saveReservationData={saveReservationData} reservationData={reservationData} />;
    case 5:
      return <Step5 resetStep={resetStep} prevStep={prevStep} saveReservationData={saveReservationData} reservationData={reservationData} />;
    case 6:
      return   <ConfirmationStep prevStep={prevStep} reservationData={reservationData} />;
    default:
      return null;
  }
};

export default ReservationFlow;
