import React from "react";

export default function Schedule() {
  return (
    <div className=" bg-white container mx-auto py-12">
      <h2 className="text-center text-2xl font-bold mb-6">
        種子教會近期行事曆
      </h2>
      <div className="relative bg-white shadow-lg rounded-lg p-4 hidden lg:block">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold">Jul 2022</div>
          <button className="border border-gray-300 p-2 rounded">+</button>
        </div>
        <table className="w-full text-center border-separate border-spacing-2">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 bg-gray-100 rounded-lg">26</td>
              <td className="p-2 bg-gray-100 rounded-lg">27</td>
              <td className="p-2 bg-gray-100 rounded-lg">28</td>
              <td className="p-2 bg-gray-100 rounded-lg">29</td>
              <td className="p-2 bg-gray-100 rounded-lg">30</td>
              <td className="p-2 bg-green-100 rounded-lg">1</td>
              <td className="p-2 bg-orange-100 rounded-lg">2</td>
            </tr>
            <tr>
              <td className="p-2 bg-blue-100 rounded-lg">
                3<br />
                主日敬拜
              </td>
              <td className="p-2 bg-gray-100 rounded-lg">4</td>
              <td className="p-2 bg-orange-100 rounded-lg">
                5<br />
                感恩之夜
              </td>
              <td className="p-2 bg-gray-100 rounded-lg">6</td>
              <td className="p-2 bg-gray-100 rounded-lg">7</td>
              <td className="p-2 bg-gray-100 rounded-lg">8</td>
              <td className="p-2 bg-orange-100 rounded-lg">
                9<br />
                讀經聚會
              </td>
            </tr>
          </tbody>
        </table>
        <div className="absolute right-[-20px] top-[30%] bg-white rounded-full shadow-md p-2">
          <img
            src="/path-to-icon.png"
            alt="icon"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
