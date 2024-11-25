import React, { useState } from "react";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    request: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setIsModalOpen(false);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* Navbar Section */}
      <div className="bg-blue-200 py-8 px-6 -skew-y-2 -skew-x-6">
        <h1 className="text-lg text-red-600 font-bold">Chipper</h1>
      </div>
      <hr className="-skew-y-2 -skew-x-6 mt-6 z-40" />

      {/* Hero Section */}
      <h1 className="text-center text-red-500 font-bold">
        Get high quality food on the go
      </h1>
      <h2 className="mt-12 text-center">
        We aim to deliver five-star meals at a low price
      </h2>

      {/* Image Section */}
      <div className="flex items-center justify-center h-screen">
        <img
          src="Chips.jpg"
          alt="Chips"
          className="rounded-3xl mx-auto w-4/12 h-3/5"
        />
      </div>

      {/* Call-to-Action Section */}
      <div className="box-border float-end mr-24 border-solid border-black mb-24">
        <h1 className="text-7xl">Chipper</h1>
        <button
          className="text-4xl bg-blue-500 text-white px-4 py-2 rounded mt-20"
          onClick={() => setIsModalOpen(true)}
        >
          Sign up
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
              <h2 className="text-xl font-bold mb-4">Sign Up</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    What is your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    What do you need
                  </label>
                  <input
                    type="text"
                    name="request"
                    value={formData.request}
                    onChange={handleInputChange}
                    placeholder="What do you need?"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    type="button"
                    className="bg-gray-300 px-4 py-2 rounded"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
