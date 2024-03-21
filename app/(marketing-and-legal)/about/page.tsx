import { AppLogo } from "@/app/components/app-logo";

export default function AboutPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-start gap-4">
      <div className="p-8">
        <AppLogo />
      </div>
      <div className="flex-1 p-4 flex flex-col gap-8">
        <h2 className="text-lg">
          GH Stats is an app I built to get familiar with the D3.js library
        </h2>
        <details>
          <summary className="font-bold text-md">How it works</summary>
          And here will be some info about the architecture of the app or
          whatever
        </details>
        <details>
          <summary className="font-bold text-md">Tech-stack</summary>
          And here will be some info about the tech used to build the app and so
          on
        </details>
        <details>
          <summary className="font-bold text-md">
            Shut up and show me the code
          </summary>
          Yea I haven&apos;t open-sourced the code yet. I might, at some point.
          Check back later&trade;
        </details>
      </div>
    </div>
  );
}
