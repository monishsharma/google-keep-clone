import React from 'react';
import "./style.css";
import edit from "../../images/icons8-edit.svg";

const Note = ({
    note,
    updateNotes
}) => {
    return (
        <div >
            <div  className="note" id={note.id}>
                <div>
                    <img src={edit} alt="edit" onClick={() => updateNotes(note)} />
                    {/* <img src={deleteImg} alt="edit" onClick={() => updateNotes(note)} /> */}
                </div>
                <div>
                    <h1>{note.data.title}</h1>
                    <p>{note.data.subtitle}</p>
                </div>

            </div>
        </div>
    )
}

export default Note;
