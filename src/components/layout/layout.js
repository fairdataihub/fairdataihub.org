import Footer from '../ui/footer';
import NavMenu from '../ui/navbar';

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />

      <main className="mt-16">{children}</main>

      <Footer />
    </>
  );
}
