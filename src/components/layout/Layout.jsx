import Navbar from "./Navbar";
import useLenis from "../../hooks/useLenis";
import CustomCursor from "../ui/CustomCursor";
import Footer from "./Footer";
import ScrollToTop from "../ui/ScrollToTop";

export default function Layout({ children }) {
  useLenis();

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
