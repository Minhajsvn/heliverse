import React from 'react'

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="rounded-full w-16 h-16 mx-auto" />
        <h2 className="text-xl font-semibold text-center mt-2">{user.first_name} {user.last_name}</h2>
        <div className="text-gray-600 text-center">
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Domain: {user.domain}</p>
            <p>Available: {user.available ? 'Yes' : 'No'}</p>
        </div>
    </div>
  )
}
