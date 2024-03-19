import React, { useState } from "react";

function Product() {
  const [customers, setCustomers] = useState([]);
  const [title, setTitle] = useState("");
  const [CP, setCP] = useState("");
  const [SP, setSP] = useState("");
  const [editingCustomerId, setEditingCustomerId] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCPChange = (event) => {
    setCP(event.target.value);
  };

  const handleSPChange = (event) => {
    setSP(event.target.value);
  };

  
  const handleSubmit = () => {
    if (editingCustomerId) {
      // Editing an existing customer
      const updatedCustomer = {
        id: editingCustomerId,
        title: title,
       CP: CP,
       SP: SP,
        
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
        title: title,
        CP: CP,
       SP: SP,
       
      };
      setCustomers([...customers, newCustomer]);
    }

    // Reset the form fields
    setTitle("");
    setCP("");
    setSP("");
    
  };

  const handleEdit = (id) => {
    const selectedCustomer = customers.find((c) => c.id === id);
    if (selectedCustomer) {
      setTitle(selectedCustomer.title);
      setCP(selectedCustomer.CP);
      setSP(selectedCustomer.SP);
    
      setEditingCustomerId(id);
    }
  };

  const handleRemove = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  return (
    <section className="container mx-auto p-4 bg-purple-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form fields */}
        <div>
          <label htmlFor="name" className="text-purple-800 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500 text-purple-800"
          />
        </div>
        <div>
          <label htmlFor="CP" className="text-purple-800 font-bold mb-2">
            CP:
          </label>
          <input
            type="number"
            id="CP"
            name="CP"
            placeholder="Enter your CP price"
            value={CP}
            onChange={handleCPChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500 text-purple-800"
          />
        </div>
        <div>
          <label htmlFor="SP" className="text-purple-800 font-bold mb-2">
            SP:
          </label>
          <input
            type="number"
            id="SP"
            name="Sp"
            placeholder="Enter your SP price"
            value={SP}
            onChange={handleSPChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500 text-purple-800"
          />
        </div>
        <div>
      <label htmlFor="category">Select a category:</label>
      <select>
        <option value="">Select a category</option>
        <option value="clothes">Clothes</option>
        <option value="drinks">Drinks</option>
        <option value="jewelry">Jewelry</option>
        <option value="makeup">Makeup</option>
        <option value="kitchen">Kitchen Products</option>
      </select>
    
    </div>
    <div>
      <label htmlFor="unit">Select a unit:</label>
      <select>
        <option value="">Select a unit</option>
        <option value="clothes">metres</option>
        <option value="drinks">litres</option>
        <option value="jewelry">per piece</option>
       
      </select>
    
    </div>
    

  <label>
    <input type="radio" name="hasStock" value="yes"/>
    Yes
  </label>
  <label>
    <input type="radio" name="hasStock" value="no"/>
    No
  </label>


      </div>

      <div className="mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600 focus:outline-none"
        >
          {editingCustomerId ? "Update" : "Submit"}
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr>
            <th className="p-2 font-bold border text-purple-800">title</th>
            <th className="p-2 font-bold border text-purple-800">CP</th>
            <th className="p-2 font-bold border text-purple-800">SP</th>
            
            
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="p-2 border">{customer.id}</td>
              <td className="p-2 border">{customer.CP}</td>
              <td className="p-2 border">{customer.SP}</td>
              
              <td className="p-2 border">
                <button
                  onClick={() => handleEdit(customer.id)}
                  className="px-3 py-1 mr-2 text-white bg-purple-500 rounded hover:bg-purple-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(customer.id)}
                  className="px-3 py-1 text-white bg-purple-500 rounded hover:bg-purple-600 focus:outline-none"
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

export default Product;
