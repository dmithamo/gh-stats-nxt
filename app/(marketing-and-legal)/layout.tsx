import { AppFooter } from "../components/app-footer";

type Props = {
  children: React.ReactNode;
};

export default function HeaderLessLayout({ children }: Props) {
  return (
    <main className="bg-waves bg-cover bg-bottom relative">
      <section className="py-4 min-h-screen">{children}</section>
      <AppFooter />
    </main>
  );
}
