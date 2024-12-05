import { useEffect, useState } from "react";

type state = {
  data: string | null;
  loading: boolean;
  error: string | null;
};

const ExampleComponent = () => {
  // useState hook manage local state for data and loading status.
  const [state, setState] = useState<state>({
    data: null,
    loading: true,
    error: null,
  });

  //useEffect hook for fetching data when the component mounts
  useEffect(() => {
    //simulating a fetch operation (replace with actual API call)
    setTimeout(() => {
      const fetchData: string = "Hello , this is fetched data!";
      //Uncomment to simulate an error
      //const fetchData = null;

      if (fetchData) {
        setState({ data: fetchData, loading: false, error: null });
      } else {
        setState({ data: null, loading: false, error: "Failed to fetch data" });
      }
    }, 2000); //simulated 2-second delay
  }, []);

  return (
    <div className=" flex flex-wrap max-w-52 justify-center">
      <h1 className="text-center">
        useState and usEffect with typeScript Example
      </h1>
      {state.loading && (
        <p className="text-blue-500 text-center border-2 border-sky-500">
          Loading
        </p>
      )}
      {state.error && (
        <p className="text-red-500 text-center border-2 border-sky-500">
          {state.error}
        </p>
      )}
      {state.data && (
        <p className="text-green-500 text-center shadow-md border-2 border-sky-500">
          {state.data}
        </p>
      )}
    </div>
  );
};

export default ExampleComponent;
