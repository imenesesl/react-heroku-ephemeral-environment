export class SearchParams {
  private static urlParams = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
  };

  static get = (query: string) => this.urlParams().get(query);
}
