import React, { useState } from "react";

const jobs = [
  { title: "Software Engineer", location: "Nairobi", type: "Full-time", url: "https://company1.com/software-engineer" },
  { title: "Data Analyst", location: "Mombasa", type: "Part-time", url: "https://company2.com/data-analyst" },
  { title: "Project Manager", location: "Nairobi", type: "Remote", url: "https://company3.com/project-manager" },
  { title: "Marketing Specialist", location: "Kisumu", type: "Full-time", url: "https://company4.com/marketing-specialist" },
  { title: "UX Designer", location: "Nairobi", type: "Part-time", url: "https://company5.com/ux-designer" },
  { title: "Customer Support", location: "Remote", type: "Remote", url: "https://company6.com/customer-support" },
];

function DataEngineeringJobs() {
  const [filters, setFilters] = useState({ title: "", location: "", type: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.type === "" || job.type === filters.type)
    );
  });

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Job Search Filter"),
    React.createElement(
      "div",
      { className: "filters" },
      React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Search by job title...",
        value: filters.title,
        onChange: handleInputChange,
      }),
      React.createElement("input", {
        type: "text",
        name: "location",
        placeholder: "Search by location...",
        value: filters.location,
        onChange: handleInputChange,
      }),
      React.createElement(
        "select",
        {
          name: "type",
          value: filters.type,
          onChange: handleInputChange,
        },
        React.createElement("option", { value: "" }, "Filter by type"),
        React.createElement("option", { value: "Full-time" }, "Full-time"),
        React.createElement("option", { value: "Part-time" }, "Part-time"),
        React.createElement("option", { value: "Remote" }, "Remote")
      )
    ),
    React.createElement(
      "ul",
      { className: "job-list" },
      filteredJobs.map((job, index) =>
        React.createElement(
          "li",
          { key: index, className: "job-item" },
          React.createElement("h3", null, job.title),
          React.createElement("p", null, React.createElement("strong", null, "Location: "), job.location),
          React.createElement("p", null, React.createElement("strong", null, "Type: "), job.type),
          React.createElement(
            "p",
            null,
            React.createElement(
              "a",
              { href: job.url, target: "_blank", rel: "noopener noreferrer" },
              "View Job Posting"
            )
          )
        )
      )
    )
  );
}

export default DataEngineeringJobs;
