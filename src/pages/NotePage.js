import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
    let params = useParams();
    // let noteId = params.id;
    let [note,setNote] = useState(null)

    useEffect(() =>{
        getNote();
    },[params.id])

    let getNote = async () =>{
        let response = await fetch(`/api/notes/${params.id}`);
        let data = await response.json();
        setNote(data);
    }

  return (
    <div className='note' >
      <div className="note-header">
        <h3>
          <Link to="/" >
            <ArrowLeft/>
          </Link>
        </h3>
      </div>
        <textarea onChange={(e) => {setNote({...note,'body':e.target.value})}}  defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage