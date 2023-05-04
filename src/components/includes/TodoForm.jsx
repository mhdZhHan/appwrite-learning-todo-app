import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// appwrite config
import { databases } from '../../configs/appwrite'

function TodoForm() {
    const [todo, setTodo] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const promise = databases.createDocument(
            "6452898c7bc71101e464", // db_d
            "64528997e5125d4dc82a", // collection_id
            uuidv4(), // document_id
            {todo} // data
        )

        promise.then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.log(error)
            }
        )

        setTodo('')
    }

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <form 
                className="flex justify-center mb-10"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Todo"
                    className="border p-2 w-2/3 rounded-md"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                />
                <button
                    className="bg-purple-500 p-2 text-white ml-2 rounded-md"
                    type="submit"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default TodoForm