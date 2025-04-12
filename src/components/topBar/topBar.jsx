import './topBar.css'
import UserButton from '../userButton/userButton'
import Image from '../image/Image'

const topBar = () => {
  return (
    <div className='topBar'>
      {/* search */}

      <div className='search'>
        <Image src='/general/search.svg' alt='' />
        <input type='text' className='search' placeholder='search' />
      </div>

      {/* user */}
      <UserButton />
    </div>
  )
}

export default topBar
