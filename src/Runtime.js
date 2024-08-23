import React from 'react';
import Table from 'react-bootstrap/Table';


const runtimeData = [
  {
    runtimeId: '12345',
    status: 'Running',
    workflowId: '12345',
    workflowName: 'Helmet Monitoring Flow',
    version: '1.0',
    startTime: '2024-08-22 10:00:00',
    startedBy: 'John Doe',
    lastStoppedOn: '2024-08-23 12:00:00'
  },
  {
    runtimeId: '67890',
    status: 'Stopped',
    workflowId: '67890',
    workflowName: 'Vehicle IN/OUT Flow',
    version: '2.0',
    startTime: '2024-08-21 11:00:00',
    startedBy: 'Jane Doe',
    lastStoppedOn: '2024-08-22 13:00:00'
  },
  {
    runtimeId: '34567',
    status: 'Running',
    workflowId: '34567',
    workflowName: 'Security Guard Flow',
    version: '3.0',
    startTime: '2024-08-20 09:00:00',
    startedBy: 'John Doe',
    lastStoppedOn: '2024-08-21 10:00:00'
  },
  {
    runtimeId: '90123',
    status: 'Stopped',
    workflowId: '90123',
    workflowName: 'Parking Monitoring Flow',
    version: '4.0',
    startTime: '2024-08-19 08:00:00',
    startedBy: 'Jane Doe',
    lastStoppedOn: '2024-08-20 09:00:00'
  }
];

function Runtime() {
  return (
    <div>
      <h1>Runtimes</h1>
     
      <Table bordered hover >
        <thead>
          <tr>
          <th>Runtime ID</th>
          <th>Status</th>
          <th>Workflow ID</th>
          <th>Workflow Name</th>
          <th>Version</th>
          <th>Start Time</th>
          <th>Started By</th>
          <th>Last Stopped On</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {runtimeData.map((runtime, index) => (
           <tr key={index}>
            <td>{runtime.runtimeId}</td>
            <td>{runtime.status}</td>
            <td>{runtime.workflowId}</td>
            <td>{runtime.workflowName}</td>
            <td>{runtime.version}</td>
            <td>{runtime.startTime}</td>
            <td>{runtime.startedBy}</td>
            <td>{runtime.lastStoppedOn}</td>
            <td>
              <button className="action-button">Start</button>
              <button className="action-button">Stop</button>
              <button className="action-button">View Logs</button>
            </td>
            </tr>
        ))}
       </tbody>

</Table>
</div>
  );
}

export default Runtime;