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

export function setCookie(prop: string, res: string) {
  let authToken;
  authToken = res.split('Bearer ')[1];
  trimCookie(prop, authToken);
};

export function getCookie(name: string): string | null {
  const matches = document.cookie.match(
    // eslint-disable-next-line no-useless-escape
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : null;
};

export function deleteCookie(name: string) {
  trimCookie(name, "", {'max-age': -1})
};

//SessionSorage

export function setToken(prop: string, res: string): void {
  sessionStorage.setItem(`${prop}`, JSON.stringify(res))
};

export function getToken(prop: string): string | null {
  let token = sessionStorage.getItem(prop);
  if (token) return JSON.parse(token);
  return null;
};

export function clearToken(prop: string): void {
  sessionStorage.removeItem(`${prop}`)
};