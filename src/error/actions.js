export const setServiceError = (error)=> ({
  type: 'errors/set-error',
  error
});

export const clearServiceError = ()=> ({
  type: 'errors/clear-error'
});

export const clearAllErrors = ()=> ({
  type: 'errors/clear-all'
});
