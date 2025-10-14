import Footer from '../ui/footer';
import NavMenu from '../ui/navbar';

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />

      <main className="pt-20">{children}</main>

      <Footer />
    </>
  );
}
