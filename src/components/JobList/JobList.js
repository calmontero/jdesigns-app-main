import React from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function JobList({ jobsList, onEditJob }) {
    const { id, title, image_link } = jobsList;

    function handleEdit(e) {
        onEditJob(id);
    }

    function handleDelete(e) {
        e.preventDefault();
        //console.log(e);
    }

    return (
        <>
            <tbody>
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{image_link}</td>
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
            </tbody>
        </>
    );
}

export default JobList;