import React, { useState } from "react";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [gender, setGender] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [editingCustomerId, setEditingCustomerId] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
  };

  const handleSubmit = () => {
    if (editingCustomerId) {
      // Editing an existing customer
      const updatedCustomer = {
        id: editingCustomerId,
        name: name,
        address: address,
        telephone: telephone,
        gender: gender,
        registrationNumber: registrationNumber,
      };
      const updatedCustomers = customers.map((c) =>
        c.id === editingCustomerId ? updatedCustomer : c
      );
      setCustomers(updatedCustomers);
      setEditingCustomerId(null);
    } else {
      // Adding a new customer
      const newCustomer = {
        id: Date.now(),
        name: name,
        address: address,
        telephone: telephone,
        gender: gender,
        registrationNumber: registrationNumber,
      };
      setCustomers([...customers, newCustomer]);
    }

    // Reset the form fields
    setName("");
    setAddress("");
    setTelephone("");
    setGender("");
    setRegistrationNumber("");
  };

  const handleEdit = (id) => {
    const selectedCustomer = customers.find((c) => c.id === id);
    if (selectedCustomer) {
      setName(selectedCustomer.name);
      setAddress(selectedCustomer.address);
      setTelephone(selectedCustomer.telephone);
      setGender(selectedCustomer.gender);
      setRegistrationNumber(selectedCustomer.registrationNumber);
      setEditingCustomerId(id);
    }
  };

  const handleRemove = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  return (
    <section className="container mx-auto p-4">
      {/* Form fields */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-800">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block mb-2 font-bold text-gray-800">
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address"
          value={address}
          onChange={handleAddressChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="telephone" className="block mb-2 font-bold text-gray-800">
          Telephone:
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="Enter your telephone number"
          value={telephone}
          onChange={handleTelephoneChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-2 font-bold text-gray-800">
          Gender:
        </label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={handleGenderChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="registrationNumber" className="block mb-2 font-bold text-gray-800">
          Registration Number:
        </label>
        <input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          placeholder="Enter your registration number"
          value={registrationNumber}
          onChange={handleRegistrationNumberChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        >
          {editingCustomerId ? "Update" : "Submit"}
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr>
            <th className="p-2 font-bold border text-gray-800">ID</th>
            <th className="p-2 font-bold border text-gray-800">Name</th>
            <th className="p-2 font-bold border text-gray-800">Address</th>
            <th className="p-2 font-bold border text-gray-800">Telephone</th>
            <th className="p-2 font-bold border text-gray-800">Gender</th>
            <th className="p-2 font-bold border text-gray-800">Registration Number</th>
            <th className="p-2 font-bold border text-gray-800">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="p-2 border">{customer.id}</td>
              <td className="p-2 border">{customer.name}</td>
              <td className="p-2 border">{customer.address}</td>
              <td className="p-2 border">{customer.telephone}</td>
              <td className="p-2 border">{customer.gender}</td>
              <td className="p-2 border">{customer.registrationNumber}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleEdit(customer.id)}
                  className="px-3 py-1 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(customer.id)}
                  className="px-3 py-1text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Customer;
