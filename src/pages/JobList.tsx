import React from "react";
import Sidebar from "../components/Sidebar.tsx";
import JobItem from "../components/JobItem.tsx";
import { useJobList } from "../hooks/useJobList.ts";

const JobList: React.FC = () => {
  const { jobs, filterByCategoriesAndSalary } = useJobList();

  const handleFilter = (filters: { categories: string[]; salary: string }) => {
    filterByCategoriesAndSalary(filters);
  };

  return (
    <div className="flex">
      <Sidebar onFilter={handleFilter} />
      <main className="w-3/4 p-4">
        <h2 className="font-bold text-lg mb-4">求人一覧</h2>
        <ul>
          {jobs.map((job, index) => (
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
