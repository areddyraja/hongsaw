import React from 'react';
import Table from 'react-bootstrap/Table';

const alertsData = [
  {
    eventDate: '2024-08-22 10:00:00',
    source: 'Sensor 1',
    deviceId: '12345',
    location: 'New York',
    gpsCoordinates: '40.7128, -74.0060',
    activityType: 'Motion Detected'
  },
  {
    eventDate: '2024-08-22 11:00:00',
    source: 'Sensor 2',
    deviceId: '67890',
    location: 'Los Angeles',
    gpsCoordinates: '34.0522, -118.2437',
    activityType: 'Temperature Alert'
  }
  // Add more data here
];

function Dashboard() {
  return (
    <div>
      <h1>Alerts Monitoring</h1>
      <Table bordered hover >
        <thead>
          <tr>
            <th>Event Date</th>
            <th>Source</th>
            <th>Device ID</th>
            <th>Location</th>
            <th>GPS Coordinates</th>
            <th>Activity Type</th>
          </tr>
        </thead>
        <tbody>
        {alertsData.map((alert, index) => (
          
          <tr key={index}>
            <td>{alert.eventDate}</td>
            <td>{alert.source}</td>
            <td>{alert.deviceId}</td>
            <td>{alert.location}</td>
            <td>{alert.gpsCoordinates}</td>
            <td>{alert.activityType}</td>
          </tr>
        ))}
          </tbody>

      </Table>
    </div>
  );
}

export default Dashboard;