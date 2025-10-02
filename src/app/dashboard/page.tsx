import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard: React.FC = () => {
    const { user, loading, error } = useAuth();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-red-500">An error occurred: {error.message}</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-700">Please log in to access the dashboard.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-6 bg-gray-100 dark:bg-gray-900">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Welcome to your Dashboard, {user.name}!
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Here you can manage your projects, view analytics, and more.
                </p>
                {/* Add more dashboard content here */}
                <div className="mt-6">
                    <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                        Create New Project
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;