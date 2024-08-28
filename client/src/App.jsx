import './App.css';
import UserList from './components/UserList';



export default function App() {



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Heliverse</h2>
      <input 
          type="text" 
          placeholder="Search..." 
          className="mb-6 p-2 border border-gray-300 rounded-md shadow-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <UserList />
    </div>
  )
}
