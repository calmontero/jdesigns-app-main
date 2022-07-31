import React, { useState } from "react";
import { BASE_URL } from "../../constraints";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import "../../App.scss";

const initialState = {
  title: '',
  image_link: ''
};

function Jobs({ onAddJob }) {
  const [job, setJobs] = useState(initialState);
  const [value, setValue] = useState("https://www.freeiconspng.com/uploads/no-image-icon-15.png");

  function handleSubmit(e) {
    e.preventDefault();
  
    fetch(BASE_URL + `/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job)
      })
    .then((r) => r.json())
    .then((newJob) => {
        setJobs(initialState);
        onAddJob(newJob);
        setValue("https://www.freeiconspng.com/uploads/no-image-icon-15.png");
    }); 
  } 

  const setField = (field, value) => {
    setJobs({
      ...job,
      [field]: value
    })
    if (field === "image_link") {
      setValue(value);
    }
  }

  return (
    <div className="form-container">  
      <Form className="form-inline" onSubmit={handleSubmit}  >
          <Form.Group className="mb-3" >
          <Form.Label>Título</Form.Label>
          <Form.Control required type="text" placeholder="Ingrese nombre del Servicio" value={job.title} onChange={e => setField('title', e.target.value)}/>
          </Form.Group>
  
          <Form.Group className="mb-3" >
          <Form.Label>Link de Imagen</Form.Label>
          <Form.Control required type="text" placeholder="Ingrese link de Imagen" value={job.image_link} onChange={e => setField('image_link', e.target.value)}  />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
      <Image className="img"
          src={value}
          width="300"
          rounded
      />
    </div>
  );
}

export default Jobs;