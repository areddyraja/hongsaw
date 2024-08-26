import React from 'react';
import Table from 'react-bootstrap/Table';
const modelsData = [
  {
    modelId: '12345',
    version: '1.0',
    name: 'Helmet Model',
    description: 'This is model 1',
    status: 'Active',
    modelPath: '/path/to/model1',
    size: '100MB',
    category: 'Machine Learning',
    modelType: 'Yolo',
    tags: ['tag1', 'tag2'],
    createdBy: 'John Doe',
    createdOn: '2024-08-22',
    lastUpdatedOn: '2024-08-23',
    updatedBy: 'Jane Doe'
  },
  {
    modelId: '67890',
    version: '2.0',
    name: 'Parking Nodel',
    description: 'This is model 2',
    status: 'Inactive',
    modelPath: '/path/to/model2',
    size: '200MB',
    category: 'Deep Learning',
    modelType: 'Dicom',
    tags: ['tag3', 'tag4'],
    createdBy: 'Jane Doe',
    createdOn: '2024-08-21',
    lastUpdatedOn: '2024-08-22',
    updatedBy: 'John Doe'
  }
  // Add more data here
];

function Models() {
  return (
    <div>
      <h1>Models</h1>
      <Table bordered hover >
        <thead>
          <tr>
          <th>Model ID</th>
          <th>Version</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Model Path</th>
          <th>Size</th>
          <th>Category</th>
          <th>Model Type</th>
          <th>Tags</th>
          <th>Created By</th>
          <th>Created On</th>
          <th>Last Updated On</th>
          <th>Updated By</th>
          </tr>
        </thead>
        <tbody>
        {modelsData.map((model, index) => (
          <tr key={index}>
            <td>{model.modelId}</td>
            <td>{model.version}</td>
            <td>{model.name}</td>
            <td>{model.description}</td>
            <td>{model.status}</td>
            <td>{model.modelPath}</td>
            <td>{model.size}</td>
            <td>{model.category}</td>
            <td>{model.modelType}</td>
            <td>{model.tags.join(', ')}</td>
            <td>{model.createdBy}</td>
            <td>{model.createdOn}</td>
            <td>{model.lastUpdatedOn}</td>
            <td>{model.updatedBy}</td>
            </tr>
        ))}
      </tbody>

</Table>
</div>
  );
}

export default Models;