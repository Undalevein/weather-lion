export default function Footer({ name }) {
  return (
    <footer>
      <p>{name}</p>
      <p> API used: </p>
      <a href="https://www.weather.gov/documentation/services-web-api">
        U.S. National Weather Service - API Web Service
      </a>
      <p>To access CodeSandbox:</p>
      <a href="https://codesandbox.io/p/sandbox/weather-lion-k9rt2v">
        CodeSandbox Link
      </a>
    </footer>
  );
}
