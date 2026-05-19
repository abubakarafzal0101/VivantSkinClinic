import Navbar from "./Navbar";
import useLenis from "../../hooks/useLenis";
import CustomCursor from "../ui/CustomCursor";

export default function Layout({ children }) {
  useLenis();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
