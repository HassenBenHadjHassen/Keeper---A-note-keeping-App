import React, { useState } from "react";

function CreateArea(props) {
  const [details, setDetails] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setDetails((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  function preventReset(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={preventReset}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={details.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={details.content}
        />
        <button
          onClick={() => {
            props.onAdd(details);
            setDetails({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
