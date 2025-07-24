import React from 'react'
import ReactDOM from 'react-dom/client'

export default function FormTest() {
    function handleSubmit(formData){

        const email = formData.get("email")
        console.log(email)
    }

    return (
        <section>
            <h1>Sign Up</h1>
            <form action={handleSubmit}>
                <label>Email:
                    <input type="email" placeholder="bob@example.com" name="email" />
                </label>
                <br/>
                <label htmlFor="password" >Password</label>
                <input id="password" type="password" name="password" placeholder="password" />
                <br />
                <button>submit</button>
            </form>
        </section>
    )
}