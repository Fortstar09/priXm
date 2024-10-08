import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rants", href: "/rants" },
  { label: "Add Rant", href: "/addrant" },
];

export function NavBar() {
  return (
    <div className="flex justify-between items-center px-2 md:px-10 py-6 border-b border-gray-200 mb-10">
      <div className="logo text-xl text-gray-500 font-medium">
        pri<span className="text-2xl text-orange-500">X</span>m
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2 md:gap-4">
            {navLinks.map((link) => (
              <NavigationMenuItem
                key={link.label}
                className="hover:text-orange-500"
              >
                <Link to={link.href}>
                  <NavigationMenuLink className="">
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
