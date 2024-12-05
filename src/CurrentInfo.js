export default function CurrentInfo({ data, location }) {
  // Heavily Checks if there are nulls when retrieving
  // data from the API.

  console.log(data, location);

  const received = data?.properties?.periods?.[0]?.temperature;

  // Gets temperature data for the current day.
  const currentTemp = received ?? "??";

  return (
    <div id="currentTemp">
      <h2 id="currentTag">Current Tempterature at {location ?? "??"}:</h2>
      <h1 id="temp">{currentTemp} F</h1>
    </div>
  );
}
