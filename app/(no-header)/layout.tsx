import { AppFooter } from '../components/app-footer';

type Props = {
  children: React.ReactNode;
};

export default function HeaderLessLayout({ children }: Props) {
  return (
    <main className="">
      <section className="py-4 min-h-screen">{children}</section>
      <AppFooter />
    </main>
  );
}
