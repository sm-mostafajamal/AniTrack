import { useEffect } from "react";
import Home from "./pages/Home";
import { allAnimes } from "./redux/animeReducer";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(allAnimes());
    };
  }, [dispatch]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
