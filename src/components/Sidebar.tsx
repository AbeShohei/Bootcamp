import React, { useState } from "react";

type SidebarProps = {
  onFilter: (selectedCategories: string[]) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
    onFilter(updatedCategories); // 親コンポーネントに選択したカテゴリを渡す
  };

  return (
    <aside className="w-1/4 bg-gray-200 p-4">
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
    </aside>
  );
};

export default Sidebar;
