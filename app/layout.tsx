import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Portfólio",description:"Portfolio bilingue"};
export default function RootLayout({children}:{children:React.ReactNode}){
 return(
 <html lang="pt">
    <body>{children}</body>
</html>);
}
