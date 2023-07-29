function DownloadBtn({ label, file, download }) {
  return (
    <a
      href={`/api/pdf/${file}`}
      download={download}
      className="my-1 inline-block rounded border-2 border-outer-space px-6 py-2 text-center text-xs font-medium uppercase leading-tight text-outer-space transition-colors focus:outline-none focus:ring-0 hover:border-supernova hover:text-supernova dark:border-white dark:text-white dark:hover:border-supernova dark:hover:text-supernova"
    >
      {label}
    </a>
  );
}

export default DownloadBtn;
