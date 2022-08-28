import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import JobForm from "../JobForm/JobForm";
import JobTable from "../JobTable/JobTable";

function JobContainer() {
    const [job, setJobs] = useState([]);
    const [jobUpdate, setJobUpdate] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);

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

    function handleEditJob(onEditJob) {
        setIsEditMode(true);
        const updatedJobs = job.filter((j) => j.id === onEditJob);
        setJobUpdate(updatedJobs);
    }

    return (
        <div className="job-container">
            <JobForm onEditMode={isEditMode} onAddJob={handleAddJob} jobUpdate={jobUpdate} />
            <JobTable jobList={job} onEditJob={handleEditJob} onDelJob={handleDeleteJob} />
        </div>
    );
}

export default JobContainer;