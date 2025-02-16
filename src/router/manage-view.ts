const VIEW = 'view';

export const getView = () => {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(VIEW) ?? 'tic-tac-toe';
};

export const setView = (route: string) => {
  const url = new URL(location.href);
  url.searchParams.set(VIEW, route);
  history.pushState({}, '', url);
};
