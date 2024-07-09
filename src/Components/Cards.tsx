import React from "react";
import { Card } from "flowbite-react";

export function Cards({ cardData }) {
  return (
    <div id="People" className="overflow-auto h-full p-10">
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((data, index) => (
          <Card className="max-w-sm" key={index}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {data.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

