import React, { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface layoutProps {
  children: ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
