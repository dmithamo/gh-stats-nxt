import { AppHeader } from "./app-header";

type Props = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<Props> = ({ children }) => (
  <>
    <main className="min-h-screen flex flex-col">
      <AppHeader />
      <section className="flex-1 p-4">{children}</section>
    </main>
    <footer className="px-4 py-5 bg-fore text-back">
      Footer here: visible on scroll
    </footer>
  </>
);
