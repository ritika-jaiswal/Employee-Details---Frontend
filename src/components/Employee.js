import React from 'react';

const Employee = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{employee.name}</h3>
        <p className="text-sm">Contact No: {employee.contactNo}</p>
        <p className="text-sm">Email: {employee.email}</p>
        <p className="text-sm">Address: {employee.address}</p>
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
          onClick={() => onEdit(employee)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md"
          onClick={() => onDelete(employee.empId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Employee;
