import React from "react";

export default { title: "Style Guide/Chip" };

export const _default = () => (
  <span className="inline-block font-secondary font-normal text-sm leading-4 tracking-[0.25px] text-gray-800 bg-lime-50 border-[1.5px] border-solid border-lime-300 px-3 py-1 rounded-full">
    elasticsearch
  </span>
);

export const _multipleChips = () => (
  <div>
    <span className="inline-block mr-2 font-secondary font-normal text-sm leading-4 tracking-[0.25px] text-gray-800 bg-lime-50 border-[1.5px] border-solid border-lime-300 px-3 py-1 rounded-full">
      automation
    </span>
    <span className="inline-block mr-2 font-secondary font-normal text-sm leading-4 tracking-[0.25px] text-gray-800 bg-lime-50 border-[1.5px] border-solid border-lime-300 px-3 py-1 rounded-full">
      custom tools
    </span>
    <span className="inline-block mr-2 font-secondary font-normal text-sm leading-4 tracking-[0.25px] text-gray-800 bg-lime-50 border-[1.5px] border-solid border-lime-300 px-3 py-1 rounded-full">
      elasticsearch
    </span>
  </div>
);
