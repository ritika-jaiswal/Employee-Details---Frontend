import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      <Link to="/edit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add New Employee</Link>
      {employees.map(employee => (
        <div key={employee.empId} className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">{employee.name}</p>
            <p className="text-sm">{employee.email}</p>
          </div>
          <div className="flex space-x-2">
            <Link to={`/edit/${employee.empId}`} className="bg-yellow-500 text-white px-3 py-2 rounded-md">
              Edit
            </Link>
            <button
              onClick={() => onDelete(employee.empId)}
              className="bg-red-500 text-white px-3 py-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
