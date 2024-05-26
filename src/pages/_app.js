// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


import "@/styles/globals.css";
import { Montserrat } from 'next/font/google';
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";



// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Navbar2 />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}