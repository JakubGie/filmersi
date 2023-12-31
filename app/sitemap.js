import axios from "axios";

const URL = "https://filmersi.pl";


async function getMovies() {
  const res = await axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getAllMoviesForSitemap')
  return res.data
}

async function getTv() {
  const res = await axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getAllTvForSitemap')
  return res.data
}

async function getGenres() {
  const res = await axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getAllGenresForSitemap')

  return res.data
}

async function getCountries() {
  const res = await axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getAllCountriesForSitemap')

  return res.data
}

async function getSeries() {
  const res = await axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getAllSeriesForSitemap')

  return res.data
}

async function getPosts() {
  const res = await axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getBlogPostsForSeo')

  return res.data
}

async function getUserPosts() {
  const res = await axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getPostsForSitemap')

  return res.data
}

export default async function sitemap() {

  const movies = await getMovies()
  const tv = await getTv()
  const genres = await getGenres()
  const countries = await getCountries()
  const series = await getSeries()
  const posts = await getPosts()
  const postsU = await getUserPosts()

 


  
  const film = movies.map((route) => ({
    url: `${URL}/film/${route.url}`,
    lastModified: new Date().toISOString()
  }))

  const podobneFilmy = movies.map((route) => ({
    url: `${URL}/film/${route.url}/podobne`,
    lastModified: new Date().toISOString()
  }))

  const calyFilm = movies.map((route) => ({
    url: `${URL}/caly-film/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const calyFilmCda = movies.map((route) => ({
    url: `${URL}/caly-film/${route.url}/cda`,
    lastModified: new Date().toISOString()
  }));

  const calyFilmVider = movies.map((route) => ({
    url: `${URL}/caly-film/${route.url}/vider`,
    lastModified: new Date().toISOString()
  }));

  const calyFilmFilman = movies.map((route) => ({
    url: `${URL}/caly-film/${route.url}/filman`,
    lastModified: new Date().toISOString()
  }));

  const calyFilmZalukaj = movies.map((route) => ({
    url: `${URL}/caly-film/${route.url}/zalukaj`,
    lastModified: new Date().toISOString()
  }));

  const calyFilmVod = movies.map((route) => ({
    url: `${URL}/caly-film/${route.url}/vod`,
    lastModified: new Date().toISOString()
  }));

  const serial = tv.map((route) => ({
    url: `${URL}/serial/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const podobneSeriale = tv.map((route) => ({
    url: `${URL}/serial/${route.url}/podobne`,
    lastModified: new Date().toISOString()
  }));

  const wszystkieOdcinki = tv.map((route) => ({
    url: `${URL}/wszystkie-odcinki/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const filmyGatunek = genres.map((route) => ({
    url: `${URL}/filmy/gatunek/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const serialeGatunek = genres.map((route) => ({
    url: `${URL}/seriale/gatunek/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const filmyKraj = countries.map((route) => ({
    url: `${URL}/filmy/kraj/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const serialeKraj = countries.map((route) => ({
    url: `${URL}/seriale/kraj/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const seria = series.map((route) => ({
    url: `${URL}/czesci/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const posty = posts.map((route) => ({
    url: `${URL}/blog/${route.url}`,
    lastModified: new Date().toISOString()
  }));

  const postyU = postsU.map((route) => ({
    url: `${URL}/post/${route.url}`,
    lastModified: new Date().toISOString()
  }));




  const currentYear = new Date().getFullYear()

  var years = [2]

  for(var i = 1980;i<=currentYear;i++) {
    years.push(i)
  }

  const filmyRok = years.map((route) => ({
    url: `${URL}/filmy/rok/${route}`,
    lastModified: new Date().toISOString()
  }));

  const serialeRok = years.map((route) => ({
    url: `${URL}/seriale/rok/${route}`,
    lastModified: new Date().toISOString()
  }));


 
  const routes = ["", "/filmy", "/seriale", "/listy-tematyczne/filmy", "/aplikacja", "/forum", "/co-obejrzec", "/blog", "/cale-filmy-za-darmo-online", "/aplikacja/polityka-prywatnosci", "/losuj/serial", "/losuj/film", "/twoja-lista", "/filmy/temat/na-wieczor", "/filmy/temat/horrory", "/filmy/temat/stare-horrory", "/filmy/temat/polskie", "/filmy/temat/polskie-klasyki", "/filmy/temat/pieniadze", "/filmy/temat/zagadka", "/filmy/temat/wojna", "/filmy/temat/animacje", "/filmy/temat/komediowe", "/filmy/temat/na-faktach", "/filmy/temat/muzyka-hiphop", "/filmy/temat/bokser"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString()
  }));

 
  return [...routes, ...calyFilm, ...calyFilmCda, ...calyFilmVider, ...calyFilmFilman, ...calyFilmZalukaj, ...calyFilmVod, ...posty, ...wszystkieOdcinki, ...seria, ...podobneFilmy, ...filmyRok, ...serialeRok, ...film, ...serial, ...podobneSeriale, ...filmyGatunek, ...serialeGatunek, ...filmyKraj, ...serialeKraj, ...postyU];
}