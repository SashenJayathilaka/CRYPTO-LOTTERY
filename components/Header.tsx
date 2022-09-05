import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <img
          src="https://c.tenor.com/zyUn_DgNXyUAAAAd/eth-etherum.gif"
          alt=""
          className="rounded-full h-20 w-20"
        />

        <div>
          <h1 className="text-lg text-white font-bold">CRYPTO LOTTERY</h1>
          <p className="text-xs text-emerald-500 truncate">
            User: {address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:col-span-3 items-center justify-center">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton isActive title="Buy Ticket" />
          <NavButton onClick={disconnect} title="Log Out" />
        </div>
      </div>
      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />

        <span className="md:hidden">
          <NavButton onClick={disconnect} title="Log Out" />
        </span>
      </div>
    </header>
  );
};
export default Header;
