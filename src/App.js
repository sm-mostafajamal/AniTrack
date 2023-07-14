import Home from "./pages/Home";
import AllAnimes from "./pages/AllAnimes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAnime } from "./redux/animeReducer";
import TopAnimes from "./pages/TopAnimes";
import UpcomingPopularAnimes from "./pages/UpcomingPopularAnimes";
import AnimeDetails from "./pages/AnimeDetails";

function App() {
  const [page, setPage] = useState({ pageName: "home", num: 1 });
  const dispatch = useDispatch();
  const filtersData = useSelector(({ filter }) => filter);

  useEffect(() => {
    for (const filterData in filtersData) {
      if (
        filtersData[filterData].name === page.pageName ||
        page.pageName === "home"
      ) {
        dispatch(
          getAllAnime(
            {
              type: filterData,
              ...filtersData[filterData],
            },
            page.num
          )
        );
      }
    }
    return;
  }, [dispatch, filtersData, page]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="animes" element={<AllAnimes setPage={setPage} />} />
          <Route path="top-animes" element={<TopAnimes setPage={setPage} />} />
          <Route
            path="upcoming-animes"
            element={<UpcomingPopularAnimes setPage={setPage} />}
          />
          <Route path="anime/:id" element={<AnimeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
