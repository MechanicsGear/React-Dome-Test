const key ='token-key'

const setToken = (data)=>{
    window.localStorage.setItem(key,data)
}

const getToken = ()=>{
    return window.localStorage.getItem(key)
}

const removeToken=()=>{
    window.localStorage.removeItem(key)
}

export {getToken,setToken,removeToken}