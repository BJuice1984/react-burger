function useSessionStorage() {
  function setToken(prop: string, res: string): void {
    sessionStorage.setItem(`${prop}`, JSON.stringify(res))
  };

  function getToken(prop: string): string | null {
    let token = sessionStorage.getItem(prop);
    if (token) return JSON.parse(token);
    return null;
  };

  function clearToken(prop: string): void {
    sessionStorage.removeItem(`${prop}`)
  };

  return {
    setToken,
    getToken,
    clearToken
  }
}

export default useSessionStorage;