export default function SpotifySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Favorite Music
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
            Music that inspires her
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-slate-600">
            A glimpse into the songs and playlists she enjoys while researching,
            writing, and reflecting.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl">
            <iframe
              style={{ borderRadius: "16px", border: "none" }}
              src="https://open.spotify.com/embed/track/3cZajhyr8LmtPfHZ9296tj?utm_source=generator"
              width="100%"
              height="152"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Player"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}