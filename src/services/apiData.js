const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmEyZTAxMWRjYTQ1Mjc2NGNhZTg0MmFhNjYwNDAzNiIsInN1YiI6IjYwODAzMGExYjA0NjA1MDA1OTQyOWQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rucJt2kvqybIuzTOMupyzyIGdsPVWiifwAaoS9616zk",
  },
};

export async function getTrending({ mediaType }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/${mediaType}/day?language=en-US`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getLatest() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getTopRated({ mediaType }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/top_rated?language=en-US&page=1`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getPopular({ mediaType }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/popular?language=en-US&page=1`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getUpcoming() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getSimilar({ itemId, mediaType }) {
  const response = await fetch(
    // 'https://api.themoviedb.org/3/tv/series_id/similar?language=en-US&page=1'
    `https://api.themoviedb.org/3/${mediaType}/${itemId}/similar?language=en-US&page=1`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getDetails({ itemId, mediaType }) {
  const response = await fetch(
    // 'https://api.themoviedb.org/3/tv/series_id?language=en-US'
    `https://api.themoviedb.org/3/${mediaType}/${itemId}?language=en-US`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getCredits({ itemId, mediaType }) {
  const response = await fetch(
    // https://api.themoviedb.org/3/tv/series_id/credits?language=en-US
    `https://api.themoviedb.org/3/${mediaType}/${itemId}/credits?language=en-US`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getSearched(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getGenres({ mediaType }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/${mediaType}/list/language=en`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}

export async function getAiringTodayTV() {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await response.json();
  return data;
}
