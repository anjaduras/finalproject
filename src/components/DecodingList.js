import React, { useState, useEffect, useRef } from 'react';
import '../styles/DecodingList.css';

const DecodingList = ({ items }) => {
  const [decodedItems, setDecodedItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lastItem = items[decodedItems.length];
          if (lastItem) {
            setDecodedItems((prevItems) => [...prevItems, lastItem]);
          }
        }
      });
    }, { threshold: 1 });

    if (items.length > decodedItems.length) {
      observer.observe(document.getElementById('decodingList'));
    }

    return () => observer.disconnect();
  }, [decodedItems, items]);

  return (
    <div id="decodingList" className="decoding-list">
      <ul>
        {decodedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DecodingList;
