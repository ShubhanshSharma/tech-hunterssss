// components/EventTemplate.tsx
import React from "react";

interface EventTemplateProps {
  title: string;
  date: string;
  location: string;
  children: React.ReactNode; // Accepts any content inside the template
}

const EventTemplate: React.FC<EventTemplateProps> = ({ title, date, location, children }) => {
  return (
    <div className=" px-6 max-w-[700px] flex flex-col items-center my-16">

        <h2 className=" eventHeading relative mx-auto font-semibold underline underline-offset-8 text-white text-[34px] lg:text-[50px]">
            {title}
        </h2>
        <p className="text-gray-500 self-start mt-8">
            {'Date- ' + date} 
        </p>
        <p className="text-gray-500 self-start ">
            {'Location- ' + location} 
        </p>

        <div className="text-gray-400 text-[16px] text-justify text-pretty sm:text-[20px] sm:font-normal flex flex-col overflow-auto space-y-8 mt-8">
            {children}
        </div>
    </div>
  );
};

export default EventTemplate;
