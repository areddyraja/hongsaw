import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function Models() {
  const [modelsData, setModelsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch models data from the API
    fetch("/models") // Assuming the FastAPI is running on the same host
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setModelsData(
          Object.keys(data.models_info).map((modelName) => ({
            modelId: modelName,
            layers: data.models_info[modelName].layers,
            parameters: data.models_info[modelName].parameters,
            gradients: data.models_info[modelName].gradients,
            gflops: data.models_info[modelName].gflops,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Models</h1>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Model ID</th>
            <th>Layers</th>
            <th>Parameters</th>
            <th>Gradients</th>
            <th>GFLOPS</th>
          </tr>
        </thead>
        <tbody>
          {modelsData.map((model, index) => (
            <tr key={index}>
              <td>{model.modelId}</td>
              <td>{model.layers}</td>
              <td>{model.parameters}</td>
              <td>{model.gradients}</td>
              <td>{model.gflops}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Models;
