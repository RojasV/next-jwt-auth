'use client'

import { useAppContext } from '@/context'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavMenu() {
    const { isLoggedIn, setIsLoggedIn } = useAppContext()
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("http://localhost:8000/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        setIsLoggedIn(false)
        router.push("/login")
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 w-100">
            <div className="container-fluid">
                <Link href="/" legacyBehavior>
                    <a className="navbar-brand">Home</a>
                </Link>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        {isLoggedIn
                            ?
                            <li className="nav-item">
                                <Link href="/login" legacyBehavior>
                                    <a className="nav-link active" onClick={handleLogout}>Logout</a>
                                </Link>
                            </li>
                            :
                            <>
                                <li className="nav-item">
                                    <Link href="/login" legacyBehavior>
                                        <a className="nav-link active">Login</a>
                                    </Link>
                                </li><li className="nav-item">
                                    <Link href="/register" legacyBehavior>
                                        <a className="nav-link active">Register</a>
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
