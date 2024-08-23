import React from 'react';
import Table from 'react-bootstrap/Table';
const devicesData = [
  {
    deviceId: '12345',
    name: 'Device 1',
    location: 'New York',
    locationId: 'NY001',
    description: 'This is device 1',
    status: 'Active',
    installedOn: '2024-08-22',
    lastUpdated: '2024-08-23',
    lastEvent: 'Motion Detected',
    lastUpdatedBy: 'John Doe'
  },
  {
    deviceId: '67890',
    name: 'Device 2',
    location: 'Los Angeles',
    locationId: 'LA002',
    description: 'This is device 2',
    status: 'Inactive',
    installedOn: '2024-08-21',
    lastUpdated: '2024-08-22',
    lastEvent: 'Temperature Alert',
    lastUpdatedBy: 'Jane Doe'
  }
  // Add more data here
];

function Devices() {
  return (
    <div>
      <h1>Devices</h1>
      <Table bordered hover >
        <thead>
          <tr>
          <th>Device ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Location ID</th>
          <th>Description</th>
          <th>Status</th>
          <th>Installed On</th>
          <th>Last Updated</th>
          <th>Last Event</th>
          <th>Last Updated By</th>
        </tr>
        </thead>
        <tbody>
        {devicesData.map((device, index) => (
          <tr key={index}>
            <td>{device.deviceId}</td>
            <td>{device.name}</td>
            <td>{device.location}</td>
            <td>{device.locationId}</td>
            <td>{device.description}</td>
            <td>{device.status}</td>
            <td>{device.installedOn}</td>
            <td>{device.lastUpdated}</td>
            <td>{device.lastEvent}</td>
            <td>{device.lastUpdatedBy}</td>
          </tr>
        ))}
      </tbody>

</Table>
</div>
  );
}

export default Devices;