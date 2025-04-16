import './createpage.css'
import Image from '../../components/image/Image'

const Createpage = () => {
  return (
    <div className='createpage'>
      <div className='createTop'>
        <h1 className='createTitle'>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className='createBottom'>
        <div className='upload'>
          <div className='uploadTitle'>
            <Image path='general/upload.svg' alt='' />
            <span>Choose a file.</span>
          </div>
          <div className='uploadInfo'>
            We recommend using high quality .jpeg file less than 20MB or .mp4
            files less than 200 MB.
          </div>
        </div>
        <form className='createForm'>
          <div className='createFormItem'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              placeholder='Add a title.'
              name='title'
              id='title'
            />
          </div>

          <div className='createFormItem'>
            <label htmlFor='description'>Description</label>
            <textarea
              rows={6}
              type='text'
              placeholder='Write What You Feel.'
              name='description'
              id='description'
            />
          </div>

          <div className='createFormItem'>
            <label htmlFor='link'>Link</label>
            <input
              type='text'
              placeholder='Add a link.'
              name='link'
              id='link'
            />
          </div>

          {/* Board options */}
          <div className='createFormItem'>
            <label htmlFor='board'>Board</label>
            <select name='board' id='board'>
              <option>Choose a board</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          {/* end of Board options */}

          {/* start of tags */}
          <div className='createFormItem'>
            <label htmlFor='tags'>Tagged Topics</label>
            <input type='text' placeholder='Add a tag' name='tags' id='tags' />
            <small>Don't worry, people won't see your tags</small>
          </div>
          {/* end of tags  */}
        </form>
      </div>
    </div>
  )
}

export default Createpage
