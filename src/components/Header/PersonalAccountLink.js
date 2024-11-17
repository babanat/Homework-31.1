import { Link } from "react-router-dom";

const PersonalAccountLink = () => (
  <Link to="/personal-account" className="flex items-center space-x-2">
    <img
      src="/images/Vector.jpg"
      alt="Account"
      className="h-6 w-6 cursor-pointer"
    />
       <span className="text-base font-roboto hover:text-[#2C36F2]">
      Особистий кабінет
    </span>

  </Link>
);

export default PersonalAccountLink;

  