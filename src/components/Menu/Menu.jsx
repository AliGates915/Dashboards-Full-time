import { Link } from "react-router-dom";
import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"; // Import arrow icons
import { FaSearch } from "react-icons/fa";


const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Dashboard",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Customer Profile",
        href: "/",
      },
      {
        icon: "/avatar.png",
        label: "Auditors Profile",
        href: "/",
      },
      {
        icon: "/parent.png",
        label: "Services Offered",
        href: "/",
        subLists: [
          {
            label: "Services List",
          },
          {
            label: "Services Details",
          },
        ],
      },
      {
        icon: "/subject.png",
        label: "Require Authentication",
        href: "/",
      },
      {
        icon: "/class.png",
        label: "Auditor Task List",
        href: "/",
      },
      {
        icon: "/lesson.jpeg",
        label: "Verifications",
        href: "/",
      },
      {
        icon: "/subject.png",
        label: "Reports",
        href: "/",
        subLists: [
          {
            label: "Report Task",
          },
          {
            label: "Report Auditor",
          },
        ],
      },
      {
        icon: "/setting.png",
        label: "Setups",
        href: "/",
        subLists: [
          {
            label: "Branches",
          },
          {
            label: "Auditors Task",
          },
          {
            label: "Certificate Format",
          },
        ],
      },
    ],
  },
];

const Menu = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu

  // Toggle the submenu
  const handleSubmenuToggle = (label) => {
    if (activeSubmenu === label) {
      setActiveSubmenu(null); // Close submenu if already open
    } else {
      setActiveSubmenu(label); // Open selected submenu
    }
  };

  return (
    <div className="mt-4 text-xs">
      {/* SEARCH BAR */}
      <div className="logo2 md:flex items-center gap-2 rounded-[5px] text-xs ring-[1.5px] ring-gray-600 px-2 mb-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-[145px] p-2 bg-transparent outline-none border-e-[1px] border-gray-600"
        />
        <span className="cursor-pointer">
        <FaSearch size={16} color="white"/>
        </span>
      </div>
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <div key={item.label}>
              {/* Main Menu Item */}
              <div
                className="flex items-center justify-between lg:justify-start gap-4 text-white py-2 md:px-2 rounded-md hover:bg-lamaSkyLight cursor-pointer"
                onClick={() => handleSubmenuToggle(item.label)} // Toggle submenu on click
              >
                <div className="flex items-center gap-4">
                  <img src={item.icon} alt="" width={17} height={17} />
                  <span className="logo">{item.label}</span>
                </div>
                {/* Display arrow only if the menu item has subLists */}
                {item.subLists && item.subLists.length > 0 && (
                  <span className="ml-auto">
                    {activeSubmenu === item.label ? (
                      <TiArrowSortedUp className="text-xl text-gray-300" />
                    ) : (
                      <TiArrowSortedDown className="text-xl text-gray-300" />
                    )}
                  </span>
                )}
              </div>

              {/* Submenu Items */}
              {item.subLists && activeSubmenu === item.label && (
                <div className="pl-8 space-y-1">
                  {item.subLists.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="flex items-center text-gray-300 py-1 hover:text-white"
                    >
                      - {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
