import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import "./JobForm.css";

function Jobs() {
    const [value, setValue] = useState();
    
    function handleImg(e) {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
      <div className="form-container">  
        <Form className="form-inline" >
            <Form.Group className="mb-3" >
            <Form.Label>Titulo</Form.Label>
            <Form.Control required type="text" placeholder="Ingrese nombre del Trabajo" />
            </Form.Group>
    
            <Form.Group className="mb-3" >
            <Form.Label>Link de Imagen</Form.Label>
            <Form.Control required type="text" placeholder="Ingrese link de Imagen" onChange={handleImg}  />
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