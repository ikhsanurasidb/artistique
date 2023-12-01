import Link from "next/link";
import Profile from "./page"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function Main({children}) {
  return (
    <div className="flex mt-[10vh] h-[90vh] text-base-200 bg-neutral tracking-widest">
      <div className="flex flex-col justify-between items-center h-[85vh] w-[10vh] my-auto">
        <div className="grid gap-16 grid-cols-1">
          <div className=" w-10 rounded-full hover:bg-gray-200 active:bg-gray-300">
            <Link href="/profile">
              <AccountCircleRoundedIcon fontSize="large" />
            </Link>
          </div>
          <div className="hover:bg-gray-200 active:bg-gray-300 rounded">
            <Link href="/profile/cart">
              <ShoppingCartRoundedIcon fontSize="large" />
            </Link>
          </div>
        </div>
        <div className="hover:bg-gray-200 active:bg-gray-300 rounded">
          <LogoutRoundedIcon fontSize="large" />
        </div>
      </div>
      <div className="h-[90vh] w-[0.1px] outline outline-1"></div>
      {children}
    </div>
  );
}
