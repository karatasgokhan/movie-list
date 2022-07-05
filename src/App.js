import "./App.css";
import { useGetTheMovieApiQuery } from "./store/apis/TheMovieApi";

function App() {
  const { data } = useGetTheMovieApiQuery("", {
    refetchOnMountOrArgChange: true,
  });

  // console.log("data", data);

  return <div className="App"></div>;
}

export default App;
