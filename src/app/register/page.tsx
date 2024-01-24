'use client'

import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"

interface registerProps {

}

export default function Login(props: registerProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                name,
                email,
                password
            })
        })

        router.push('/login')
    }


    const placeholders = {
        email: "name@example.com",
        password: "Password",
        name: "Name"
    }

    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal text-center">Please register</h1>
                <div className="mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder={placeholders.name} 
                    required 
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder={placeholders.email} 
                    required
                     onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder={placeholders.password} 
                    required
                     onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>
    )
}