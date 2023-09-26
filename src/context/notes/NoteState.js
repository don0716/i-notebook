import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "6500de62301065a568b50e3c",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title updated",
          "description": "Please wake me up early today dfsd",
          "tag": "Personal",
          "date": "2023-09-12T21:55:46.393Z",
          "__v": 0
        },
        {
          "_id": "6500de62301065a568b50e40",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T21:55:46.740Z",
          "__v": 0
        },
        {
          "_id": "6500e385fd4f608cd39fe753",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T22:17:41.356Z",
          "__v": 0
        },
        {
          "_id": "6500eb383e368a193c93d89d",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T22:50:32.167Z",
          "__v": 0
        },
        {
          "_id": "6500de62301065a568b50e40",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T21:55:46.740Z",
          "__v": 0
        },
        {
          "_id": "6500e385fd4f608cd39fe753",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T22:17:41.356Z",
          "__v": 0
        },
        {
          "_id": "6500eb383e368a193c93d89d",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T22:50:32.167Z",
          "__v": 0
        },
        {
          "_id": "6500de62301065a568b50e40",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T21:55:46.740Z",
          "__v": 0
        },
        {
          "_id": "6500e385fd4f608cd39fe753",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T22:17:41.356Z",
          "__v": 0
        },
        {
          "_id": "6500eb383e368a193c93d89d",
          "user": "6500c728dbb168646fb6789a",
          "title": "My Title",
          "description": "Please wake me up early today",
          "tag": "Personal",
          "date": "2023-09-12T22:50:32.167Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

    return (
        <noteContext.Provider value={{notes, setNotes}} >
            {props.children}
        </noteContext.Provider >
    )
}

export default NoteState;