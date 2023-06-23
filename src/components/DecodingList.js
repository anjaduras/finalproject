import React, { useState, useEffect } from 'react';
import '../styles/DecodingList.css';

const DecodingList = ({ items }) => {
  const [isDecoding, setIsDecoding] = useState(false);
  const [decodedItems, setDecodedItems] = useState([]);

  useEffect(() => {
    if (isDecoding) {
      let timeout;
      const decodeItems = () => {
        const lastItem = items[decodedItems.length];
        if (lastItem) {
          setDecodedItems(prevItems => [...prevItems, lastItem]);
          timeout = setTimeout(decodeItems, 200);
        }
      };
      decodeItems();

      return () => clearTimeout(timeout);
    }
  }, [isDecoding, items, decodedItems.length]);

  const startDecoding = () => {
    setIsDecoding(true);
  };

  return (
    <div className="decoding-list">
      <ul>
        {decodedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {!isDecoding && (
        <button onClick={startDecoding}>Start Decoding</button>
      )}
    </div>
  );
};

export default DecodingList;
