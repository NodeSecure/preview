import { ReactChild } from "react";

interface Props {
  children: ReactChild;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen md:p-20 bg-gray-800">
      <div className="container m-auto">{children}</div>
    </div>
  );
}
