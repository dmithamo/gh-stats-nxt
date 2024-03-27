import { AppLogo } from '@/app/components/app-logo';

export default function AboutPage() {
  return (
    <div className="h-fit w-fit flex flex-col justify-start gap-6 p-8">
      <AppLogo />
      <h2 className="text-lg">
        GH Stats is an app I built to get familiar with the{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 text-accent"
          href="https://d3js.org/"
        >
          D3.js library
        </a>
      </h2>
      <div className="flex-1 flex flex-col gap-8 ">
        <details open>
          <summary className="font-bold text-md">How it works</summary>
          And here will be some info about the architecture of the app or whatever
        </details>
        <details>
          <summary className="font-bold text-md">Tech-stack</summary>
          And here will be some info about the tech used to build the app and so on
        </details>
        <details>
          <summary className="font-bold text-md">Shut up and show me the code</summary>
          Yea I haven&apos;t open-sourced the code yet. I might, at some point. Check back later&trade;
        </details>
      </div>
    </div>
  );
}
