import Footer from '../ui/footer';
import NavMenu from '../ui/navbar';
import Snowfall from '../ui/snowfall';

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />

      <main className="">{children}</main>

      <Footer />

      <Snowfall />
    </>
  );
}
