import React, { useState } from "react";

function Meme({ meme, setMeme }) {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "testy10",
    password: "Keyboards@#1",
    boxes: [],
  });
  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });

    console.log(url);
  };

  return (
    <div className="memeDiv">
      <img src={meme.url} alt={meme.name} className="memeImage" />
      <br />
      <br />
      {[...Array(meme.box_count)].map((_, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Meme Caption ${index + 1}`}
          onChange={(e) => {
            const newBoxes = form.boxes;
            newBoxes[index] = { text: e.target.value };
            setForm({ ...form, boxes: newBoxes });
          }}
        />
      ))}
      <button className="btn btn-primary" onClick={generateMeme}>
        Generate Meme
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setMeme(null);
        }}
      >
        Choose Meme
      </button>
    </div>
  );
}

export default Meme;
