import React, { useState } from "react";

type SidebarProps = {
  onFilter: (filters: { categories: string[]; salary: string }) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSalary, setSelectedSalary] = useState("");

  const categories = [
    "事務",
    "エンジニア",
    "営業",
    "デザイン",
    "マーケティング",
    "財務・経理",
    "人事",
    "カスタマーサポート",
    "製造",
    "医療・介護",
  ];

  const handleCheckboxChange = (category: string) => {
    let updatedCategories = [...selectedCategories];
    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter((item) => item !== category);
    } else {
      updatedCategories.push(category);
    }
    setSelectedCategories(updatedCategories);
    onFilter({ categories: updatedCategories, salary: selectedSalary });
  };

  const handleSalaryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const salary = event.target.value;
    setSelectedSalary(salary);
    onFilter({ categories: selectedCategories, salary });
  };

  return (
    <aside className="w-1/4 min-h-screen bg-gray-200 p-4">
      <h2 className="font-bold text-xl mb-4">求人カテゴリ</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(category)}
                checked={selectedCategories.includes(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
      <h2 className="font-bold text-xl my-4">年収</h2>
      <select
        className="w-full border-gray-300 p-2"
        onChange={handleSalaryChange}
        value={selectedSalary}
      >
        <option value="">すべての年収</option>
        <option value="300">300万円以上</option>
        <option value="400">400万円以上</option>
        <option value="500">500万円以上</option>
        <option value="600">600万円以上</option>
        <option value="700">700万円以上</option>
        <option value="800">800万円以上</option>
      </select>
    </aside>
  );
};

export default Sidebar;
