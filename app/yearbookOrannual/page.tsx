"use client";
import { useState } from "react";

export default function YearbookOrannualPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleTooltip = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const tooltips = [
    { text: "學生數: 33", tip: "33歲，2021年" },
    { text: "班級人數: 5、12、18、23", tip: "" },
    { text: "5 12", tip: "委任第五職等／簡任第十二職等" },
    { text: "12 18", tip: "臺北市第12屆市長／臺北市議會第18屆議員選舉選舉公報" },
    { text: "18 23", tip: "第18屆立法委員選舉選舉公報／第23任總統副總統選舉選舉公報" },
    { text: "5 23", tip: "女，5班23號／國中補習班同學" },
    { text: "座號和", tip: "男，1號／女，32號／國中同班同學" },
  ];

  return (
    <div className="min-h-screen px-4 py-8 font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
        畢業紀念冊
      </h1>

      <div className="space-y-4 max-w-xl mx-auto text-base md:text-lg">
        {tooltips.map((item, idx) => (
          <div key={`${item.text}-${idx}`} className="mb-2">
            <span>{item.text}</span>
            {item.tip && (
              <button
                onClick={() => toggleTooltip(idx)}
                aria-label={`顯示提示：${item.tip}`}
                className="ml-2 text-blue-600 dark:text-blue-400 font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 rounded"
              >
                ?!
              </button>
            )}
            {activeIndex === idx && item.tip && (
              <div className="mt-1 p-2 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded w-fit max-w-xs transition duration-150 ease-in-out">
                {item.tip}
              </div>
            )}
          </div>
        ))}

        <div className="pt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          © 桃園縣立東興國中第十七屆畢業紀念冊 2004
        </div>
      </div>
    </div>
  );
}
