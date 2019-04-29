export const loadAppData = (data)=> ({
  type: 'loader/set-app-data',
  logo: data && data.logo ? data.logo : null,
  hero: data && data.hero ? data.hero : null
});
