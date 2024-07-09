import React from "react";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function NavbarComp() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white shadow-md">
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-charity-icon-png-image_3700413.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jannat Welfare</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#About" active>Pastor</NavbarLink>
        <NavbarLink href="#Services">Services</NavbarLink>
        <NavbarLink href="#People">People</NavbarLink>
        <NavbarLink href="#Contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

<NavbarComp />
