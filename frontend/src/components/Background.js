function Background({ bgPhoto }) {
  return (
    <div className={`
      m-auto flex h-[66vh] items-center justify-center bg-cover bg-fixed bg-center
      ${bgPhoto}
      `}
    >
      <div className="h-full w-full bg-black/60"></div>
    </div>
  );
}

export default Background;
