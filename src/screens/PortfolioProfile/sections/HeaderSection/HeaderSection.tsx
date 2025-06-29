import { DownloadIcon } from "lucide-react";
import { Menu, X } from "lucide-react";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "../../../../components/ui/button";

// Navigation items data
const navigationItems = [
  { label: "About Me", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Project", href: "project" },
  { label: "Contact Me", href: "contact" },
];

export const HeaderSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const NavLink = ({ title, href }: { title: string; href: string }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={href}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="font-heading-h5-semibold text-primaryblack"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 z-50 w-screen px-20 py-4 max-md:px-8 max-xs:px-5 transition-all duration-500 bg-white"
        // hasScrolled && " backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center justify-between ">
        <a className=" cursor-pointer z-2">
          <div className="font-heading-h5-bold font-bold text-[20px] text-primaryblack">
            Personal
          </div>
        </a>

        <div
          className={clsx(
            " max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2  ",
            isOpen
              ? "block max-lg:h-full bg-white"
              : "max-lg:pointer-events-none max-lg:hidden"
          )}
        >
          <nav className="max-lg:relative top-24 max-lg:z-4 max-lg:text-xl max-lg:my-auto max-lg:h-4/5 ">
            <ul
              className={clsx(
                " gap-[24px] font-semibold text-light max-lg:flex-col max-lg:h-full max-lg:gap-16 max-lg:items-center max-lg:px-12 flex text-[18px]"
              )}
            >
              {navigationItems.map((item, index) => (
                <li key={index} className="cursor-pointer max-lg:mb-4">
                  <NavLink title={item.label} href={item.href} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Action Buttons */}
        <div className={clsx("flex items-center gap-4 max-sm:hidden")}>
          <a
            href="https://drive.google.com/file/d/1cGvTxdTCM2ftoOUDbCI15ZZAyqJeHPCH/view?usp=sharing "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="h-14 px-5 py-4 font-button-text-semibold text-black border-black rounded"
            >
              Resume
              <DownloadIcon className="w-5 h-5 ml-2" />
            </Button>
          </a>
          <a
            href="https://drive.google.com/file/d/1cGvTxdTCM2ftoOUDbCI15ZZAyqJeHPCH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-14 px-5 py-4 font-button-text-semibold text-primarywhite bg-primaryblack rounded">
              Portfolio
              <DownloadIcon className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden z-2 size-10 cursor-pointer flex justify-center items-center z-50"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? (
            <X color="#000" size={30} />
          ) : (
            <Menu color="#000" size={30} />
          )}
        </button>
      </div>
    </header>

    // <header className="flex items-start px-20 py-6 w-full bg-transparent">
    //   <div className="flex items-center justify-between w-full px-8">
    //     {/* Logo and Brand */}
    //     <div className="flex items-center gap-3">
    //       <div className="relative w-[39.91px] h-10">
    //         <div className="relative w-[23px] h-[35px] top-[3px] left-2 bg-[url(/group.png)] bg-[100%_100%]" />
    //       </div>

    //     </div>

    //   </div>
    // </header>
  );
};
