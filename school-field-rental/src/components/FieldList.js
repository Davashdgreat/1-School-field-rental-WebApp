import React, { useEffect, useState } from 'react';
import { getFields } from '../services/fieldService';

const FieldList = () => {
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // State for loading
  const [errorMessage, setErrorMessage] = useState('');  // State for error

  useEffect(() => {
    const fetchFields = async () => {
      try {
        setIsLoading(true);  // Start loading
        const data = await getFields();  // Fetch data
        setFields(data);  // Set fetched fields in state
        setIsLoading(false);  // Stop loading
      } catch (error) {
        setErrorMessage('Failed to fetch fields');  // Handle error
        setIsLoading(false);  // Stop loading
      }
    };

    fetchFields();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading fields...</p>  // Show loading message
      ) : errorMessage ? (
        <p>{errorMessage}</p>  // Show error message
      ) : (
        <ul>
          {fields.map((field) => (
            <li key={field.id}>{field.name}</li>
          ))}
        </ul>  // Show the fetched field list
      )}
    </div>
  );
};

export default FieldList;
