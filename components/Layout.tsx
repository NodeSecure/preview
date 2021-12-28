import { ReactChild } from "react";

interface Props {
  children: ReactChild;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col items-center min-h-screen md:p-20 bg-gray-800">
      <div className="container m-auto">{children}</div>
      <footer>
        <p className="text-gray-200 font-thin font-sans">
          🕸 Powered by NodeSecure -{" "}
          <a
            className="hover:text-gray-400"
            href="https://github.com/ES-Community/nsecure"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to the organization
          </a>
        </p>
      </footer>
    </div>
  );
}
