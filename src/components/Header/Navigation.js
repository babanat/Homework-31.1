import { NavLink } from "react-router-dom";

const navLinks = [
  { path: "/poslugi", label: "Послуги" },
  { path: "/converter", label: "Конвертер валют" },
  { path: "/contacts", label: "Контакти" },
  { path: "/ask-question", label: "Задати питання" },
];

const Navigation = () => (
  <nav className="flex space-x-10">
    {navLinks.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        className={({ isActive }) =>
          `text-base font-roboto ${
            isActive ? "text-[#2C36F2]" : "text-[#707C87]"
          } hover:text-[#2C36F2]`
        }
      >
        {link.label}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
