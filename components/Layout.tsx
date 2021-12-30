import { ReactChild } from "react";
import Footer from "./Footer";

interface Props {
  children: ReactChild;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col items-center min-h-screen md:p-20 bg-gray-800">
      <div className="container m-auto">{children}</div>
      <Footer />
    </div>
  );
}
