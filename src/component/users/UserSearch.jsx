import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'


function UserSearch() {
  const [text, setText] = useState('')

  const { users, searchUser, clearUsers } = useContext(GithubContext)

  const { setAlert } = useContext(AlertContext)

  function handleChange(e){
    //console.log(e.target.value)
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(text===''){
      setAlert("please enter sth",'error')
      return
    }
    searchUser(text)
    setText('')
  }

  function handleClear(){
    clearUsers()
    setText('')
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:frid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form>
          <div className="form-control">
            <div className="relative">
              <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" value={text} onChange={(e)=>handleChange(e)}/>

              <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" onClick={(e)=>handleSubmit(e)}>Go</button>

            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length>0&&
        <button className="btn btn-ghost btn-lg" onClick={handleClear}>Clear</button>}
      </div>
    </div>
  )
}

export default UserSearch