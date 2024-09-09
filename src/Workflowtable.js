
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WorkflowTable() {
  const [workflows, setWorkflows] = useState([]);
  const [showNewWorkflow, setShowNewWorkflow] = useState(false);

  useEffect(() => {
    axios.get('https://dummy-url.com/workflows')
      .then(response => {
        setWorkflows(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleNewWorkflow = () => {
    setShowNewWorkflow(true);
  };

  if (showNewWorkflow) {
    return <NewWorkflow />;
  }

  return (
    <div>
      <h1>Workflows</h1>
      <button onClick={handleNewWorkflow}>New Workflow</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map(workflow => (
            <tr key={workflow.id}>
              <td>{workflow.name}</td>
              <td>{workflow.id}</td>
              <td>{workflow.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkflowTable;