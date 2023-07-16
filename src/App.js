// App.js
import { NextUIProvider } from "@nextui-org/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AntModal from "./components/Modals/antModal";
import NextTable from "./components/Tables/NextTable";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    clientName: "",
    clientGender: "",
    clientPhone: "",
    clientMail: "",
    birthDate: null,
    clientHeight: null,
    clientWeight: null,
    clientPhysical: 1.1,
    subType: 1,
  });

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCancelModal = () => {
    setFormData({
      clientName: "",
      clientGender: "female",
      clientPhone: "",
      clientMail: "",
      birthDate: null,
      clientHeight: null,
      clientWeight: null,
      clientPhysical: 1.1,
      subType: 1,
    });
    setModalVisible(false);
  };

  const handleSaveData = (data) => {
    const patientData = {
      id: uuidv4(),
      ...data,
    };
  
    // Calculate age based on birth date
    const today = new Date();
    const birthDate = new Date(data.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    // Add age to patient data
    patientData.age = age;
    console.log(patientData.age);
  
    setPatients([...patients, patientData]);
    console.log("Kaydedilen veri:", patientData);
    setFormData({
      clientName: "",
      clientGender: "female",
      clientPhone: "",
      clientMail: "",
      birthDate: null,
      clientHeight: null,
      clientWeight: null,
      clientPhysical: 1.1,
      subType: 1,
    });
    setModalVisible(false);
  };

  return (
    <div>
      <h1>Client Registration</h1>
      <button onClick={handleOpenModal}>New Registration</button>

      <AntModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveData}
        onCancel={handleCancelModal}
        formData={formData}
        setFormData={setFormData}
      />

      <h2>Clients Information:</h2>
      <NextUIProvider>
        <NextTable data={patients} />
      </NextUIProvider>
    </div>
  );
};

export default App;
