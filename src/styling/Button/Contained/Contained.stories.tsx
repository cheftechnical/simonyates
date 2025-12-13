/* @deprecated */

// Simple Send icon SVG
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default { title: "Style Guide/Buttons/Contained" };

export const _default = () => (
  <button className="inline-flex items-center justify-center px-4 py-4 font-primary font-medium text-base leading-4 tracking-[1.25px] uppercase rounded shadow-none text-gray-50 bg-gray-900 hover:text-gray-900 hover:bg-gray-50 hover:shadow-[inset_0_0_0_2px_var(--color-gray-900)] active:text-gray-900 active:bg-gray-50 active:shadow-[inset_0_0_0_2px_var(--color-gray-900)]">
    Enabled
  </button>
);

export const _withIcon = () => (
  <button className="inline-flex items-center justify-center px-4 py-4 font-primary font-medium text-base leading-4 tracking-[1.25px] uppercase rounded shadow-none text-gray-50 bg-gray-900 hover:text-gray-900 hover:bg-gray-50 hover:shadow-[inset_0_0_0_2px_var(--color-gray-900)] active:text-gray-900 active:bg-gray-50 active:shadow-[inset_0_0_0_2px_var(--color-gray-900)]">
    Enabled
    <span className="ml-2">
      <SendIcon />
    </span>
  </button>
);

export const _disabled = () => (
  <button disabled className="inline-flex items-center justify-center px-4 py-4 font-primary font-medium text-base leading-4 tracking-[1.25px] uppercase rounded shadow-none text-gray-50 bg-gray-300 cursor-not-allowed">
    Disabled
  </button>
);
