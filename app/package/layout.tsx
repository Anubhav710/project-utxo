import { myFont2 } from "@/fonts";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` ${myFont2.className} bg-black w-full `}>
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
