import { AppHeader } from "./app-header";

type TLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<TLayoutProps> = ({ children }) => (
  <>
    <main className="h-screen flex flex-col">
      <AppHeader />
      <section className="flex-1">{children}</section>
    </main>
    <footer className="p-8 bg-fore text-back">
      Footer here: visible on scroll
    </footer>
  </>
);
