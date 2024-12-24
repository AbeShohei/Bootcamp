import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar.tsx";
import JobItem from "../components/JobItem.tsx";
import { useJobList } from "../hooks/useJobList.ts";

const JobList: React.FC = () => {
  const { jobs, filterByCategoriesAndSalary } = useJobList();

  const [currentPage, setCurrentPage] = useState(1); // 現在のページ
  const itemsPerPage = 10; // 1ページあたりの求人数

  // ページングされたデータ
  const totalItems = jobs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const handleFilter = (filters: { categories: string[]; salary: string }) => {
    filterByCategoriesAndSalary(filters);
    setCurrentPage(1); // フィルタ適用時にページをリセット
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex min-h-screen">
      <Sidebar onFilter={handleFilter} />
      <main className="w-3/4 p-4 overflow-auto">
        <h2 className="font-bold text-lg mb-4">求人一覧</h2>
        <ul>
          {currentJobs.map((job, index) => (
            <JobItem
              key={index}
              title={job.title}
              category={job.category}
              salary={job.salary}
            />
          ))}
        </ul>
        {/* ページネーション */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          {/* 前へリンク */}
          <span
            className={`px-3 py-1 cursor-pointer ${
              currentPage === 1
                ? "text-gray-400 cursor-default"
                : "text-black hover:text-blue-500"
            }`}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          >
            ◀
          </span>

          {/* ページ番号リンク */}
          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={i + 1}
              className={`px-3 py-1 cursor-pointer ${
                currentPage === i + 1
                  ? "text-blue-500 font-bold"
                  : "text-black hover:text-blue-500"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </span>
          ))}

          {/* 次へリンク */}
          <span
            className={`px-3 py-1 cursor-pointer ${
              currentPage === totalPages
                ? "text-gray-400 cursor-default"
                : "text-black hover:text-blue-500"
            }`}
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
          >
            ▶
          </span>
        </div>
      </main>
    </div>
  );
};

export default JobList;
