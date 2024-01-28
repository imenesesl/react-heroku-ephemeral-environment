export const getSearchParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const get = (query: string) => urlParams.get(query);
  return {
    get
  };
};
