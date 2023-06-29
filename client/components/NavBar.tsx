'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function NavBar() {
  return (
    <NavigationMenu.Root className="z-[1] w-screen bg-zinc-900 p-6 text-white">
      <NavigationMenu.List className="relative mx-auto flex max-w-7xl items-center justify-between space-x-8 border-b-2 pb-2">
        <div className="flex items-center space-x-20">
          <NavigationMenu.Item className="text-3xl font-medium">
            <NavigationMenu.Link href="/">commerce.</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="text-sm">
            <NavigationMenu.Link>LISTINGS</NavigationMenu.Link>
          </NavigationMenu.Item>
        </div>
        <NavigationMenu.Item className="text-sm">
          <NavigationMenu.Link href="/login">LOGIN</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
