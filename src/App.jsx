import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import MySpace from "./pages/MySpace";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Search from "./pages/Search";
import Details from "./pages/Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000 * 6,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="myspace" element={<MySpace />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="series" element={<Series />} />
            <Route path="movies" element={<Movies />} />
            <Route path=":mediaType/:movieId" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
