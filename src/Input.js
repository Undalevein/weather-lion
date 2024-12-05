import { useState } from "react";

export default function Input({ setLatitude, setLongitude }) {
  const [latContent, setLatContent] = useState("");
  const [longContent, setLongContent] = useState("");

  function submit(e) {
    e.preventDefault();
    setLatitude(latContent);
    setLongitude(longContent);
    setLatContent("");
    setLongContent("");
  }

  return (
    <form onSubmit={submit}>
      <input
        value={latContent}
        onChange={(e) => setLatContent(e.target.value)}
        placeholder="Input Latitude:"
      />
      <input
        value={longContent}
        onChange={(e) => setLongContent(e.target.value)}
        placeholder="Input Longitutde:"
      />
      <button onClick={submit}>Submit</button>
    </form>
  );
}
