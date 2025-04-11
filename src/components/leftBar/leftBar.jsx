import './leftBar.css'

const leftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        {/* single item */}
        <a href='/' className='menuIcon'>
          <img src='/general/logo.png' alt='' className='logo' />
        </a>
        {/* end of single item */}
        {/* single item */}
        <a href='' className='menuIcon'>
          <img src='/general/home.svg' alt='' />
        </a>
        {/* end of single item */}
        {/* single item */}
        <a href='' className='menuIcon'>
          <img src='/general/create.svg' alt='' />
        </a>
        {/* end of single item */}
        {/* single item */}
        <a href='' className='menuIcon'>
          <img src='/general/updates.svg' alt='' />
        </a>
        {/* end of single item */}
        {/* single item */}
        <a href='' className='menuIcon'>
          <img src='/general/messages.svg' alt='' />
        </a>
        {/* end of single item */}
      </div>
      {/* single item */}
      <a href='' className='menuIcon'>
        <img src='/general/settings.svg' alt='' />
      </a>
      {/* end of single item */}
    </div>
  )
}

export default leftBar
