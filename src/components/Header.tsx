import logo from '../images/logo.svg'

function Header() {
  return (
    <>
      <header className='topheader absolute z-10 p-18 w-full flex items-center justify-start'>
        <img className='logo' src={logo} alt="logo" />
        <nav className='topheader__nav ml-8'>
          <ul className='topheader__list flex gap-6 text-[var(--White)] font-semibold'>
            <li className='topheader__list-item'><button>Home</button></li>
            <li className='topheader__list-item'><button>Shop</button></li>
            <li className='topheader__list-item'><button>About</button></li>
            <li className='topheader__list-item'><button>Contact</button></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
