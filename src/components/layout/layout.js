import Footer from '../ui/footer';
import Navbar from '../ui/navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}
