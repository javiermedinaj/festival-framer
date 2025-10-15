import React from "react";

// Replace this with the playlist ID you want to embed.
// Example playlist URL: https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M
// The playlist ID is the last segment: 37i9dQZF1DXcBWIGoYBM5M
const PLAYLIST_ID = "6mw3Rzzld1x6tcPbel1U09"; // default example (Today's Top Hits)

const PlayList: React.FC<{ playlistId?: string }> = ({ playlistId }) => {
  const id = playlistId || PLAYLIST_ID;
  const src = `https://open.spotify.com/embed/playlist/${id}`;

  return (
    <div className="w-full py-10 px-2 bg-black flex justify-center">
      <div className="container rounded overflow-hidden max-w-5xl">
        <iframe
          title="spotify-playlist"
          src={src}
          width="100%"
          height={580}
          
          allow="encrypted-media; clipboard-write"
        />
      </div>
    </div>
  );
};

export default PlayList;