export const AppFooter: React.FC = () => (
  <footer className="p-6 bg-black/80 text-white/80 flex justify-between">
    <div>
      <span>Copyright &copy;{new Date().getUTCFullYear()} </span>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://github.com/dmithamo"
        className="underline underline-offset-2"
      >
        dmithamo
      </a>
    </div>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.freepik.com/free-vector/vector-network-background-abstract-polygon-triangle_1306336.htm#from_view=detail_alsolike"
      className="flex items-center"
    >
      Image by ikatod on Freepik
    </a>
  </footer>
);
