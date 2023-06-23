import React, { useState, useEffect, useRef } from 'react';
import '../styles/DecodingList.css';

const DecodingList = ({ items }) => {
  const [isDecoding, setIsDecoding] = useState(false);
  const [decodedItems, setDecodedItems] = useState([]);
  const decodingListRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 1, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsDecoding(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (decodingListRef.current) {
      observer.observe(decodingListRef.current);
    }

    return () => {
      if (decodingListRef.current) {
        observer.unobserve(decodingListRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isDecoding) {
      let timeout;
      const decodeItems = () => {
        const lastItem = items[decodedItems.length];
        if (lastItem) {
          setDecodedItems((prevItems) => [...prevItems, lastItem]);
          timeout = setTimeout(decodeItems, 200);
        }
      };
      decodeItems();

      return () => clearTimeout(timeout);
    }
  }, [isDecoding, items, decodedItems.length]);

  return (
    <div className="decoding-list" ref={decodingListRef}>
      <ul>
        {decodedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DecodingList;
