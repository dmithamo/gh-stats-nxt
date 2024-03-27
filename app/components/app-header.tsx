import { auth } from '@/app/lib/auth';
import clsx from 'clsx';
import { AppLogo } from './app-logo';
import { UserAvatar } from './user-avatar';

export const AppHeader: React.FC = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <header className={clsx('p-3 shadow flex justify-between items-center')}>
      <AppLogo />
      <UserAvatar user={user} />
    </header>
  );
};
