import React from "react";
import JobForm from "../JobForm/JobForm";
import JobList from "../JobList/JobList";

function JobContainer() {
    return (
        <div className="job-container">
            <JobForm />
            <JobList />
        </div>
    );
}

export default JobContainer;