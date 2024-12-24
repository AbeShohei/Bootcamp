import { useState } from "react";
import { jobsData } from "../data/jobsData.ts";

export const useJobList = () => {
  const [jobs, setJobs] = useState(jobsData);

  const filterByCategoriesAndSalary = ({
    categories,
    salary,
  }: {
    categories: string[];
    salary: string;
  }) => {
    let filteredJobs = jobsData;

    if (categories.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        categories.includes(job.category)
      );
    }

    if (salary) {
      filteredJobs = filteredJobs.filter(
        (job) => job.salary >= parseInt(salary)
      );
    }

    setJobs(filteredJobs);
  };

  return { jobs, filterByCategoriesAndSalary };
};
