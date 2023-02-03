import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";


type Props = {};

const Header = (props: Props) => {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav
        className="flex items-center justify-between uppercase text-gray-900"
        aria-label="Global"
      >
        <Link href="#">
          <div className="hidden lg:flex">
            <span className="text-base font-bold leading-6">Back</span>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold tracking-widest">
              digital artist
            </span>
            <h1 className="text-2xl font-bold leading-6 ">banksy_is_dead</h1>
          </div>
        </Link>
        <div className="flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 hover:text-gray-50 hover:bg-gray-900 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
