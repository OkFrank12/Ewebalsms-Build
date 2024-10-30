import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { useEffect, useState } from "react";
import Loader from "./static/Loader";
const App = () => {
  const [isLoading, setLoading] = useState(true);

  // Simulate a delay (I might replace this with actual data fetching)
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay); // Cleanup on unmount
  }, []);
  return (
    <div
      style={{
        transition: "all 0.75s",
      }}
    >
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <RouterProvider router={MainRouter} />
      )}
    </div>
  );
};

export default App;
