import Image from '../image/Image'
import './comments.css'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'

const Comments = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='comments'>
      <div className='commentList'>
        <span className='commentCount'>5 comments</span>
        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              mollitia.
            </p>
            <span className='commentTime'>1 hour ago</span>
          </div>
        </div>
        {/* end of single comment */}

        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              mollitia.
            </p>
            <span className='commentTime'>1 hour ago</span>
          </div>
        </div>
        {/* end of single comment */}

        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              mollitia.
            </p>
            <span className='commentTime'>1 hour ago</span>
          </div>
        </div>
        {/* end of single comment */}

        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              mollitia.
            </p>
            <span className='commentTime'>1 hour ago</span>
          </div>
        </div>
        {/* end of single comment */}

        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              mollitia.
            </p>
            <span className='commentTime'>1 hour ago</span>
          </div>
        </div>
        {/* end of single comment */}
      </div>
      <form className='commentForm'>
        <input type='text' placeholder='Add a comment' />
        <div className='emoji'>
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {open && (
            <div className='emojiPicker'>
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Comments
