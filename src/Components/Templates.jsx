import React from "react";
import "../App.css";

function Templates({ templates, setMeme }) {
  return (
    <div className="template">
      {templates.map((template, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setMeme(template);
            }}
          >
            <img src={template.url} alt={template.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Templates;
