import React from 'react';
import './style.css';

const NotesApp = () => {
    return (
        <>
            <div className="popup-box">
                <div className="popup show">
                    <div className="content">
                        <header>
                            <p>Add a new note</p>
                            <i className="uil uil-times" />
                        </header>
                        <form action="#">
                            <div className="row tile">
                                <label htmlFor="">Title</label>
                                <input type="text" id="input" defaultValue={""} />
                            </div>
                            <div className="row description">
                                <label htmlFor="">Description</label>
                                <textarea name id defaultValue={""} />
                            </div>
                            <button className="add-note">Add Note</button>
                        </form>
                    </div>
                </div>
                <div className="wrapper">
                    <li className="add-box">
                        <div className="icon"><i className="uil uil-plus" /></div>
                        <p>Add new note</p>
                    </li>
                    <li className="note">
                        <div className="details">
                            <p>This is a Title</p>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus commodi facilis quidem hic molestias, odio consequatur, soluta officia enim delectus adipisci, repellendus et nostrum repudiandae nesciunt. Vitae, ipsa neque?</span>
                        </div>
                    </li>
                </div>
            </div>

        </>
    )
}

export default NotesApp
