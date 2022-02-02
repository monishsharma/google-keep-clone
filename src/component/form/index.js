import React, { useEffect, useState } from 'react';
import "./style.css";
import { connect } from 'react-redux'
import { db } from "../../config/firebase"


function Form({
    auth,
    updatePayload
}) {
    const { title: updateTitle, subtitle: updtaeSubtitle, id: updatiionid, isImp: updatedIsImp } = updatePayload;
    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState("");
    const [subtitle, setsubTitle] = useState("");
    const { user: { uid = "" } = {} } = auth;
    const [isUpdating, setisUpdating] = useState(false);
    const [showSubtitle, setshowSubtitle] = useState(false);
    const [isImp, setisImp] = useState(false);

    useEffect(() => {
        if (updateTitle || updtaeSubtitle) {
            setisUpdating(true)
            setshowSubtitle(true)
        } else {
            setisUpdating(false);
            setshowSubtitle(false);
        }
        setTitle(updateTitle);
        setsubTitle(updtaeSubtitle);
        setisImp(updatedIsImp);
    }, [updateTitle, updtaeSubtitle, updatePayload])

    useEffect(() => {
        setshowSubtitle(title.length > 0);
    }, [title])

    const onSubmit = (e) => {
        e.preventDefault();
        
       if (title || subtitle) {
        setIsLoading(true);
        const payload = {
            title,
            subtitle,
            pinned: isImp,
            ...(!isUpdating && { date: Date.now() })
        }
        const collection =  uid ? 
            db.collection("notes").doc(auth.user.uid).collection("userNotes")
            :
            db.collection("publicNotes")
        if (isUpdating) {
            collection
            .doc(updatiionid)
            .update(payload)
            .then((res) => {
                setTitle("");
                setisUpdating(false)
                setsubTitle("");
                setisImp(false);
                setIsLoading(false);
            })
       } else {
            collection
            .add(payload)
            .then((res) => {
                setTitle("");
                setisUpdating(false)
                setsubTitle("");
                setisImp(false);
                setIsLoading(false);
            })
       }
        }
        
    }

    const onBLurCallback = () => {
        if (title.length > 0) {
            setshowSubtitle(true);
        } else {
            setshowSubtitle(false)
        }
    }

    const toogleStar = () => {
        setisImp(!isImp);
    }

    return (
        <div className="formContianer clone">
            {
                auth.user.uid ? <h1>{`Welcome, ${auth.user.displayName}`}</h1> : <h1>Google Keep Clone</h1>
            }
            
            <form onSubmit={onSubmit} className="createNote">
                {
                    isImp ? <i class="fas fa-star pinned" onClick={toogleStar}></i> : <i class="far fa-star pinned" onClick={toogleStar}></i>
                }
                <input  disabled={isLoading} onFocus={() => setshowSubtitle(true)} onBlur={onBLurCallback} value={title} onChange={(e) => setTitle(e.target.value)} placeHolder={"Title"} />
                {showSubtitle && <textarea disabled={isLoading} value={subtitle} onChange={(e) => setsubTitle(e.target.value)}  placeHolder={"Take a Note"} />}
                <button onClick={onSubmit}>
                    <span>+</span>
                </button>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form)
