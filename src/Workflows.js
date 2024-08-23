
import React from 'react';

const workflowsData = [
  {
    workflowId: '12345',
    name: 'Helmet Monitoring Flow',
    description: 'Helmet/Mask/Safety Goggles Monitoring Flow',
    version: '1.0',
    status: 'Active',
    createdOn: '2024-08-22',
    createdBy: 'John Doe',
    lastUpdatedOn: '2024-08-23'
  },
  {
    workflowId: '67890',
    name: 'Vehicle IN/OUT Flow',
    description: 'Vehicle IN/OUT times Flow',
    version: '2.0',
    status: 'Inactive',
    createdOn: '2024-08-21',
    createdBy: 'Jane Doe',
    lastUpdatedOn: '2024-08-22'
  },
  {
    workflowId: '34567',
    name: 'Security Guard Flow',
    description: 'Security Guard On Duty Flow',
    version: '3.0',
    status: 'Active',
    createdOn: '2024-08-20',
    createdBy: 'John Doe',
    lastUpdatedOn: '2024-08-21'
  },
  {
    workflowId: '90123',
    name: 'Parking Monitoring Flow',
    description: 'Parking Monitoring Flow',
    version: '4.0',
    status: 'Inactive',
    createdOn: '2024-08-19',
    createdBy: 'Jane Doe',
    lastUpdatedOn: '2024-08-20'
  }
];

const modelsData = [
  { modelId: '1', name: 'Yolo' },
  { modelId: '2', name: 'Dicom' }
];
const devicesData = [
  { deviceId: '1', name: 'Device 1' },
  { deviceId: '2', name: 'Device 2' }
];
const businessRules = [
  { id: '1', name: 'Rule 1' },
  { id: '2', name: 'Rule 2' },
  { id: '3', name: 'Rule 3' }
];



function Workflows() {
  return (
    <div>
      <h1>Workflows</h1>

      <div className="table">
        <div className="table-header">
          <div className="table-header-cell">Workflow ID</div>
          <div className="table-header-cell">Name</div>
          <div className="table-header-cell">Description</div>
          <div className="table-header-cell">Version</div>
          <div className="table-header-cell">Status</div>
          <div className="table-header-cell">Created On</div>
          <div className="table-header-cell">Created By</div>
          <div className="table-header-cell">Last Updated On</div>
        </div>
        {workflowsData.map((workflow, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{workflow.workflowId}</div>
            <div className="table-cell">{workflow.name}</div>
            <div className="table-cell">{workflow.description}</div>
            <div className="table-cell">{workflow.version}</div>
            <div className="table-cell">{workflow.status}</div>
            <div className="table-cell">{workflow.createdOn}</div>
            <div className="table-cell">{workflow.createdBy}</div>
            <div className="table-cell">{workflow.lastUpdatedOn}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workflows;