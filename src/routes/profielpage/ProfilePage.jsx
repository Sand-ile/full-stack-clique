import './profilepage.css'
import Image from '../../components/image/Image'
import { useState } from 'react'
import Collections from '../../components/collections/Collections'
import Gallery from '../../components/gallery/gallery'

const ProfilePage = () => {
  const [type, setType] = useState('saved')
  return (
    <div className='profilePage'>
      <Image
        className='profileImg'
        path='/general/noAvatar.png'
        w={100}
        h={100}
      />
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@John Doe</span>
      <div className='followCount'>10 followers * following 20</div>
      <div className='profileInteractions'>
        <Image path='/general/share.svg' alt='' />
        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path='/general/more.svg' alt='' />
      </div>
      <div className='profileOptions'>
        <span
          onClick={() => setType('created')}
          className={type === 'created' ? 'active' : ''}
        >
          Created
        </span>
        <span
          onClick={() => setType('saved')}
          className={type === 'saved' ? 'active' : ''}
        >
          Saved
        </span>
      </div>
      {type === 'created' ? <Gallery /> : <Collections />}
    </div>
  )
}

export default ProfilePage
