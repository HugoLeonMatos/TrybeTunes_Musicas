import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingMessage from './LoadingMessage';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

type Album = {
  collectionId: number;
  collectionName: string;
  // Adicione outros campos necessários aqui
};

function Search() {
  const [artistName, setArtistName] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchResult, setSearchResult] = useState<string>('');
  const [noAlbumsFound, setNoAlbumsFound] = useState<boolean>(false);

  useEffect(() => {
    setIsButtonDisabled(artistName.length < 2);
  }, [artistName]);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await searchAlbumsAPI(artistName);

      if (response.length === 0) {
        setNoAlbumsFound(true);
      } else {
        setAlbums(response);
        setSearchResult(`Resultado de álbuns de: ${artistName}`);
        setArtistName(''); // Limpa o input após a pesquisa bem-sucedida
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="page-search">
      <h1>Pesquisar Artistas</h1>
      <div>
        <input
          type="text"
          data-testid="search-artist-input"
          value={ artistName }
          onChange={ (e) => setArtistName(e.target.value) }
        />
        <button
          data-testid="search-artist-button"
          onClick={ handleSearch }
          disabled={ isButtonDisabled || loading }
        >
          Pesquisar
        </button>
      </div>
      {loading && <LoadingMessage />}
      {searchResult && <p>{searchResult}</p>}
      {albums.length > 0 && (
        <ul>
          {albums.map((album) => (
            <li key={ album.collectionId }>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                {album.collectionName}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {noAlbumsFound && <p>Nenhum álbum foi encontrado</p>}
    </div>
  );
}

export default Search;
