import './topBar.css'
import UserButton from '../userButton/userButton'

const topBar = () => {
  return (
    <div className='topBar'>
      {/* search */}

      <div className='search'>
        <img src='/general/search.svg' alt='' />
        <input type='text' className='search' placeholder='search' />
      </div>

      {/* user */}
      <UserButton />
    </div>
  )
}

export default topBar
