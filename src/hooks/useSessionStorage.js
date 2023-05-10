function useSessionStorage() {

  function setToken(prop, res) {
    sessionStorage.setItem(`${prop}`, JSON.stringify(res))
  };

  function getToken(prop) {
    console.log(prop)
    JSON.parse(sessionStorage.getItem(prop))
  };

  function clearToken(prop) {
    sessionStorage.removeItem(`${prop}`)
  };

  return {
    setToken,
    getToken,
    clearToken
  }
}

export default useSessionStorage;