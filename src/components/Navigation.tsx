import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[50px] shadow-md  px-5 text-white bg-gray-500">
        <h3 className='font-bold'>Github Search</h3>

        <span>
            <Link to="/" className='mr-2'>Home</Link>
            <Link to="/favourites">Favourites</Link>
        </span>
    </nav>
  )
}
