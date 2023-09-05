// import React, { useState } from 'react';

// import checkedHeart from '../images/checked_heart.png';
// import emptyHeart from '../images/empty_heart.png';

// interface MusicCardProps {
//   trackName: string;
//   previewUrl: string;
//   isFavorite: boolean;
//   onToggleFavorite: (isFavorite: boolean) => void;
//   trackId: number;
// }

// function MusicCard({ trackName, previewUrl,
//   isFavorite, onToggleFavorite, trackId }: MusicCardProps) {
//   const [isChecked, setIsChecked] = useState(isFavorite);

//   const toggleFavorite = () => {
//     setIsChecked(!isChecked);
//     onToggleFavorite(!isChecked);
//   };

//   return (
//     <div data-testid="music-card">
//       <p>{trackName}</p>
//       <audio data-testid="audio-component" src={ previewUrl } controls>
//         <track kind="captions" />
//         O seu navegador não suporta o elemento
//         {' '}
//         <code>audio</code>
//         .
//       </audio>
//       <label data-testid={ `checkbox-music-${trackId}` }>
//         <input
//           type="checkbox"
//           checked={ isChecked }
//           onChange={ toggleFavorite }
//         />
//         <img
//           src={ isChecked ? checkedHeart : emptyHeart }
//           alt="favorite"
//         />
//       </label>
//     </div>
//   );
// }

// export default MusicCard;
import React, { useEffect, useState } from 'react';

interface MusicCardProps {
  trackName: string;
  previewUrl: string;
  trackId: number;
}

function MusicCard({ trackName, previewUrl, trackId }: MusicCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  console.log(trackId);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite_songs') || '[]');
    setIsChecked(favorites.includes(trackId));
  }, [trackId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorite_songs') || '[]');
    if (isChecked) {
      // Remove da lista de favoritos
      const updatedFavorites = favorites.filter((id: number) => id !== trackId);
      localStorage.setItem('favorite_songs', JSON.stringify(updatedFavorites));
    } else {
      // Adiciona à lista de favoritos
      favorites.push(trackId);
      localStorage.setItem('favorite_songs', JSON.stringify(favorites));
    }
    setIsChecked(!isChecked);
  };

  return (
    <div data-testid="music-card">
      <p>{trackName}</p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
      </audio>
      <label data-testid={ `checkbox-music-${trackId}` }>
        <input
          type="checkbox"
          checked={ isChecked }
          onChange={ toggleFavorite }
        />
        <img
          src={ isChecked ? '/src/images/checked_heart.png'
            : '/src/images/empty_heart.png' }
          alt="favorite"
        />
      </label>
    </div>
  );
}

export default MusicCard;
