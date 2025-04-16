import Image from '../image/Image'
import './leftBar.css'
import { Link } from 'react-router'

const leftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        {/* single item */}
        <Link to='/' className='menuIcon'>
          <Image path='/general/logo.png' alt='' className='logo' />
        </Link>
        {/* end of single item */}
        {/* single item */}
        <Link to='/' className='menuIcon'>
          <Image path='/general/home.svg' alt='' />
        </Link>
        {/* end of single item */}
        {/* single item */}
        <Link to='/create' className='menuIcon'>
          <Image path='/general/create.svg' alt='' />
        </Link>
        {/* end of single item */}
        {/* single item */}
        <Link to='/' className='menuIcon'>
          <Image path='/general/updates.svg' alt='' />
        </Link>
        {/* end of single item */}
        {/* single item */}
        <Link to='/' className='menuIcon'>
          <Image path='/general/messages.svg' alt='' />
        </Link>
        {/* end of single item */}
      </div>
      {/* single item */}
      <Link to='/' className='menuIcon'>
        <img src='/general/settings.svg' alt='' />
      </Link>
      {/* end of single item */}
    </div>
  )
}

export default leftBar
