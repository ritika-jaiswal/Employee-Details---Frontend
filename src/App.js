import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetails from './components/EmployeeDetails';

const App = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/employees" element={<EmployeeDetails />} />
        <Route path="/edit/:id" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
};

export default App;
