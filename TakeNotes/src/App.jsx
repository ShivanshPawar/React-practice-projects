import React, { useState, useEffect } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("notes");
      if (saved) setNotes(JSON.parse(saved));
    } catch (err) {
      console.error("Failed to parse notes from localStorage", err);
    }
  }, []);


  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (err) {
      console.error("Failed to save notes to localStorage", err);
    }
  }, [notes]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyNotes = [...notes];
    copyNotes.push({ title, des });
    setNotes(copyNotes);

    setTitle("");
    setDes("");
  };

  const deleteHandler = (index) => {
    const copyNotes = [...notes];
    copyNotes.splice(index, 1);
    setNotes(copyNotes);
  };

  return (
    <div className="w-full bg-[#700306] text-white lg:flex p-10">
      <div className="lg:w-[50%] h-full">
        <h1 className="text-7xl font-semibold reenie-beanie-bold">
          Take Note's
        </h1>

        <p className="mt-2 text-2xl font-light reenie-beanie-regular">
          Your personal note-taking app to capture ideas, organize thoughts, and
          boost productivity. Simple, intuitive, and always accessible.
        </p>

        <h2 className="mt-5 text-5xl font-semibold reenie-beanie-bold">
          Create Now :
        </h2>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="mt-5 lg:w-[70%] h-[60%] bg-white p-10 rounded flex flex-col gap-5 text-black"
        >
          <label className="text-4xl reenie-beanie-regular">Topic :</label>

          <input
            className="border border-black p-2 rounded"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label className="text-4xl reenie-beanie-regular">
            Description :
          </label>

          <textarea
            rows={5}
            className="border border-black p-2 rounded"
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
          />
          <button className="bg-[#700306] text-white p-2 text-2xl rounded reenie-beanie-bold active:scale-95">
            Create Note
          </button>
        </form>
      </div>

      <div
        id="note-wrapper"
        className="lg:w-[50%] h-screen lg:border-l-2 pl-10 overflow-auto mt-10 lg:mt-0"
      >

        <h2 className="text-5xl font-semibold reenie-beanie-bold">
          Your Notes :
        </h2>

        <div className="w-full flex justify-between flex-wrap gap-5">

          {notes.map(function (note, index) {
            {
              return (
                <div
                  key={index}
                  id="note"
                  className="w-73 h-120 bg-amber-50 relative mt-5 flex flex-col items-center rounded shadow-lg"
                >
                  <h2 className="text-4xl text-center pt-5 reenie-beanie-bold">
                    {note.title}
                  </h2>
                  <div id="note-content" className="m-8 h-80 overflow-auto">
                    <p className="text-center text-black p-2 pt-5 text-2xl reenie-beanie-regular ">
                      {note.des}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      deleteHandler(index);
                    }}
                    className="w-[70%] absolute bottom-4
                   bg-white text-black shadow-2xl p-1 rounded"
                  >
                    Delete Note
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
