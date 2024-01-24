'use client'

import Image from 'next/image'
import styles from '../page.module.css'
import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

interface loginProps {

}

export default function Login(props: loginProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const placeholders = {
        email: "name@example.com",
        password: "Password"
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                email,
                password
            })
        })

        router.push("/")
    }

    return (
        <div className={styles.main}>
            {/* <ComponentTest text='TESTE' /> */}
            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
            <main className="form-signin">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder={placeholders.email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder={placeholders.password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}