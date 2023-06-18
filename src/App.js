import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { appendAnimes, appendPagination } from "./redux/animeReducer";
import { useDispatch } from "react-redux";
import { getAll } from "./services/animeService";
import { useQuery } from "react-query";
function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { isLoading, data, error } = useQuery(
    ["animes", page],
    () => getAll(page),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      retryDelay: 3000,
    }
  );
  useEffect(() => {
    if (data) {
      dispatch(appendAnimes(data.data));
      dispatch(appendPagination(data.pagination));
    }
  }, [data, dispatch]);

  return (
    <div className="App">
      <Home setPage={setPage} isLoading={isLoading} />
    </div>
  );
}

export default App;
