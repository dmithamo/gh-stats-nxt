import { AppLogo, ELogoSize } from "./components/app-logo";

export default function HomePage() {
  return (
    <div className="h-[85vh] w-full flex items-center justify-center">
      <AppLogo size={ELogoSize.large} />
    </div>
  );
}
