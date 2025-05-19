import React from "react";

const Box = ({ name, title, dept, color }) => (
  <div className={`rounded-lg p-4 w-64 text-center shadow-md border-t-4 ${color}`}>
    <h3 className="font-bold text-black">{name}</h3>
    <p className="text-sm text- black">{title}</p>
    {dept && <p className="text-xs italic text-gray-500">{dept}</p>}
  </div>
);

const Line = ({ height = "h-10", width = "w-1", className = "" }) => (
  <div className={`bg-black ${height} ${width} ${className}`}></div>
);

const OrgChart = () => {
  return (
    <div className="flex flex-col items-center py-10 relative text-black font-bold ">FARM SCHOOL ORGANIZATIONAL CHART
      {/* General Manager */}
      <Box
        name="Place Maria Elena C. Limocon"
        title="General Manager"
        dept="Integrated Farm School"
        color="border-purple-500"
      />

      <Line />

      {/* Operations Manager */}
      <Box
        name="Justine Lynn C. Limocon"
        title="Operations Manager"
        dept="Integrated Farm School"
        color="border-blue-500"
      />

      <Line />

      {/* Department Heads & Staff */}
      <div className="flex justify-center gap-32 relative mt-20">
        {/* Left Branch */}
        <div className="flex flex-col items-center">
          <Box
            name="Demetrio T. Repollo"
            title="Agri Department Head"
            dept="Integrated Farm School"
            color="border-orange-400"
          />
          <Line />
          <Box
            name="Regla A. Bringcula"
            title="Liaison"
            dept="Integrated Farm School"
            color="border-green-500"
          />
        </div>

        {/* Right Branch */}
        <div className="flex flex-col items-center">
          <Box
            name="Jerome Mabaso"
            title="Officer in Charge"
            dept="Integrated Farm School"
            color="border-orange-400"
          />
          <Line />
          <Box
            name="Sofia Loren Gino"
            title="Processing Officer"
            dept="Integrated Farm School"
            color="border-green-500"
          />
        </div>
           <Line className="absolute bottom-[232px] left-[512px] h-[80px]"/>
           
        {/* Horizontal Connector Line */}
        <div className="absolute bottom-[310px] left-31 right-31 h-1 bg-black z-[-1]" />
        
      </div>
         <Line className="absolute bottom-[272px] left-[458px] h-[80px]"/>

    </div>

    
  );
};

export default OrgChart;
