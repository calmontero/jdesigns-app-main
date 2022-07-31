import React from "react";
import Table from 'react-bootstrap/Table';
import JobList from "../JobList/JobList";
import "../../App.scss";

function JobTable({ jobList, onEditJob }) {

    return (
        <div className="job-table">
            <h3>Lista de Servicios</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image Link</th>
                    </tr>
                </thead>
                {
                jobList && jobList.map((j) => {
                    return <JobList jobsList={j} onEditJob={onEditJob} />
                })
            }
            </Table>
        </div>
    );
}

export default JobTable;