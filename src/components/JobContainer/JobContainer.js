import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import JobForm from "../JobForm/JobForm";
import JobTable from "../JobTable/JobTable";

function JobContainer() {
    const [job, setJobs] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "/jobs")
        .then((response) => response.json())
        .then((jobsData) => setJobs(jobsData));
    }, []);

    function handleAddJob(addedJob) {
        setJobs((job) => [...job, addedJob]);
    }

    function handleDeleteJob(onDelJob) {
        fetch(BASE_URL+ `/jobs/${onDelJob}`, {
            method: "DELETE",
          });
        const updatedJobs = job.filter((j) => j.id !== onDelJob);
        setJobs(updatedJobs);
    } 

    function handleEditJob(id) {

    }

    return (
        <div className="job-container">
            <JobForm onAddJob={handleAddJob} />
            <JobTable jobList={job} onEditJob={handleEditJob} onDelJob={handleDeleteJob} />
        </div>
    );
}

export default JobContainer;