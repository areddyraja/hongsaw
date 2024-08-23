import React from 'react';

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
      <div className="table">
        <div className="table-header">
          <div className="table-header-cell">Runtime ID</div>
          <div className="table-header-cell">Status</div>
          <div className="table-header-cell">Workflow ID</div>
          <div className="table-header-cell">Workflow Name</div>
          <div className="table-header-cell">Version</div>
          <div className="table-header-cell">Start Time</div>
          <div className="table-header-cell">Started By</div>
          <div className="table-header-cell">Last Stopped On</div>
          <div className="table-header-cell">Actions</div>
        </div>
        {runtimeData.map((runtime, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{runtime.runtimeId}</div>
            <div className="table-cell">{runtime.status}</div>
            <div className="table-cell">{runtime.workflowId}</div>
            <div className="table-cell">{runtime.workflowName}</div>
            <div className="table-cell">{runtime.version}</div>
            <div className="table-cell">{runtime.startTime}</div>
            <div className="table-cell">{runtime.startedBy}</div>
            <div className="table-cell">{runtime.lastStoppedOn}</div>
            <div className="table-cell">
              <button className="action-button">Start</button>
              <button className="action-button">Stop</button>
              <button className="action-button">View Logs</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Runtime;