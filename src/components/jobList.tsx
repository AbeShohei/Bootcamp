import React, { useState } from "react";
import Sidebar from "../components/Sidebar.tsx";
import JobItem from "../components/JobItem.tsx";
import { jobsData } from "../data/jobsData.ts"; // データをインポート

const JobList: React.FC = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleFilter = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0) {
      setFilteredJobs(jobsData); // すべてのカテゴリを表示
    } else {
      setFilteredJobs(
        jobsData.filter((job) => selectedCategories.includes(job.category))
      );
    }
  };

  return (
    <div className="flex">
      <Sidebar onFilter={handleFilter} />
      <main className="w-3/4 p-4">
        <h2 className="font-bold text-lg mb-4">求人一覧</h2>
        <ul>
          {filteredJobs.map((job, index) => (
            <JobItem
              key={index}
              title={job.title}
              category={job.category}
              salary={job.salary}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default JobList;
