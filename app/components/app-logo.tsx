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
      return { iconSize: "h-5 w-5", textSize: "text-sm" };
    case ELogoSize.large:
      return { iconSize: "h-16 w-16", textSize: "text-4xl" };
    default:
      return { iconSize: "h-10 w-10", textSize: "text-2xl" };
  }
};

export const AppLogo: React.FC<Props> = ({ size }) => {
  const { textSize, iconSize } = logoSizeClasses(size);
  return (
    <Link
      href={"/"}
      className={clsx(
        "flex select-none items-center uppercase font-bold text-accent",
        textSize,
        { "gap-2": size != ELogoSize.large, "gap-4": size === ELogoSize.large }
      )}
    >
      <GHIcon fill="currentColor" className={clsx(iconSize)} />
      <span className="opacity-65 text-fore">{"///"}</span>
      <span className="text-accent text-nowrap">GH Stats</span>
    </Link>
  );
};
