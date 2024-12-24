import React from "react";

type JobItemProps = {
  title: string;
  category: string;
  salary: number; // 型を数値に変更
};

const JobItem: React.FC<JobItemProps> = ({ title, category, salary }) => {
  return (
    <li className="rounded border p-4 mb-4">
      <h3 className="font-bold">{title}</h3>
      <p>カテゴリ: {category}</p>
      <p>年収: {salary}万円</p> {/* 数値に"万円"を付けて表示 */}
    </li>
  );
};

export default JobItem;
