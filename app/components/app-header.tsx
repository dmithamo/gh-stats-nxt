import { AppLogo } from './app-logo';

export const AppHeader: React.FC = () => {
  // show user avatar or login button
  return (
    <header className="p-6 shadow flex justify-between items-center">
      <AppLogo />
    </header>
  );
};
