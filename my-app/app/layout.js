import Link from "next/link";

export default function RootLayout({ children}){
  return (
    <html>
      <body>
        <nav>
          <Link href = "/">Home</Link> |
          <Link href = "/about"> About </Link> |
          <Link href = "/blog/id"> Blog </Link> |
          <Link href = "/users"> Users </Link> 
        </nav>
        {children}
        
      </body>
    </html>
  )
}