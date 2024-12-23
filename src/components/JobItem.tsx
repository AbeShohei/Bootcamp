import React from "react";

type JobItemProps = {
  title: string;
  category: string;
  salary: string;
};

const JobItem: React.FC<JobItemProps> = ({ title, category, salary }) => {
  return (
    <li className="border p-4 mb-4">
      <h3 className="font-bold">{title}</h3>
      <p>カテゴリ: {category}</p>
      <p>年収: {salary}</p>
    </li>
  );
};

export default JobItem;
