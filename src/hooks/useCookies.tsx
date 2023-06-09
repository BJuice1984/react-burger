function useCookies() {
  // Эта функция нормализует работу с временем жизни куки и обрабатывает те случаи, когда время жизни куки не было передано
  type propTypes = {
    [property: string]: number;
  }

  function trimCookie(name: string, value: string, props?: propTypes) {
    props = props || {};
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue === -1) {
        updatedCookie += '=' + propValue;
      }
    }
    document.cookie = updatedCookie;
  };

  function setCookie(prop: string, res: string) {
    let authToken;
    authToken = res.split('Bearer ')[1];
    trimCookie(prop, authToken);
  };

  function getCookie(name: string): string | null {
    const matches = document.cookie.match(
      // eslint-disable-next-line no-useless-escape
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : null;
  };

  function deleteCookie(name: string) {
    trimCookie(name, "", {'max-age': -1})
  };

  return {
    setCookie,
    getCookie,
    deleteCookie,
  }
}

export default useCookies;
