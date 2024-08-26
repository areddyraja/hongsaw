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
      <div className='container'>
        <h1>New Workflow</h1>
      </div>

      <form style={{ textAlign: 'left' }}>
        <div className='container create-form'>
          <div className='row'>
            <div className='col-3'>
              <div>Name</div>
              <input type="text" class="form-control" />
            </div>

            <div className='col-3'>
              <div>Description</div>
              <textarea class="form-control" />
            </div>
            <div className='col-3'>
              <div>Model</div>
              <select class="form-select">
                {modelsData.map((model) => (
                  <option value={model.modelId}>{model.name}</option>
                ))}
              </select>
            </div>

            <div className='col-3'>
              <div>Model Path</div>
              <input type="text" class="form-control" />
            </div>

            <div className='col-3'>
              <div>Model Version</div>
              <input type="text" class="form-control" />
            </div>


            <div className='col-3'>
              <div>Device</div>
              <select class="form-select">
                {devicesData.map((device) => (
                  <option value={device.deviceId}>{device.name}</option>
                ))}
              </select>
            </div>


            <div className='col-3'>
              <div>Business Rules</div>
              <div className='d-flex gap-3'>
                {businessRules.map((rule) => (
                  <div className='d-flex gap-2'>
                    <input type="checkbox" />
                    <span>{rule.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='row'>
                  <hr/>
            </div>

            <div className='row'>
              <div className='d-flex justify-content-end gap-3'>
                <button onClick={handleCancel} type="button" class="btn btn-light" >
                  Cancel
                </button>

                <button type="button" class="btn btn-dark"
                  onClick={handleSave}

                >
                  Save
                </button>
              </div>
            </div>


          </div>
        </div>





      </form>
    </div>
  );
}

export default NewWorkflow;