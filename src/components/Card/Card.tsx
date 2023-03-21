import { CardProps } from './Card.props';
import React, { useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';

export const Card = ({ repo, ...props }: CardProps): JSX.Element => {
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector(state => state.github);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    favorites.includes(repo.html_url)
  );
  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
    setIsFavorite(true);
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavorite(repo.html_url);
    setIsFavorite(false);
  };

  return (
    <div
      className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all"
      {...props}
    >
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        {!isFavorite && (
          <button
            className="mt-2 py-1 px-4 max-h-[35px] border border-gray-500 bg-emerald-400 rounded hover:shadow-md hover:bg-emerald-500 transition-all"
            onClick={addToFavorite}
          >
            Add
          </button>
        )}
        {isFavorite && (
          <button
            className="mt-2 py-1 px-4 max-h-[35px] border border-gray-500 bg-red-400 rounded hover:shadow-md hover:bg-red-500 transition-all"
            onClick={removeFromFavorite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};
