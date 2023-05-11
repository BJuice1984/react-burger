function useCookies() {

  // Эта функция нормализует работу с временем жизни куки и обрабатывает те случаи, когда время жизни куки не было передано
  function trimCookie(name, value, props) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
    document.cookie = updatedCookie;
  };

  function setCookie(prop, res) {    
    let authToken;
    authToken = res.accessToken.split('Bearer ')[1];
    trimCookie(prop, authToken);
  };

  function getCookie(name) {
    const matches = document.cookie.match(
      // eslint-disable-next-line no-useless-escape
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  function deleteCookie(name) {
    trimCookie(name, "", {'max-age': -1})
  };

  return {
    setCookie,
    getCookie,
    deleteCookie,
  }
}

export default useCookies;