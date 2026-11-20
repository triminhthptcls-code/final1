function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="h-6 w-3 rounded-l-full bg-orange-500" />
          <span className="text-lg font-bold">FPT Aptech</span>
        </div>

        <nav className="hidden gap-8 text-sm text-gray-500 md:flex">
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Booking</a>
          <a href="#" className="hover:text-blue-600">Locations</a>
        </nav>

        <div className="flex gap-3">
          <button className="rounded bg-orange-500 px-5 py-2 text-sm text-white hover:bg-orange-600">
            Sign In
          </button>
          <button className="rounded border border-blue-700 px-5 py-2 text-sm text-blue-700 hover:bg-blue-50">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header