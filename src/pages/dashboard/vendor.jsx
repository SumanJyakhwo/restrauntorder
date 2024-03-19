import React, { useState } from "react";

function Vendor() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [information, setInformation] = useState("");
  const [description, setDescription] = useState("");
  const [editingCustomerId, setEditingCustomerId] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleInformationChange = (event) => {
    setInformation(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    if (editingCustomerId) {
      // Editing an existing customer
      const updatedCustomer = {
        id: editingCustomerId,
        name: name,
        address: address,
        information: information,
        description: description,
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
        information: information,
        description: description,
      };
      setCustomers([...customers, newCustomer]);
    }

    // Reset the form fields
    setName("");
    setAddress("");
    setInformation("");
    setDescription("");
  };

  const handleEdit = (id) => {
    const selectedCustomer = customers.find((c) => c.id === id);
    if (selectedCustomer) {
      setName(selectedCustomer.name);
      setAddress(selectedCustomer.address);
      setInformation(selectedCustomer.information);
      setDescription(selectedCustomer.description);
      setEditingCustomerId(id);
    }
  };

  const handleRemove = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  return (
    <section className="container mx-auto p-4 bg-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form fields */}
        <div>
          <label htmlFor="name" className="text-gray-800 font-bold mb-2">
            Vendor Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-500 text-gray-800"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-gray-800 font-bold mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={handleAddressChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-500 text-gray-800"
          />
        </div>
        <div>
          <label htmlFor="information" className="text-gray-800 font-bold mb-2">
            Contact Information:
          </label>
          <input
            type="inf"
            id="information"
            name="information"
            placeholder="Enter your contact number"
            value={information}
            onChange={handleInformationChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-500 text-gray-800"
          />
        </div>
        <div>
          <label htmlFor="description" className="text-gray-800 font-bold mb-2">
            Description:
          </label>
          <input
            type="desc"
            id="description"
            name="description"
            placeholder="Enter your description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-500 text-gray-800"
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-blue-500  rounded hover:bg-blue-600 focus:outline-none "
        >
          {editingCustomerId ? "Update" : "Submit"}
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr>
            <th className="p-2 font-bold border text-gray-800">ID</th>
            <th className="p-2 font-bold border text-gray-800">Vendor Name</th>
            <th className="p-2 font-bold border text-gray-800">Address</th>
            <th className="p-2 font-bold border text-gray-800">
              Contact Information
            </th>
            <th className="p-2 font-bold border text-gray-800">Description</th>
            <th className="p-2 font-bold border text-gray-800">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="p-2 border">{customer.id}</td>
              <td className="p-2 border">{customer.name}</td>
              <td className="p-2 border">{customer.address}</td>
              <td className="p-2 border">{customer.information}</td>
              <td className="p-2 border">{customer.description}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleEdit(customer.id)}
                  className="px-3 py-1 mr-2 text-white bg-blue-500 bg-opacity-50 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(customer.id)}
                  className="px-3 py-1 text-white bg-blue-500 bg-opacity-50 rounded hover:bg-blue-600 focus:outline-none"
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

export default Vendor;