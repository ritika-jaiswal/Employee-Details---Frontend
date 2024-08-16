import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://employeedetails-backend-production.up.railway.app/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDeleteEmployee = async (empId) => {
    try {
      await axios.delete(`https://employeedetails-backend-production.up.railway.app/api/employees/${empId}`);
      fetchEmployees(); 
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the Create Employee page
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <button onClick={handleBack} className="flex items-center bg-blue-500 text-white hover:text-gray-400 mb-4 px-3 py-1 rounded-md">
        {/* <ArrowLeftIcon className="h-6 w-6 mr-2" /> */}
        Back 
      </button>
      <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Contact No</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Email</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Address</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empId} className="border-b border-gray-200">
              <td className="py-3 px-4 text-sm text-gray-600">{employee.empId}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{employee.name}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{employee.contactNo}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{employee.email}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{employee.address}</td>
              <td className="py-3 px-4 text-sm">
                <button
                  onClick={() => navigate(`/edit/${employee.empId}`)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEmployee(employee.empId)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
