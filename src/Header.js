export default function Header({ name, path }) {
  return (
    <header>
      <img id="lmu" src={path} />
      <h1 id="title">{name}</h1>
    </header>
  );
}
