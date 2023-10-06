import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


const GithubUrl = "https://api.github.com"
//const GithubToken = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{
  const initialState = {
    user: {},
    users : [],
    repos: [],
    loading: false,
  }

  const [state,dispatch] = useReducer(githubReducer,initialState)


  async function searchUser(text){

    setLoading()

    const params = new URLSearchParams({
      q:text
    })

    const response = await fetch (`${GithubUrl}/search/users?${params}`)
    const { items } = await response.json()

    //console.log(items,"items is not def")
    

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  async function getUser(login){
    setLoading()

    //console.log(login)

    const response = await fetch (`${GithubUrl}/users/${login}`)
    const data = await response.json()

    //console.log(data,"items is not def")
    

    dispatch({
      type: 'GET_USER',
      payload: data,
    })
  }

  async function getUserRepos(login){

    setLoading()

    const params = new URLSearchParams({
      sort: 'created',
    })
    const response = await fetch (`${GithubUrl}/users/${login}/repos?${params}`)

    const data = await response.json()


    dispatch({
      type: 'GET_REPOS',
      payload: data,
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
    user: state.user,
    repos: state.repos,
    searchUser,
    clearUsers,
    getUser,
    getUserRepos
  }}>
    {children}
  </GithubContext.Provider>

}

export default GithubContext

