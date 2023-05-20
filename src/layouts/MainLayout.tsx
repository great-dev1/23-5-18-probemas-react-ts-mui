import { ReactNode } from "react";
import NavBar from "../components/navbar";
import { Box } from "@mui/material";

interface ILayout {
  children: ReactNode | null;
}
const MainLayout = ({ children }: ILayout) => {
  return (
    <Box>
      <div>
        <NavBar />
      </div>
      {children}
    </Box>
  );
};

export default MainLayout;
