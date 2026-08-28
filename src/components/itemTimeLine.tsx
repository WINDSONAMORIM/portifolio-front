"use client";
import { useState } from "react";
import { TimeLineDot } from "./timeLineDot";
import { experiences } from "../data/experiences.data";

export const TimeLineItem = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className="grid w-full h-25 items-center gap-4 grid-cols-[1fr_auto_1fr] md:flex md:flex-col md:items-center"
        >
          <h3 className="text-right md:text-center text-lg font-semibold text-white">
            {exp.companyAbbr}
          </h3>
          <div className="flex justify-center">
            <TimeLineDot
              active={selected === index}
              onClick={() => setSelected(index)}
            />
          </div>
          <time className="text-left md:text-center text-sm text-gray-400">
            {exp.endDate} - {exp.startDate}
          </time>
        </div>
      ))}
      {
      experiences[selected] && (
      <div className="md:absolute md:top-30 m-auto w-90 md:w-full">
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white">
            {experiences[selected].role} - {experiences[selected].company}
          </h3>
          <p className="mt-5 text-gray-400">
            {experiences[selected].description}
          </p>
          <ul className="mt-5 list-disc list-inside text-gray-400">
            {experiences[selected].responsibilities.map((resp, idx) => (
              <li className="mt-3" key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
        )}
    </>
  );
};
