import SideBar from "./SideBar.jsx";
import NavBar from "./NavBar.jsx";
import MainContainer from "./MainContainer.jsx";
import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="bg-primary grid h-dvh grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
      <SideBar />
      <NavBar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
}
