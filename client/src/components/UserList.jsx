import React, { useEffect, useState } from 'react';
import axios from "axios"
import UserCard from './UserCard';

export default function UserList() {
    const [ users, setUsers ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);

    const fetchUsers = async (page) => {
        const response = await axios.get(`http://localhost:3000/api/users?page=${page}`);
        console.log(response.data)
        setUsers(response.data.userData);
        setTotalPages(response.data.totalPages);
        console.log(users)
    }

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-6">
                <button
                    onClick={handlePrevClick}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mr-2 text-white rounded ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    Prev
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={handleNextClick}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 ml-2 text-white rounded ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
