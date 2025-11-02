export default { title: "Style Guide/Buttons/Text" };

export const _default = () => (
  <button className="font-primary font-normal text-sm leading-4 tracking-[1.25px] uppercase text-gray-900 pb-1.5 border-b-2 border-white hover:border-gray-900">
    Enabled
  </button>
);

export const _disabled = () => (
  <button disabled className="font-primary font-normal text-sm leading-4 tracking-[1.25px] uppercase text-gray-300 pb-1.5 border-b-2 border-white cursor-not-allowed">
    Disabled
  </button>
);
