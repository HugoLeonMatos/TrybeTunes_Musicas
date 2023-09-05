// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import MusicCard from './MusicCard';
// import getMusics from '../services/musicsAPI';

// type AlbumInfo = {
//   artistName: string;
//   collectionName: string;
// };

// interface MusicData {
//   trackId: number;
//   trackName: string;
//   previewUrl: string;
// }

// function Album() {
//   const { id } = useParams<{ id: string }>();
//   const [loading, setLoading] = useState(true);
//   const [albumData, setAlbumData] = useState<AlbumInfo | {}>({});
//   const [musics, setMusics] = useState<MusicData[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [albumInfo, ...musicData] = await getMusics(id);
//         setAlbumData(albumInfo);
//         setMusics(musicData);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [id]);

//   if (loading) {
//     return <p>Carregando...</p>;
//   }

//   return (
//     <div data-testid="album">
//       <h1 data-testid="artist-name">{(albumData as AlbumInfo).artistName}</h1>
//       <h2 data-testid="album-name">{(albumData as AlbumInfo).collectionName}</h2>
//       {musics.map((music) => (
//         <MusicCard
//           key={ music.trackId }
//           trackName={ music.trackName }
//           previewUrl={ music.previewUrl }
//         />
//       ))}
//     </div>
//   );
// }

// export default Album;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MusicCard from './MusicCard';
import getMusics from '../services/musicsAPI';

type AlbumInfo = {
  artistName: string;
  collectionName: string;
};

interface MusicData {
  trackId: number;
  trackName: string;
  previewUrl: string;
}

function Album() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [albumData, setAlbumData] = useState<AlbumInfo | null>(null);
  const [musics, setMusics] = useState<MusicData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [albumInfo, ...musicData] = await getMusics(id ?? '');
        setAlbumData(albumInfo);
        setMusics(musicData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div data-testid="album">
      {albumData && (
        <>
          <h1 data-testid="artist-name">{albumData.artistName}</h1>
          <h2 data-testid="album-name">{albumData.collectionName}</h2>
        </>
      )}
      {musics.map((music) => (
        <MusicCard
          key={ music.trackId }
          trackName={ music.trackName }
          previewUrl={ music.previewUrl }
        />
      ))}
    </div>
  );
}

export default Album;
