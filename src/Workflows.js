import React from 'react';
import Table from 'react-bootstrap/Table';
import  { useState, useEffect } from 'react';
import NewWorkflow from './NewWorkflow';


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

  const [workflows, setWorkflows] = useState([]);
  const [showNewWorkflow, setShowNewWorkflow] = useState(false);

  const handleNewWorkflow = () => {
    setShowNewWorkflow(true);
  };

  if (showNewWorkflow) {
    return <NewWorkflow />;
  }

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between mb-3 head-set'>
      <h1>Workflows</h1>
      <button onClick={handleNewWorkflow} type="button" class="btn btn-dark">New Workflow</button>

      </div>


      <Table bordered hover >
        <thead>
          <tr>
          <th>Workflow ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Version</th>
          <th>Status</th>
          <th>Created On</th>
          <th>Created By</th>
          <th>Last Updated On</th>
          </tr>
        </thead>
        <tbody>
        {workflowsData.map((workflow, index) => (
           <tr key={index}>
            <td>{workflow.workflowId}</td>
            <td>{workflow.name}</td>
            <td>{workflow.description}</td>
            <td>{workflow.version}</td>
            <td>{workflow.status}</td>
            <td>{workflow.createdOn}</td>
            <td>{workflow.createdBy}</td>
            <td>{workflow.lastUpdatedOn}</td>
          </tr>
        ))}
     </tbody>

</Table>
</div>
  );
}

export default Workflows;