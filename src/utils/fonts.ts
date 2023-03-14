import { Open_Sans, Poppins } from "@next/font/google";

export const headings = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const base = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-opensans",
});
