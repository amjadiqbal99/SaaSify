import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard: React.FC = () => {
    const { user, loading, error } = useAuth();

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

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
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {getGreeting()}, {user.name}!
                    </h1>
                    <button
                        onClick={() => alert('Logging out...')}
                        className="px-4 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Logout
                    </button>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Here you can manage your projects, view analytics, and more.
                </p>
                <div className="mt-6">
                    <button className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Create New Project
                    </button>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Recent Activity
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        No recent activity to display. Start by creating a new project!
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;