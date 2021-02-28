export function useGetQueryParam(searchParam: string) {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get(searchParam);
}
