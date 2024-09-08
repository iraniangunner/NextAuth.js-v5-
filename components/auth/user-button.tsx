import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";
import { currentUser } from "@/lib/auth";
import { SettingsLogoutButton } from "@/components/auth/settings-logout-button";
import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";
import Link from "next/link";

export const UserButton = async () => {
  const user = await currentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        {/* <form action={async (formData:FormData) => {
            'use server';
            await signOut({redirectTo:"/auth/login"});
          }} className="cursor-pointer"> */}
        <DropdownMenuItem>
          <ExitIcon className="h-4 w-4 mr-2" />
          {/* <button type="submit">Logout</button> */}
          <button onClick={() => signOut({callbackUrl:"/auth/login"})}>Sign out</button>
        </DropdownMenuItem>
        {/* </form>  */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
