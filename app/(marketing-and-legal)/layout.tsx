type Props = {
  children: React.ReactNode;
};

export default function HeaderLessLayout({ children }: Props) {
  return (
    <>
      <section className="p-4">{children}</section>
      <footer className="p-6 bg-black/80 text-white/80 flex items-center gap-1">
        <span>Copyright &copy;{new Date().getUTCFullYear()} </span>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/dmithamo"
          className="underline underline-offset-2"
        >
          dmithamo
        </a>
      </footer>
    </>
  );
}
