export const loadHomeData = (data)=> ({
  type: 'home/set-info',
  title: data && data.title ? data.title : null,
  description: data && data.description ? data.description : null,
  dealImg: data && data.dealImg ? data.dealImg : null
});
