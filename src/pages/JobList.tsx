import React from "react";
import Sidebar from "../components/Sidebar.tsx"; // サイドバーコンポーネント
import JobItem from "../components/JobItem.tsx"; // 求人項目コンポーネント
import { useJobList } from "../hooks/useJobList.ts"; // カスタムフック


const JobList: React.FC = () => {
  const { jobs, filterJobs } = useJobList();

  return (
    <div className="flex">
      <Sidebar onFilter={filterJobs} />
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
