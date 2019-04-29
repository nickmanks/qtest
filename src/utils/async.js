export const sleep = (timeout)=>
  // eslint-disable-next-line
  new Promise((resolve) => setTimeout(resolve, timeout));
