import React from "react";

const JobPost: React.FC = () => {
  return (
    <div className="p-8 w-full mx-auto">
      <h2 className="text-xl font-bold mb-6 text-left">求人投稿</h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
      >
        <div className="w-1/3">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            求人カテゴリ選択
          </label>
          <select
            id="category"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>カテゴリを選択</option>
            <option>事務</option>
            <option>エンジニア</option>
            <option>営業</option>
            <option>デザイン</option>
            <option>マーケティング</option>
            <option>財務・経理</option>
            <option>人事</option>
            <option>カスタマーサポート</option>
            <option>製造</option>
            <option>医療・介護</option>
          </select>
        </div>

        <div className="w-1/3">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700"
          >
            年収 (万円)
          </label>
          <input
            type="text"
            id="salary"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            求人タイトル
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
          type="submit"
          className="w-1/3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default JobPost;
