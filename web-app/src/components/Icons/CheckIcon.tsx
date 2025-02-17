import React from "react";

function CheckIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="21"
      viewBox="0 0 28 21"
      className={`${props.className || ""}`}
    >
      <path
        fill="currentColor"
        d="M27.414 1.08694C28.1953 1.86827 28.1953 3.13091 27.414 3.91225L11.4131 19.914C10.6318 20.6953 9.36927 20.6953 8.58798 19.914L0.585783 11.9131C-0.195261 11.1318 -0.195261 9.86915 0.585783 9.08781C1.36695 8.30648 2.63327 8.30648 3.41457 9.08781L7.82749 13.536C8.99593 14.7138 10.8985 14.7196 12.0741 13.549L24.5889 1.08694C25.3702 0.304354 26.6327 0.304354 27.414 1.08694Z"
      />
    </svg>
  );
}

export default CheckIcon;
