import Image from "next/image";
import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex h-screen flex-col px-3 py-3 gap-2">
      <div className="bg-red-100 rounded-md gap-y-4">
        <Link href="/">
          <Image
            src="./olinju.svg"
            width={160}
            height={160}
            alt="Olivier and Ju"
          />
        </Link>
      </div>
      <NavLinks />
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50"></div>
    </div>
  );
}
