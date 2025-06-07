// components/Navbar.tsx

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import type { FileRouteTypes } from "@/routeTree.gen";
import { Link } from "@tanstack/react-router";


type To = FileRouteTypes["to"]
type Challanges = { id: number; title: string, url: To }[]


const challenges = [{ id: 1, title: "Feedback", url: "/challanges/feedback" }] satisfies Challanges

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 px-4 py-3 bg-white shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Challenge App
        </Link>


        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                {challenges.map((challenge) => (
                  <li key={challenge.id}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={challenge.url}
                          className="text-sm text-gray-700 hover:text-blue-600 transition"
                        >
                          {challenge.title}
                        </Link>
                      </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        
        </NavigationMenu>
      </div>
    </nav>
  )
}
