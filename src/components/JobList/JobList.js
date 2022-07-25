import React, { useEffect, useState }  from "react";
import Table from 'react-bootstrap/Table';
import { BASE_URL } from "../../constraints";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "/jobs")
        .then((response) => response.json())
        .then((jobsData) => setJobs(jobsData));
    }, []);

    function handleEdit() {
        //e.preventDefault();
        console.log("id");
        alert("Edit");
    }

    function handleDelete(e) {
        e.preventDefault();
        console.log(e);
        alert("Delete");
    }

    return (
        <div>
            <h3>Lista de Servicios</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs && jobs.length > 0 && jobs.map((j, index) => (
                            <tr key={j.id}>
                                <td>{index}</td>
                                <td>{j.title}</td>
                                <td>{j.image_link}</td>
                                <td>
                                    <IconButton aria-label="edit">
                                        <EditIcon onClick={handleEdit}/>
                                    </IconButton >
                                </td>
                                <td>
                                    <IconButton aria-label="delete">
                                        <DeleteForeverIcon onClick={handleDelete}/>
                                    </IconButton >
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default JobList;