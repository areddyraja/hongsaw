// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const workflowsData = [...]; // same as before
// const modelsData = [
//   { modelId: '1', name: 'Yolo' },
//   { modelId: '2', name: 'Dicom' }
// ];
// const devicesData = [
//   { deviceId: '1', name: 'Device 1' },
//   { deviceId: '2', name: 'Device 2' }
// ];
// const businessRules = [
//   { id: '1', name: 'Rule 1' },
//   { id: '2', name: 'Rule 2' },
//   { id: '3', name: 'Rule 3' }
// ];

// function Workflows() {
//   const history = useHistory();

//   const handleNewWorkflow = () => {
//     history.push('/new-workflow');
//   };

//   return (
//     <div>
//       <h1>Workflows</h1>
//       <button
//         style={{
//           backgroundColor: '#4CAF50',
//           color: '#fff',
//           padding: '10px 20px',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer'
//         }}
//         onClick={handleNewWorkflow}
//       >
//         New Workflow
//       </button>
//       <div className="table">
//         {/* same as before */}
//       </div>
//     </div>
//   );
// }

// function NewWorkflow() {
//   return (
//     <div>
//       <h1>New Workflow</h1>
//       <form>
//         <label>
//           Name:
//           <input type="text" />
//         </label>
//         <label>
//           Description:
//           <textarea />
//         </label>
//         <label>
//           Model:
//           <select>
//             {modelsData.map((model) => (
//               <option value={model.modelId}>{model.name}</option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Model Path:
//           <input type="text" />
//         </label>
//         <label>
//           Model Version:
//           <input type="text" />
//         </label>
//         <label>
//           Device:
//           <select>
//             {devicesData.map((device) => (
//               <option value={device.deviceId}>{device.name}</option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Business Rules:
//           {businessRules.map((rule) => (
//             <div>
//               <input type="checkbox" />
//               <span>{rule.name}</span>
//             </div>
//           ))}
//         </label>
//         <button
//           style={{
//             backgroundColor: '#4CAF50',
//             color: '#fff',
//             padding: '10px 20px',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export { Workflows, NewWorkflow };