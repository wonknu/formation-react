export const getLocaleFromHostname = () => {
  return window.location.hostname.split('.')[1];
};

export const getLocale = () => {
  const localeHostname = getLocaleFromHostname();

  return localeHostname;
};
