import React from "react";
import Table from 'react-bootstrap/Table';

function JobList() {
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
            </Table>
        </div>
    );
}

export default JobList;