import Link from "next/link";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";


export default function Home() {
  return (
    <div>
       <header className="bg-gray1">
        <Header></Header>

       </header>

       <main>
         <Link href="/about"><a  title="About">About</a></Link>
       </main>

       <footer>
         <Footer></Footer>
       </footer>
    </div>
  )
}
