interface BackIconProps {
  size?: number;
  onClick: () => any;
}

function BackIcon({ size = 10, onClick }: BackIconProps) {
  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-${size} w-${size}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        color="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        />
      </svg>
    </button>
  );
}

export default BackIcon;
