import React from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCardIcon from '@mui/icons-material/AddCard';

function JobList({ jobsList, onEditJob, onDelJob }) {
    const { id, title, image_link, text } = jobsList;

    function handleAddImg(e) {

    }

    function handleEdit(e) {
        onEditJob(id);
    }

    function handleDelete(e) {
        e.preventDefault();
        onDelJob(id);
    }

    return (
        <>
            <tbody>
                <tr key={id}>
                    <td>{title}</td>
                    <td>{text}</td>
                    <td>{image_link}</td>
                    <td>
                        <IconButton aria-label="edit">
                            <EditIcon onClick={handleEdit}/>
                        </IconButton >
                    </td>
                    <td>
                        <IconButton aria-label="add">
                            <AddCardIcon onClick={handleAddImg}/>
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