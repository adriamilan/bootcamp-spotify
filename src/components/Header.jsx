function Header() {
  return (
    <>
      <header>
        <div className="px-8 py-2 bg-white flex flex-wrap items-center justify-center md:justify-between">
          <img className="w-48" src="/spotify-logo.svg" alt="Spotify logo" />
          <nav className="mt-5 md:mt-0">
            <ul className="flex gap-5 text-lg">
              <li>Premium</li>
              <li>Discover</li>
              <li>Help</li>
              <li>Download</li>
            </ul>
          </nav>
        </div>
        <div
          id="header-banner"
          className="h-[92vh] w-full flex flex-nowrap items-center justify-center bg-[url('/header-banner.webp')] bg-cover"
        >
          <div>
            <h1 className="text-7xl text-white font-bold text-center">
              Music for everyone.
            </h1>
            <div className="mt-3">
              <p className="text-2xl text-white text-center">
                Spotify is now free on mobile, tablet and computer.
              </p>
              <p className="text-2xl text-white text-center">
                Listen to the right music, wherever you are.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
