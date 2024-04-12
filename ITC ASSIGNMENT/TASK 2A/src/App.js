// App.js

import React, { useState } from "react";
import FormPage from "./screens/FormPage";
import TablePage from "./screens/TablePage";


const App = () => {
  const [formData, setFormData] = useState([]);
  
  const handleSubmit = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <div>
      <h1>Form Portal</h1>
      <div>
        <FormPage onSubmit={handleSubmit} />
      </div>
      <div>
        <TablePage data={formData} />
      </div>
    </div>
  );
};

export default App;
