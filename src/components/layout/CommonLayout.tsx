import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GuidedTour from "../modules/guidedTour/GuidedTour";

interface IProps {
  children: ReactNode;
}
export default function CommonLayout({ children }: IProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar></Navbar>

      <div className="grow-1">{children}
        <GuidedTour></GuidedTour>
      </div>

      <Footer></Footer>
    </div>
  );
}
