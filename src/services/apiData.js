const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmEyZTAxMWRjYTQ1Mjc2NGNhZTg0MmFhNjYwNDAzNiIsInN1YiI6IjYwODAzMGExYjA0NjA1MDA1OTQyOWQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rucJt2kvqybIuzTOMupyzyIGdsPVWiifwAaoS9616zk",
  },
};

export async function getTrending({ mediaType }) {
  try {
    const data = await fetch(
      // 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
      `https://api.themoviedb.org/3/trending/${mediaType}/day?language=en-US`,
      options,
    ).then((response) => {
      return response.json();
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
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

export async function getTopRated(query) {
  const data = await fetch(
    `https://api.themoviedb.org/3/${query}/top_rated?language=en-US&page=1`,
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

export async function getPopular(query) {
  const data = await fetch(
    `https://api.themoviedb.org/3/${query}/popular?language=en-US&page=1`,
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

export async function getSimilar({ itemId, mediaType }) {
  const data = await fetch(
    // 'https://api.themoviedb.org/3/tv/series_id/similar?language=en-US&page=1'
    `https://api.themoviedb.org/3/${mediaType}/${itemId}/similar?language=en-US&page=1`,
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

export async function getDetails({ itemId, mediaType }) {
  const data = await fetch(
    // 'https://api.themoviedb.org/3/tv/series_id?language=en-US'
    `https://api.themoviedb.org/3/${mediaType}/${itemId}?language=en-US`,
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

export async function getCredits({ itemId, mediaType }) {
  const data = await fetch(
    // https://api.themoviedb.org/3/tv/series_id/credits?language=en-US
    `https://api.themoviedb.org/3/${mediaType}/${itemId}/credits?language=en-US`,
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

export async function getSearched(query) {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
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
