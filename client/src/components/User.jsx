import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, Trash2, Plus } from 'lucide-react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}`)
      .then(result => {
        setUsers(result.data);
        // console.log(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/deleteUser/${id}`)
    .then(result => {
      // console.log(result.data);
      setUsers(users.filter(user => user._id !== id)); // remove from UI
    })
    .catch(err => console.log(err));
};



  return (
    <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#e0e5ec] rounded-2xl p-6 shadow-[8px_8px_16px_#b8b9be,_-8px_-8px_16px_#ffffff]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">User List</h2>
          <Link
            to="/create"
            className="flex items-center gap-2 bg-[#e0e5ec] px-4 py-2 rounded-xl shadow-[inset_2px_2px_5px_#b8b9be,_inset_-2px_-2px_5px_#ffffff] hover:shadow-[inset_-2px_-2px_5px_#b8b9be,_inset_2px_2px_5px_#ffffff] transition text-gray-700"
          >
            <Plus size={18} />
            Add User
          </Link>
        </div>

        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-gray-600">
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-[#e0e5ec] rounded-xl shadow-[4px_4px_10px_#b8b9be,_-4px_-4px_10px_#ffffff]">
                <td className="px-4 py-3 rounded-l-xl">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.age}</td>
                <td className="px-4 py-3 flex justify-center items-center gap-4 rounded-r-xl">
                  <Link
                    to={`/update/${user._id}`}
                    className="flex items-center gap-1 bg-[#e0e5ec] px-3 py-1.5 rounded-xl shadow-[inset_2px_2px_5px_#b8b9be,_inset_-2px_-2px_5px_#ffffff] hover:shadow-[inset_-2px_-2px_5px_#b8b9be,_inset_2px_2px_5px_#ffffff] text-blue-600 no-underline"
                  >
                    <Pencil size={16} />
                    Edit
                  </Link>

                  <button onClick={(e)=> handleDelete(user._id)}
                    className="flex items-center gap-1 bg-[#e0e5ec] px-3 py-1.5 rounded-xl shadow-[inset_2px_2px_5px_#b8b9be,_inset_-2px_-2px_5px_#ffffff] hover:shadow-[inset_-2px_-2px_5px_#b8b9be,_inset_2px_2px_5px_#ffffff] text-red-600"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;


