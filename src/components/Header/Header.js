import Logo from "./Logo";
import Navigation from "./Navigation";
import PersonalAccountLink from "./PersonalAccountLink";

const Header = () => (
  <header className="flex justify-around items-center bg-[#F6F7FF] p-8 ">
    <div className="flex items-center space-x-20">
      <Logo />
      <Navigation />
    </div>
    <div className=" flex items-center space-x-6">
      <PersonalAccountLink />
    </div>
  </header>
);

export default Header;
