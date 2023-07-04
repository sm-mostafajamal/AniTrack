import Home from "./pages/Home";
import AllAnimes from "./pages/AllAnimes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAnime } from "./redux/animeReducer";

function App() {
  const [page, setPage] = useState({ pageName: "", num: 1 });
  const dispatch = useDispatch();
  const filtersData = useSelector(({ filter }) => filter);

  useEffect(() => {
    for (const filterData in filtersData) {
      if (filterData === page.pageName || page.num === 1) {
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
  }, [dispatch, filtersData, page]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/animes" element={<AllAnimes setPage={setPage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
