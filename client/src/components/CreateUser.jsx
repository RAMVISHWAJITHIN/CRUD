import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Mail, CalendarDays, Send } from 'lucide-react';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("https://crud-3cdd.onrender.com/createUser", { name, email, age })
      .then(result => {
        console.log(result);
        navigate("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e0e5ec] px-4">
      <form
        onSubmit={Submit}
        className="bg-[#e0e5ec] p-8 rounded-2xl shadow-[8px_8px_16px_#b8b9be,_-8px_-8px_16px_#ffffff] w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8 flex items-center justify-center gap-2">
          <UserPlus className="w-6 h-6 text-blue-600" />
          Create User
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-gray-500" /> Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,_inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1 flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-500" /> Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,_inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-1 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-gray-500" /> Age
          </label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,_inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter age"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#e0e5ec] text-blue-600 font-medium py-2 rounded-xl flex items-center justify-center gap-2 shadow-[inset_2px_2px_5px_#b8b9be,_inset_-2px_-2px_5px_#ffffff] hover:shadow-[inset_-2px_-2px_5px_#b8b9be,_inset_2px_2px_5px_#ffffff] transition"
        >
          <Send className="w-5 h-5" />
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;


