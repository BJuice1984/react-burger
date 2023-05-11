function useSessionStorage() {

  function setToken(prop, res) {
    sessionStorage.setItem(`${prop}`, JSON.stringify(res))
  };

  //не понятно почему, но при экспорте getToken не достаёт значение из sessionStorage, хотя 'prop' приходит 'refreshToken', как и для setToken или clearToken
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