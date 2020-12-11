import React, {useState} from "react"
import AddMovieForm from "./AddMovieForm.js"

export default function Movie(props) {
    const {title, genre, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    
    return(
        <div className="movie">
            { !editToggle ?
              <>
                <h1>Title: {title}</h1>
                <p>Genre: {genre}</p>
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteMovie(_id)}>
                    Delete Button
                </button>
                <button className="edit-btn"
                    onClick={ () => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
             </>
            :
             <>
                <AddMovieForm
                    title={title}
                    genre={genre}
                    btnText="Submit Edit"
                    submit={props.editMovie}
                    _id={_id}
                />
                <button
                    onClick = { () => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
             </>
            }
        </div>
    )
}
