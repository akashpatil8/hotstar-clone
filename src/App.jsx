import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import MySpace from "./pages/MySpace";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="myspace" element={<MySpace />} />
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="series" element={<Series />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
