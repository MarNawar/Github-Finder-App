import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


const GithubUrl = process.env.REACT_APP_GITHUB_URL
const GithubToken = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{
  const initialState = {
    users : [],
    loading: false,
  }

  const [state,dispatch] = useReducer(githubReducer,initialState)


  async function searchUser(text){
    setLoading()

    const params = new URLSearchParams({
      q:text
    })

    const response = await fetch (`${GithubUrl}/search/users?${params}`,{
      headers:{
        Authorization:`token ${GithubToken}`,
      },
    })
    const { items } = await response.json()

    console.log(items)
    

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  function clearUsers(){
    dispatch({
      type: 'GET_USERS',
      payload: [],
    })
  }

  function setLoading(){
    return dispatch({
      type:'SET_LOADING'
    })
  }

  return <GithubContext.Provider value={{
    users: state.users,
    loading: state.loading,
    searchUser,
    clearUsers
  }}>
    {children}
  </GithubContext.Provider>

}

export default GithubContext

