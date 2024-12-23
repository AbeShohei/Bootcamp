// src/hooks/useJobList.ts
import { useState } from "react";
import { jobsData } from "../data/jobsData.ts";

export const useJobList = () => {
  const [jobs, setJobs] = useState(jobsData);

  // フィルタリング関数（例: カテゴリでフィルタ）
  const filterByCategory = (category: string) => {
    if (category === "全て") {
      setJobs(jobsData);
    } else {
      const filteredJobs = jobsData.filter((job) => job.category === category);
      setJobs(filteredJobs);
    }
  };

  return { jobs, filterByCategory };
};
