import React from 'react';

const modelsData = [
  {
    modelId: '12345',
    version: '1.0',
    name: 'Model 1',
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
    name: 'Model 2',
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
      <div className="table">
        <div className="table-header">
          <div className="table-header-cell">Model ID</div>
          <div className="table-header-cell">Version</div>
          <div className="table-header-cell">Name</div>
          <div className="table-header-cell">Description</div>
          <div className="table-header-cell">Status</div>
          <div className="table-header-cell">Model Path</div>
          <div className="table-header-cell">Size</div>
          <div className="table-header-cell">Category</div>
          <div className="table-header-cell">Model Type</div>
          <div className="table-header-cell">Tags</div>
          <div className="table-header-cell">Created By</div>
          <div className="table-header-cell">Created On</div>
          <div className="table-header-cell">Last Updated On</div>
          <div className="table-header-cell">Updated By</div>
        </div>
        {modelsData.map((model, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{model.modelId}</div>
            <div className="table-cell">{model.version}</div>
            <div className="table-cell">{model.name}</div>
            <div className="table-cell">{model.description}</div>
            <div className="table-cell">{model.status}</div>
            <div className="table-cell">{model.modelPath}</div>
            <div className="table-cell">{model.size}</div>
            <div className="table-cell">{model.category}</div>
            <div className="table-cell">{model.modelType}</div>
            <div className="table-cell">{model.tags.join(', ')}</div>
            <div className="table-cell">{model.createdBy}</div>
            <div className="table-cell">{model.createdOn}</div>
            <div className="table-cell">{model.lastUpdatedOn}</div>
            <div className="table-cell">{model.updatedBy}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Models;