import React from "react";

export default function JoinUsForm() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-xl font-bold mb-6">
          歡迎加入種子大家庭！誠摯邀請您！
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="text-2xl text-green-600 font-semibold mb-4">
              歡迎加入我們！
            </h3>
            <p className="text-gray-700">
              成為我們的一份子，預備迎接更多祝福和成長！
            </p>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="您的姓名"
                className="w-full p-3 border bg-white border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="您的Line號碼"
                className="w-full p-3 border bg-white border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
              >
                加入我們
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
