import "./globals.css";
import NavigationBar from "./ui/navbar";
import { noto_sans, noto_serif } from "./ui/fonts";

export const metadata = {
  title: "True North",
  description: "We measure what Africans buy, watch and listen to",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${noto_sans.variable} ${noto_serif.variable}`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
