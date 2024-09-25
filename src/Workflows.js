import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WorkflowDashboard = () => {
  const [workflows, setWorkflows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newWorkflow, setNewWorkflow] = useState({
    name: '',
    description: '',
    version: '',
  });

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const fetchWorkflows = async () => {
    try {
      const response = await fetch('/get_all_workflows');
      if (response.ok) {
        const data = await response.json();
        setWorkflows(data);
      } else {
        console.error('Failed to fetch workflows');
      }
    } catch (error) {
      console.error('Error fetching workflows:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWorkflow({ ...newWorkflow, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newWorkflow.name);
    formData.append('description', newWorkflow.description);
    formData.append('version', newWorkflow.version);
    formData.append('status', 'false'); // Set status to inactive (false) by default

    try {
      const response = await fetch('/create_workflow', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setShowModal(false);
        setNewWorkflow({ name: '', description: '', version: '' });
        fetchWorkflows(); // Refresh the workflow list
      } else {
        console.error('Failed to create workflow');
      }
    } catch (error) {
      console.error('Error creating workflow:', error);
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row className="mb-4 align-items-center">
        <Col>
          <h1 className="mb-0">Workflow Management</h1>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            New Workflow
          </Button>
        </Col>
      </Row>

      <Table bordered hover responsive className="workflow-table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Version</th>
            <th>Status</th>
            <th>Created On</th>
            <th>Last Updated On</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map((workflow) => (
            <tr key={workflow.id}>
              <td>{workflow.name}</td>
              <td>{workflow.description}</td>
              <td>{workflow.version}</td>
              <td>
                <span className={`status-badge ${workflow.status ? 'active' : 'inactive'}`}>
                  {workflow.status ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td>{new Date(workflow.created_on).toLocaleString()}</td>
              <td>{new Date(workflow.last_updated_on).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Workflow</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newWorkflow.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newWorkflow.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Version</Form.Label>
              <Form.Control
                type="text"
                name="version"
                value={newWorkflow.version}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Workflow
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .workflow-table {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .workflow-table th {
          background-color: #f8f9fa;
          font-weight: 600;
        }
        .status-badge {
          padding: 0.25em 0.6em;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-weight: 500;
        }
        .status-badge.active {
          background-color: #d4edda;
          color: #155724;
        }
        .status-badge.inactive {
          background-color: #f8d7da;
          color: #721c24;
        }
      `}</style>
    </Container>
  );
};

export default WorkflowDashboard;