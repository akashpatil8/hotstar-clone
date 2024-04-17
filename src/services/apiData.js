const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmEyZTAxMWRjYTQ1Mjc2NGNhZTg0MmFhNjYwNDAzNiIsInN1YiI6IjYwODAzMGExYjA0NjA1MDA1OTQyOWQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rucJt2kvqybIuzTOMupyzyIGdsPVWiifwAaoS9616zk",
  },
};

export async function getTrending() {
  const data = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    options,
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return Error(err);
    });

  return data;
}

export async function getLatest() {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options,
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return Error(err);
    });

  return data;
}

export async function getPopular() {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options,
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return Error(err);
    });

  return data;
}

export async function getUpcoming() {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options,
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return Error(err);
    });

  return data;
}

export async function getTopRated() {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options,
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return Error(err);
    });

  return data;
}

export async function getDetails(query) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${query}?language=en-US`,
    options,
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return Error(err);
    });

  return data;
}
