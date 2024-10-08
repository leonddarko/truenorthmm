import "./globals.css";
import NavigationBar from "./ui/navbar";
import { noto_sans, noto_serif } from "./ui/fonts";
import Footer from "./ui/footer";

export const metadata = {
  title: "True North Media Monitoring",
  description: "Monitoring Evaluation and Measurement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${noto_sans.variable} ${noto_serif.variable}`}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
