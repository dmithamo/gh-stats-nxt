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
      return { iconSize: "h-14 w-14", textSize: "text-3xl" };
    default:
      return { iconSize: "h-8 w-8", textSize: "text-2xl" };
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
      <p className="text-fore font-extralight text-nowrap">GH Stats</p>
    </Link>
  );
};
