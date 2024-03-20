import Link from "next/link";

export const AppLogo: React.FC = () => (
  <Link href={"/"} className="flex select-none gap-2 items-center uppercase">
    <>GH icon here</>
    <span className="opacity-65 text-fore">{"///"}</span>
    <span className="text-accent">GH Stats</span>
  </Link>
);
