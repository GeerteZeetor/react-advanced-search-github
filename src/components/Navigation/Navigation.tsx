import { NavigationProps } from './Navigation.props';
import { Link } from 'react-router-dom';

export const Navigation = ({ ...props }: NavigationProps): JSX.Element => {
  return (
    <nav
      {...props}
      className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white"
    >
      <h3 className="font-bold">GitHub Search</h3>
      <span>
        <Link to="/" children="Home" className="mr-2" />
        <Link to="/favorites" children="Favorites" />
      </span>
    </nav>
  );
};
