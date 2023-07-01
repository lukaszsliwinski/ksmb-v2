function Background({ bgPhoto }) {
  return (
    <div
      className={`
        m-auto flex h-2/3s items-center justify-center bg-cover bg-fixed bg-center
        ${bgPhoto}
      `}
    >
      <div className="h-full w-full bg-black/60"></div>
    </div>
  );
}

export default Background;
