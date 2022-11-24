function DownloadBtn({ label }) {
  return (
    <button
      type="button"
      className="my-1 inline-block rounded border-2 border-outer-space px-6 py-2 text-xs font-medium uppercase leading-tight text-outer-space transition duration-150 ease-in-out focus:outline-none focus:ring-0 hover:border-supernova hover:text-supernova dark:border-white dark:text-white"
    >
      {label}
    </button>
  );
}

export default DownloadBtn;
