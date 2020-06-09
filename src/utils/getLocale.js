export const getLocaleFromHostname = () => {
  return window.location.hostname.split('.')[1];
};

export const getLocaleFromPathname = () => {
  const matches = window.location.pathname.match(/[a-z]{2}-[a-z]{2}/);

  return matches && matches[0].split('-')[0];
};

export const getLocale = () => {
  const localeHostname = getLocaleFromHostname();
  const localePathname = getLocaleFromPathname();

  return localePathname ? localePathname : localeHostname;
};
