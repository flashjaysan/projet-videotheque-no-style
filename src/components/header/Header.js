import Brand from "./Brand";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="navbar bg-primary">
      <Brand />
      <Nav />
    </header>
  );
};

export default Header;
