import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
  Button,
} from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";
import { ROUTES } from "../components/constants/routes";

const serviceSubLinks = [
  {
    href: `${ROUTES.WHAT_WE_OFFER}/life-development-skills`,
    label: "Life Skill Development",
  },
  {
    href: `${ROUTES.WHAT_WE_OFFER}/accomodation`,
    label: "Accomodation Facilities",
  },
  {
    href: `${ROUTES.WHAT_WE_OFFER}/community`,
    label: "Community Engagement",
  },
];

const careersSubLinks = [
  {
    href: `${ROUTES.CAREERS}/join-our-team`,
    label: "Join Our Team",
  },
  {
    href: `${ROUTES.CAREERS}/volunteer`,
    label: "Volunteering Opportunities",
  },
];

const navLinks = [
  { href: ROUTES.ABOUT_US, label: "About Us" },
  { href: ROUTES.ACCOMODATION, label: "Accomodation" },
];

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const getLinkClassName = (href: string) => {
    const isActive =
      location.pathname === href ||
      (href === ROUTES.WHAT_WE_OFFER &&
        location.pathname.includes(ROUTES.WHAT_WE_OFFER));
    return `transition-colors tracking-wider hover:text-[#48D1CC] ${
      isActive ? "text-[#48D1CC]" : "text-[#5C6C72]"
    }`;
  };

  return (
    <div className="bg-[#EFFBFA]">
      <div className="container max-w-full px-4 md:px-0 lg:max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex gap-4 md:gap-10 items-center">
            <NavLink to={ROUTES.HOME}>
              <img src={logo} alt="logo" className="h-10 md:h-12" />
            </NavLink>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10">
              <li>
                <NavLink
                  to={ROUTES.ABOUT_US}
                  className={getLinkClassName(ROUTES.ABOUT_US)}
                >
                  <Typography placeholder="" className="font-semibold text-lg">
                    About Us
                  </Typography>
                </NavLink>
              </li>

              <li>
                <Menu
                  open={isOpen}
                  handler={setIsOpen}
                  placement="bottom"
                  offset={5}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 10 },
                  }}
                >
                  <MenuHandler>
                    <button
                      className={`flex cursor-pointer items-center gap-1 ${getLinkClassName(
                        ROUTES.WHAT_WE_OFFER
                      )}`}
                    >
                      <Typography
                        className="font-semibold text-lg"
                        placeholder=""
                      >
                        what we Offer
                      </Typography>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </MenuHandler>
                  <MenuList
                    className="bg-[#48D1CC] border-none shadow-xl rounded-md mt-2 p-2"
                    placeholder=""
                  >
                    {serviceSubLinks.map(({ href, label }) => (
                      <MenuItem
                        key={href}
                        placeholder=""
                        className="p-0 hover:bg-transparent focus:bg-transparent active:bg-transparent"
                      >
                        <NavLink
                          to={href}
                          className="w-full block py-2 px-4 text-start text-white hover:text-[#48D1CC] hover:bg-[#EFFBFA] rounded"
                        >
                          <Typography placeholder="" className="font-medium">
                            {label}
                          </Typography>
                        </NavLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </li>

              {navLinks.slice(1).map(({ href, label }) => (
                <li key={href}>
                  <NavLink to={href} className={getLinkClassName(href)}>
                    <Typography
                      placeholder=""
                      className="font-semibold text-lg"
                    >
                      {label}
                    </Typography>
                  </NavLink>
                </li>
              ))}

              <li>
                <Menu
                  open={isCareerOpen}
                  handler={setIsCareerOpen}
                  placement="bottom"
                  offset={5}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 10 },
                  }}
                >
                  <MenuHandler>
                    <button
                      className={`flex cursor-pointer items-center gap-1 ${getLinkClassName(
                        ROUTES.CAREERS
                      )}`}
                    >
                      <Typography
                        className="font-semibold text-lg"
                        placeholder=""
                      >
                        Careers
                      </Typography>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </MenuHandler>
                  <MenuList
                    className="bg-[#48D1CC] border-none shadow-xl rounded-md mt-2 p-2"
                    placeholder=""
                  >
                    {careersSubLinks.map(({ href, label }) => (
                      <MenuItem
                        key={href}
                        placeholder=""
                        className="p-0 hover:bg-transparent focus:bg-transparent active:bg-transparent"
                      >
                        <NavLink
                          to={href}
                          className="w-full block py-2 px-4 text-start text-white hover:text-[#48D1CC] hover:bg-[#EFFBFA] rounded"
                        >
                          <Typography placeholder="" className="font-medium">
                            {label}
                          </Typography>
                        </NavLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </li>

              <li>
                <Button className="bg-[#48D1CC] text-white rounded-full px-6 py-3">
                  <Typography className="font-bold cursor-pointer text-lg">
                    Contact Us
                  </Typography>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#D7D3C4] pb-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    to={href}
                    className={`${getLinkClassName(href)} block py-2`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Typography placeholder="" className="font-semibold">
                      {label}
                    </Typography>
                  </NavLink>
                </li>
              ))}

              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-2"
                >
                  <Typography
                    placeholder=""
                    className="font-semibold text-[#5C6C72]"
                  >
                    Services
                  </Typography>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <Collapse open={mobileServicesOpen}>
                  <div className="mt-2 pl-4 flex flex-col gap-2">
                    {serviceSubLinks.map(({ href, label }) => (
                      <NavLink
                        key={href}
                        to={href}
                        className="text-[#5C6C72] hover:text-black py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Typography
                          placeholder=""
                          className="font-medium text-sm"
                        >
                          {label}
                        </Typography>
                      </NavLink>
                    ))}
                  </div>
                </Collapse>
              </li>

              <li className="py-2">
                <Typography
                  placeholder=""
                  className="text-[#7A8F8C] font-medium cursor-pointer hover:text-[#5C6C72]"
                >
                  Login
                </Typography>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
