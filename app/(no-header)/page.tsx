import Link from 'next/link';
import { AppLogo, ELogoSize } from '../components/app-logo';
import { GitHubSignInBtn } from '../components/github-signin-btn';

export default function HomePage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-between overflow-hidden p-8 bg-transparent">
      <div className="w-2/3 sm:w-1/4 h-fit p-2 rounded-b-full flex flex-col items-center justify-center gap-3">
        <h2 className="text-4xl text-center font-extralight">
          Visualize your GitHub metrics in <span className="text-accent">D3</span>
        </h2>
        <AppLogo size={ELogoSize.large} />
      </div>
      <div className="font-extralight">Sample D3 output here maybe? Yes! Incentive to login</div>
      <div className="p-8 w-fit rounded-full flex flex-col items-center justify-center gap-6">
        <GitHubSignInBtn />
        <Link href={'/about'} className="text-xs underline underline-offset-2">
          What&apos;s this?
        </Link>
      </div>
    </div>
  );
}
