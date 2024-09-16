import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Image, Toast } from "react-bootstrap";

function Devices({ userId }) {
  const [devicesData, setDevicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showStreamModal, setShowStreamModal] = useState(false);
  const [formData, setFormData] = useState({
    device_ip: "",
    location: "",
    user_id: userId,
  });
  const [streamingDevice, setStreamingDevice] = useState({
    device_ip: "",
    location: "",
    id: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    fetchDevices();
  }, [userId]);

  const fetchDevices = async () => {
    try {
      const response = await fetch(`/user_devices/${userId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDevicesData(
        Object.entries(data.devices).map(([id, device]) => ({
          id,
          ...device,
        }))
      );
      setLoading(false);
    } catch (error) {
      setError(error.toString());
      setLoading(false);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowStreamModal = async (id, ip, location) => {
    try {
      const formData = new FormData();
      formData.append('device_id', id);

      const response = await fetch('/start_stream', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to start stream');
      }

      setStreamingDevice({ device_ip: ip, location, id });
      setShowStreamModal(true);
    } catch (error) {
      console.error('Error starting stream:', error);
      setToastMessage('Failed to start stream. Please try again.');
      setShowToast(true);
    }
  };

  const handleCloseShowStreamModal = () => setShowStreamModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataEncoded = new URLSearchParams(formData);

    try {
      const response = await fetch("/create_device", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded,
      });

      if (!response.ok) {
        throw new Error("Failed to create device");
      }

      handleCloseModal();
      await fetchDevices();
    } catch (error) {
      console.error("Error creating device:", error);
      setToastMessage('Failed to create device. Please try again.');
      setShowToast(true);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Devices</h1>
        <Button variant="primary" onClick={handleShowModal}>
          Create Device
        </Button>
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Device IP</th>
            <th>Location</th>
            <th>Created On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devicesData.map((device) => (
            <tr key={device.id}>
              <td>{device.id}</td>
              <td>{device.device_ip}</td>
              <td>{device.location}</td>
              <td>{new Date(device.created_on).toLocaleString()}</td>
              <td>
                <Button
                  onClick={() =>
                    handleShowStreamModal(
                      device.id,
                      device.device_ip,
                      device.location
                    )
                  }
                >
                  View Stream
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Device</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDeviceIP">
              <Form.Label>Device IP</Form.Label>
              <Form.Control
                type="text"
                name="device_ip"
                value={formData.device_ip}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formUserId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="number"
                name="user_id"
                value={formData.user_id}
                onChange={handleInputChange}
                required
                disabled
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Create Device
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal 
        show={showStreamModal} 
        onHide={handleCloseShowStreamModal}
        size="lg" // Increase the size of the modal
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Video Stream For Device: {streamingDevice.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0"> {/* Remove padding from Modal.Body */}
          <div style={{
            width: '100%',
            height: '0',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            position: 'relative',
            overflow: 'hidden',
          }}>
            <Image 
              src="/video_feed" 
              alt="Camera Feed"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </Modal.Body>
      </Modal>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        bg='success'
        delay={3000}
        autohide
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </div>
  );
}

export default Devices;