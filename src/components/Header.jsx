export const Header = () => {
  return (
    <div className="header">
      <a href="/"><img src="./logo.png" alt="logo" className="logo"/></a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
