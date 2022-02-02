import React, { useState, useEffect } from 'react'
import Form from '../component/form'
import { connect } from 'react-redux'
import { db } from '../config/firebase'
import "./home.css";

import Header from '../component/header'
import Note from '../component/Note'

export const Home = ({
    auth
}) => {
    const { user: { uid = "" } = {} } = auth;
    const [notes, setNotes] = useState(null);
    const [pinnedNotes, setpinnedNotes] = useState([]);
    const [otherNotes, setotherNotes] = useState([]);
    const [updatePayload, setupdatePayload] = useState({
        title: "",
        subtitle: "",
        id: "",
        isImp: false
    })


    useEffect(() => {
        // if (auth.user && auth.user.uid) {
            setotherNotes([]);
            setpinnedNotes([]);
            const collection =  uid ? 
            db.collection("notes").doc(uid).collection("userNotes").orderBy("date", "desc")
            :
            db.collection("publicNotes").orderBy("date", "desc");
            console.log(collection)
            collection
                .onSnapshot((snapshot) =>
                    setNotes(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data()
                        }))
                    )
                )
        // }
    }, [uid])
    useEffect(() => {
        if (notes) {
            const impNotes = notes.filter((note) => note.data.pinned);
            const otnerNotes = notes.filter((note) => !note.data.pinned);
            setpinnedNotes(impNotes);
            setotherNotes(otnerNotes);

        }
        
    }, [notes])
    const updateNotes = (note) => {
        setupdatePayload({
            title: note.data.title,
            subtitle: note.data.subtitle,
            id: note.id,
            isImp: note.data.pinned
        })
    }

    return (
        <div>
            <Header />
            <Form updatePayload={updatePayload} />

            {
                !pinnedNotes.length && !otherNotes.length && <div className="notes_container" > <h4>Start Adding Some Notes</h4> </div>
            }

            {pinnedNotes.length > 0 && <div className="notes_container">
                <h4>Pinned</h4>
                <div className="notes">
                    {
                        pinnedNotes.map((note, idx) => (
                            <Note
                                key={idx}
                                note={note}
                                updateNotes={(selectedNote) => updateNotes(selectedNote)}
                            />
                        ))
                    }
                </div>
            </div>}
            {otherNotes.length > 0 && <div className="notes_container">
                <h4>Others</h4>

                <div className="notes">
                    {
                        otherNotes.map((note, idx) => (
                            <Note
                                key={idx}
                                note={note}
                                updateNotes={(selectedNote) => updateNotes(selectedNote)}
                            />
                        ))
                    }
                </div>

            </div>}
        </div>
    )
}


const mapStateToProps = ({
    auth
}) => ({
    auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
