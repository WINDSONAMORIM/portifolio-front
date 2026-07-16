"use client";
import { TimeLineItem } from "../../components/itemTimeLine";

export const Experiences = () => {

  return (
    <>
      <div className="mx-auto max-w-7xl min-h-screen">
        <h2 className="text-3xl font-bold text-center m-8 text-white">
          Experiências Profissional
        </h2>

        <div className="relative">
          <div className="absolute top-13 left-1/2 md:left-0 md:right-0 w-1 md:w-full h-75 md:h-1 bg-blue-500" />
          <div className="flex flex-col md:flex-row w-full">
            <TimeLineItem />
          </div>
        </div>
      </div>
    </>
  );
}