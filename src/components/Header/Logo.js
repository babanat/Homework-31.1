import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/converter" className="flex items-center  ">
    <img
      src="/logo/Group 76.png"
      alt="Чiп Чендж"
      className="h-8 cursor-pointer"
    />
  </Link>
);

export default Logo;
