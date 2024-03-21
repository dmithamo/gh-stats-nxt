import { AppLogo, ELogoSize } from "./app-logo";

export const AppHeader: React.FC = () => {
  // show user avatar or login button
  return (
    <header className="p-4 shadow flex justify-between items-center">
      <AppLogo size={ELogoSize.small} />
      <div>Other header items</div>
    </header>
  );
};
