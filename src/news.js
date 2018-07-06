const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=0241fd544c504e7495e3dd362131a636";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}