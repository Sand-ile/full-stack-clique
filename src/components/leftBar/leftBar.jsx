import Image from '../image/Image'
import './leftBar.css'

const leftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        {/* single item */}
        <a href='/' className='menuIcon'>
          <Image path='/general/logo.png' alt='' className='logo' />
        </a>
        {/* end of single item */}
        {/* single item */}
        <a href='' className='menuIcon'>
          <Image path='/general/home.svg' alt='' />
        </a>
        {/* end of single item */}
        {/* single item */}
        <a href='' className='menuIcon'>
          <Image path='/general/create.svg' alt='' />
        </a>
        {/* end of single item */}
        {/* single item */}
        <a href='' className='menuIcon'>
          <Image path='/general/updates.svg' alt='' />
        </a>
        {/* end of single item */}
        {/* single item */}
        <a href='' className='menuIcon'>
          <Image path='/general/messages.svg' alt='' />
        </a>
        {/* end of single item */}
      </div>
      {/* single item */}
      <a href='' className='menuIcon'>
        <Image path='/general/settings.svg' alt='' />
      </a>
      {/* end of single item */}
    </div>
  )
}

export default leftBar
