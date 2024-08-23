import React from 'react';

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
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell">Event Date</div>
          <div className="table-cell">Source</div>
          <div className="table-cell">Device ID</div>
          <div className="table-cell">Location</div>
          <div className="table-cell">GPS Coordinates</div>
          <div className="table-cell">Activity Type</div>
        </div>
        {alertsData.map((alert, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{alert.eventDate}</div>
            <div className="table-cell">{alert.source}</div>
            <div className="table-cell">{alert.deviceId}</div>
            <div className="table-cell">{alert.location}</div>
            <div className="table-cell">{alert.gpsCoordinates}</div>
            <div className="table-cell">{alert.activityType}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;