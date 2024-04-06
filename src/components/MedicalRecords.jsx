import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';

const samplePatientData = [
  { name: 'John Doe', age: 35, bloodPressure: 120, heartRate: 72, price: 100 },
  { name: 'Jane Smith', age: 45, bloodPressure: 130, heartRate: 68, price: 120 },
  { name: 'Michael Johnson', age: 50, bloodPressure: 140, heartRate: 75, price: 150 },
  { name: 'Emily Wilson', age: 38, bloodPressure: 110, heartRate: 80, price: 110 },
  { name: 'Robert Brown', age: 55, bloodPressure: 125, heartRate: 70, price: 130 },
  { name: 'Lisa Davis', age: 42, bloodPressure: 135, heartRate: 78, price: 140 },
  { name: 'David Martinez', age: 48, bloodPressure: 145, heartRate: 73, price: 160 },
  { name: 'Jennifer Taylor', age: 40, bloodPressure: 115, heartRate: 76, price: 115 },
  { name: 'William Garcia', age: 60, bloodPressure: 130, heartRate: 74, price: 180 },
  { name: 'Susan Clark', age: 47, bloodPressure: 140, heartRate: 77, price: 170 },
];

const MedicalRecords = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-8">Medical Records</h1>
        
        {/* Bar Chart */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Blood Pressure Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={samplePatientData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="bloodPressure" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Pressure</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heart Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {samplePatientData.map(patient => (
                <tr key={patient.name}>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.bloodPressure}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.heartRate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MedicalRecords;
