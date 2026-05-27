import Footer from '../ui/footer';
import NavMenu from '../ui/navbar';

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />

      <main className="">{children}</main>

      <Footer />
    </>
  );
}
