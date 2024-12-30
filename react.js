import React, { useState } from 'react';
import './App.css';

const jobs = [
    { title: "Software Engineer", location: "Nairobi", type: "Full-time", url: "https://company1.com/software-engineer" },
    { title: "Data Analyst", location: "Mombasa", type: "Part-time", url: "https://company2.com/data-analyst" },
    { title: "Project Manager", location: "Nairobi", type: "Remote", url: "https://company3.com/project-manager" },
    { title: "Marketing Specialist", location: "Kisumu", type: "Full-time", url: "https://company4.com/marketing-specialist" },
    { title: "UX Designer", location: "Nairobi", type: "Part-time", url: "https://company5.com/ux-designer" },
    { title: "Customer Support", location: "Remote", type: "Remote", url: "https://company6.com/customer-support" },
];

function App() {
    const [filters, setFilters] = useState({ title: "", location: "", type: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredJobs = jobs.filter(job => {
        return (
            (job.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (filters.type === "" || job.type === filters.type)
        );
    });

    return (
        <div className="container">
            <h1>Job Search Filter</h1>
            <div className="filters">
                <input
                    type="text"
                    name="title"
                    placeholder="Search by job title..."
                    value={filters.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Search by location..."
                    value={filters.location}
                    onChange={handleInputChange}
                />
                <select
                    name="type"
                    value={filters.type}
                    onChange={handleInputChange}
                >
                    <option value="">Filter by type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>
            <ul className="job-list">
                {filteredJobs.map((job, index) => (
                    <li key={index} className="job-item">
                        <h3>{job.title}</h3>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Type:</strong> {job.type}</p>
                        <p><a href={job.url} target="_blank" rel="noopener noreferrer">View Job Posting</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
