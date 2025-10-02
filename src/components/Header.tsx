import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    SaaS Starter Kit
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/api/auth/signin">Login</Link>
                        </li>
                        <li>
                            <Link href="/api/auth/signup">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;