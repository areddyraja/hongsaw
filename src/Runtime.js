import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Toast,
  ToastContainer,
  ListGroup,
} from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Runtimes({ userId }) {
  const [runtimesData, setRuntimesData] = useState([]);
  const [devices, setDevices] = useState([]);
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const [logData, setLogData] = useState({ runtimeId: null, logs: [] });
  const [formData, setFormData] = useState({
    device_id: "",
    workflow_id: "",
    status: "Not Running",
  });
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    fetchRuntimes();
    fetchDevices();
    fetchWorkflows();
  }, []);

  const fetchRuntimes = async () => {
    try {
      const response = await fetch("/get_all_model_runtimes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRuntimesData(data);
      setLoading(false);
    } catch (error) {
      setError(error.toString());
      setLoading(false);
    }
  };

  const fetchDevices = async () => {
    try {
      const response = await fetch(`/user_devices/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch devices");
      }
      const data = await response.json();
      setDevices(
        Object.entries(data.devices).map(([id, device]) => ({
          id,
          ...device,
        }))
      );
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  };

  const fetchWorkflows = async () => {
    try {
      const response = await fetch("/get_all_workflows");
      if (!response.ok) {
        throw new Error("Failed to fetch workflows");
      }
      const data = await response.json();
      setWorkflows(data);
    } catch (error) {
      console.error("Error fetching workflows:", error);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataEncoded = new URLSearchParams(formData);

    try {
      const response = await fetch("/create_model_runtime", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded,
      });

      if (!response.ok) {
        throw new Error("Failed to create runtime");
      }

      handleCloseModal();
      await fetchRuntimes();
      addToast("Runtime created successfully", "success");
    } catch (error) {
      console.error("Error creating runtime:", error);
      addToast("Failed to create runtime. Please try again.", "danger");
    }
  };

  const handleStartRuntime = async (runtimeId) => {
    try {
      const response = await fetch(`/start_runtime/${runtimeId}`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to start runtime");
      addToast("Runtime started successfully", "success");
      await fetchRuntimes();
    } catch (error) {
      console.error("Error starting runtime:", error);
      addToast("Failed to start runtime. Please try again.", "danger");
    }
  };

  const handleStopRuntime = async (runtimeId) => {
    try {
      const response = await fetch(`/stop_runtime/${runtimeId}`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to stop runtime");
      addToast("Runtime stopped successfully", "success");
      await fetchRuntimes();
    } catch (error) {
      console.error("Error stopping runtime:", error);
      addToast("Failed to stop runtime. Please try again.", "danger");
    }
  };

  const handleShowLogs = async (runtimeId) => {
    try {
      const response = await fetch(`/get_runtime_logs/${runtimeId}`);
      if (!response.ok) throw new Error("Failed to fetch logs");
      const data = await response.json();
      setLogData(data);
      setShowLogModal(true);
    } catch (error) {
      console.error("Error fetching logs:", error);
      addToast("Failed to fetch logs. Please try again.", "danger");
    }
  };

  const addToast = (message, variant) => {
    const newToast = {
      id: Date.now(),
      message,
      variant,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Runtimes</h1>
        <Button variant="primary" onClick={handleShowModal}>
          Create Runtime
        </Button>
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Device ID (Name)</th>
            <th>Workflow ID (Name)</th>
            <th>Start Time</th>
            <th>Last Stop Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {runtimesData.map((runtime) => (
            <tr key={runtime.id}>
              <td>{runtime.id}</td>
              <td>{runtime.device_id} ({devices.find(d => d.id === runtime.device_id)?.device_ip || 'Unknown'})</td>
              <td>{runtime.workflow_id} ({workflows.find(w => w.id === runtime.workflow_id)?.name || 'Unknown'})</td>
              <td>{new Date(runtime.start_time).toLocaleString()}</td>
              <td>{runtime.last_stop_time ? new Date(runtime.last_stop_time).toLocaleString() : 'N/A'}</td>
              <td>{runtime.status}</td>
              <td>
                <Button variant="success" size="sm" onClick={() => handleStartRuntime(runtime.id)} className="me-1">Start</Button>
                <Button variant="danger" size="sm" onClick={() => handleStopRuntime(runtime.id)} className="me-1">Stop</Button>
                <Button variant="info" size="sm" onClick={() => handleShowLogs(runtime.id)}>Show Logs</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Runtime</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDeviceId">
              <Form.Label>Device</Form.Label>
              <Form.Control
                as="select"
                name="device_id"
                value={formData.device_id}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a device</option>
                {devices.map((device) => (
                  <option key={device.id} value={device.id}>
                    {device.device_ip} - {device.location}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formWorkflowId">
              <Form.Label>Workflow</Form.Label>
              <Form.Control
                as="select"
                name="workflow_id"
                value={formData.workflow_id}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a workflow</option>
                {workflows.map((workflow) => (
                  <option key={workflow.id} value={workflow.id}>
                    {workflow.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Create Runtime
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showLogModal} onHide={() => setShowLogModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Logs for Runtime {logData.runtime_id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            <ListGroup variant="flush">
              {logData.logs.map((log, index) => (
                <ListGroup.Item key={index} className="small">
                  <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
                    {log}
                  </pre>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        className="p-3"
        position="bottom-end"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <TransitionGroup>
          {toasts.map((toast) => (
            <CSSTransition
              key={toast.id}
              timeout={300}
              classNames="toast-animation"
            >
              <Toast
                onClose={() => removeToast(toast.id)}
                show={true}
                delay={3000}
                autohide
                bg={toast.variant}
                className="mb-3"
              >
                <Toast.Body>{toast.message}</Toast.Body>
              </Toast>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToastContainer>

      <style jsx>{`
        .toast-animation-enter {
          opacity: 0;
          transform: translateY(20px);
        }
        .toast-animation-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 300ms, transform 300ms;
        }
        .toast-animation-exit {
          opacity: 1;
        }
        .toast-animation-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </div>
  );
}

export default Runtimes;