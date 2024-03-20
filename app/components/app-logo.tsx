import Link from "next/link";
import GHIcon from "../../public/images/github-alt.svg";

export const AppLogo: React.FC = () => (
  <Link
    href={"/"}
    className="flex select-none gap-2 items-center uppercase font-bold text-accent"
  >
    <GHIcon fill="currentColor" className="h-5 w-5" />
    <span className="opacity-65 text-fore">{"///"}</span>
    <span className="text-accent">GH Stats</span>
  </Link>
);
