import { useState } from "react";
import useGeolocation from "./components/useGeolocation/useGeolocation";

// function useGeolocation() {}

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  const { isLoading, error, position, getPosition } = useGeolocation();

  function handelClick() {
    setCountClicks((count) => count + 1);

    getPosition();
  }

  const { lat, lng } = position;

  // const { lat, lng } = position;
  // function getPosition() {
  //   setCountClicks((count) => count + 1);

  //   if (!navigator.geolocation)
  //     return setError("Your browser does not support geolocation");

  //   setIsLoading(true);
  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       setPosition({
  //         lat: pos.coords.latitude,
  //         lng: pos.coords.longitude,
  //       });
  //       setIsLoading(false);
  //     },
  //     (error) => {
  //       setError(error.message);
  //       setIsLoading(false);
  //     }
  //   );
  // }

  return (
    <div>
      <button onClick={handelClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
