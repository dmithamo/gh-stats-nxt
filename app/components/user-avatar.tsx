'use client';

import type { Session } from 'next-auth';
import Image from 'next/image';
import { useState } from 'react';

import { signOut } from 'next-auth/react';
import CloseIcon from '../../public/images/circle-xmark.svg';

type Props = {
  user?: Session['user'];
};
export const UserAvatar: React.FC<Props> = ({ user }) => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const toggleIsModalShown = () => setIsModalShown((current) => !current);

  if (!user) return null;

  return (
    <>
      <button onClick={toggleIsModalShown}>
        <Avatar user={user} />
      </button>

      {isModalShown && (
        <div className="fixed top-0 right-0 w-full sm:w-[400px] h-[300px] bg-back shadow rounded border border-back p-8 flex flex-col items-start justify-between">
          <CloseIcon
            onClick={toggleIsModalShown}
            fill="currentColor"
            className=" h-8 w-8 opacity-85 hover:opacity-100 fixed right-6 top-6 cursor-pointer"
          />

          <div className="flex gap-6 items-center">
            <Avatar user={user} isBig />
            <div className="flex flex-col text-lg">
              <span>{user?.name}</span>
              <span>{user?.email}</span>
            </div>
          </div>
          <span className="w-full font-extralight text-xl text-center">
            I might put something here, in future&trade;
          </span>
          <form
            className="w-full"
            action={() => {
              signOut();
            }}
          >
            <button type="submit" className="bg-fore p-2 w-full text-back rounded opacity-85 hover:opacity-100">
              Logout
            </button>
          </form>
        </div>
      )}
    </>
  );
};

const Avatar: React.FC<{ user?: Session['user']; isBig?: boolean }> = ({ user, isBig }) => (
  <Image
    className="rounded-full"
    priority
    height={isBig ? 75 : 40}
    width={isBig ? 75 : 40}
    src={user?.image || ''}
    alt="GitHub user avatar"
  />
);
