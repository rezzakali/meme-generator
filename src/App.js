import { useEffect, useState } from "react";
import "./App.css";
import Meme from "./Components/Meme";
import Templates from "./Components/Templates";

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  const fetchTemplates = async () => {
    await fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setTemplates(result.data.memes))
      .catch((error) => alert(error.message));
  };
  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center mb-5">Meme Generator</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
