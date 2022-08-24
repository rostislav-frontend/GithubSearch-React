import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header className='bg-gray-500'>
      <nav className="flex justify-between items-center h-[60px] text-white container mx-auto">
        <h3 className='font-bold'>Github Search</h3>

        <div className='flex gap-[50px]'>
          <span><Link to="/" className=''>Home</Link></span>
          <span><Link to="/favourites">Favourites</Link></span>
        </div>
      </nav>
    </header>
  )
}
