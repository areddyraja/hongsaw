import React from 'react';

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
      <div className="table">
        <div className="table-header">
          <div className="table-header-cell">Device ID</div>
          <div className="table-header-cell">Name</div>
          <div className="table-header-cell">Location</div>
          <div className="table-header-cell">Location ID</div>
          <div className="table-header-cell">Description</div>
          <div className="table-header-cell">Status</div>
          <div className="table-header-cell">Installed On</div>
          <div className="table-header-cell">Last Updated</div>
          <div className="table-header-cell">Last Event</div>
          <div className="table-header-cell">Last Updated By</div>
        </div>
        {devicesData.map((device, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{device.deviceId}</div>
            <div className="table-cell">{device.name}</div>
            <div className="table-cell">{device.location}</div>
            <div className="table-cell">{device.locationId}</div>
            <div className="table-cell">{device.description}</div>
            <div className="table-cell">{device.status}</div>
            <div className="table-cell">{device.installedOn}</div>
            <div className="table-cell">{device.lastUpdated}</div>
            <div className="table-cell">{device.lastEvent}</div>
            <div className="table-cell">{device.lastUpdatedBy}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Devices;