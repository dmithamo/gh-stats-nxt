import clsx from "clsx";
import Link from "next/link";
import GHIcon from "../../public/images/github-alt.svg";

export enum ELogoSize {
  small = "small",
  large = "large",
}

type Props = {
  size?: ELogoSize;
};

const logoSizeClasses = (
  size?: ELogoSize
): { iconSize: string; textSize: string } => {
  switch (size) {
    case ELogoSize.small:
      return { iconSize: "h-4 w-4", textSize: "text-sm" };
    case ELogoSize.large:
      return { iconSize: "h-16 w-16", textSize: "text-4xl" };
    default:
      return { iconSize: "h-7 w-7", textSize: "text-lg" };
  }
};

export const AppLogo: React.FC<Props> = ({ size }) => {
  const { textSize, iconSize } = logoSizeClasses(size);
  return (
    <Link
      href={"/"}
      className={clsx(
        "flex select-none gap-2 items-center uppercase font-bold text-accent",
        textSize
      )}
    >
      <GHIcon fill="currentColor" className={clsx(iconSize)} />
      <span className="opacity-65 text-fore">{"///"}</span>
      <span className="text-accent">GH Stats</span>
    </Link>
  );
};
