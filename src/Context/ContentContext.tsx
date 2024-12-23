// @ts-nocheck
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [contents, setContents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/api/content');
        setContents(response.data.data.contents.data);
        console.log(response.data.data)
        setCategories(response.data.data.categories); // Assuming categories are part of the API response
      } catch (err) {
        setError(err.message || 'Error fetching data');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  const [categories, setCategories] = useState([]);

  return (
    <ContentContext.Provider value={{ contents, categories, isLoading, error }}>
      {children}
    </ContentContext.Provider>
  );
  
};
