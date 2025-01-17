"use client"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const UpdateForm = () => {
  const router = useRouter();
  const { data } = router.query;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
  });

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      setFormData({
        name: parsedData.name,
        email: parsedData.email,
        experience: parsedData.experience,
      });
    }
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add logic to save updated data to your database
    console.log('Updated data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Experience:
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;