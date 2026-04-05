import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Guilherme Teodoro | Data Engineer",description:"Portfolio bilingue - Guilherme Teodoro, Data Engineer & Backend Engineer"};
export default function RootLayout({children}:{children:React.ReactNode}){
 return(
 <html lang="pt">
    <body className="antialiased">{children}</body>
</html>);
}
