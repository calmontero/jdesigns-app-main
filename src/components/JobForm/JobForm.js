import React, { useState } from "react";
import { BASE_URL } from "../../constraints";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import "../../App.scss";

const initialState = {
  title: '',
  image_link: '',
  text: ''
};

function forms({ onEditMode, onAddform, formUpdate }) {
  let id = 0;
  const [data, setData] = useState(initialState);
  /*const [data, setData] = useState({
    title: '',
    image_link: '',
    text: ''
  });*/
  const [value, setValue] = useState("https://www.freeiconspng.com/uploads/no-image-icon-15.png");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(BASE_URL + `/forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          image_link: data.image_link,
          text: data.text,
        })
      })
    .then((r) => r.json())
    .then((newform) => {
        setData("");
        onAddform(newform);
        setValue("https://www.freeiconspng.com/uploads/no-image-icon-15.png");
    }); 
  }

  function handleUpdate(e) {
    e.preventDefault();
    //console.log(form);
    fetch(BASE_URL + `/forms/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        image_link: data.image_link,
        text: data.text,
      }),
      })
      .then((r) => {
          if (r.ok) {
              //setforms(initialState);
              onEditMode = "false";
          } 
        })
  }

  function handleReset() {
    onEditMode = "false";
    id = 0;
    setData("");
  }

  const setField = (field, value) => {
    setData({
      ...data,
      [field]: value
    })
    if (field === "image_link") {
      setValue(value);
    }
  }

  return (
    <div className="form-container">  
      <Form className="form-inline" onSubmit={!onEditMode ? handleSubmit : handleUpdate}  >
          <Form.Group className="mb-3" >
          <Form.Label>Título</Form.Label>
          <Form.Control required type="text" placeholder="Ingrese nombre del Servicio" value={data.title} onChange={e => setField('title', e.target.value)}/>
          </Form.Group>
  
          <Form.Group className="mb-3" >
          <Form.Label>Descripción</Form.Label>
          <Form.Control required type="text" placeholder="Ingrese una descripción" value={data.text} onChange={e => setField('text', e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>Link de Imagen</Form.Label>
          <Form.Control required type="text" placeholder="Ingrese link de Imagen" value={data.image_link} onChange={e => setField('image_link', e.target.value)}  />
          </Form.Group>

          <Button variant="primary" type="submit">
            {!onEditMode ? "Submit" : "Update"}
          </Button>
          <Button variant="primary" type="reset" onClick={handleReset}>
            Reset
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

export default forms;