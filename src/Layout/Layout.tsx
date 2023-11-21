import React from "react";
import Collaboration from "../Components/Home/Collaboration";
import MailChimpForm from "../Components/Home/NewsLetter/MailChimpForm";
import Footer from "../Components/Shared/Navigations/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <main className="w-full h-full bg-black-main font-vastago overflow-hidden">
      {children}
      <div className="w-full bg-[url('/Assets/FooterBg.png')] bg-cover bg-no-repeat bg-top -mt-96 pt-[320px]">
        <Collaboration />
        <MailChimpForm />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
