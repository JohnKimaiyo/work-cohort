import React from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function UKJobs() {
    const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch job data
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=91ce145a&app_key=596b606141f64b36b262e6b68d4b4424"
        );
        setJobs(response.data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="App">
      <h1>Job Listings</h1>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
                Apply Here
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default UKJobs