import React from 'react';
import { useHistory } from 'react-router-dom';

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



function NewWorkflow() {

    const handleSave = () => {
       alert("saved");
      };

    // const handleSave = () => {
    //     axios.post('https://dummy-url.com/workflows', {
    //       name,
    //       description
    //     })
    //       .then(response => {
    //         console.log(response.data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   };
    
      const handleCancel = () => {
        alert("Cancelled");
    };

      

  return (
    <div>
      <h1>New Workflow</h1>
      <form style={{ textAlign: 'left' }}>

        <label>
          Name:
          <input type="text" />
        </label>
        <br />

        <label>
          Description:
          <textarea />
        </label>
        <br />

        <label>
          Model:
          <select>
            {modelsData.map((model) => (
              <option value={model.modelId}>{model.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Model Path:
          <input type="text" />
        </label>
        <br />
        <label>
          Model Version:
          <input type="text" />
        </label>
        <br />
        <label>
          Device:
          <select>
            {devicesData.map((device) => (
              <option value={device.deviceId}>{device.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Business Rules:
          {businessRules.map((rule) => (
            <div>
              <input type="checkbox" />
              <span>{rule.name}</span>
            </div>
          ))}
        </label>
        <br />

        <button onClick={handleCancel} style={{ marginLeft: '10px' }}>
          Cancel
        </button>

        <button
            onClick={handleSave}
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Save
        </button>
       
        
      </form>
    </div>
  );
}

export default NewWorkflow;