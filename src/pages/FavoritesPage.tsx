import { useAppSelector } from '../hooks/redux';

export const FavoritesPage = (): JSX.Element => {
  const { favorites } = useAppSelector(state => state.github);
  if (favorites.length === 0)
    return <p className="text-center">No favorite items..</p>;
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites &&
          favorites.map(f => (
            <li key={f} className="border border-gray-400 rounded-md py-2 px-4">
              <a href={f} target="_blank" rel="noreferrer">
                {f}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
