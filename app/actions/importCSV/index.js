"use client";
/**
 * Does the use client automatically work to enable the client side interactivity (https://www.reddit.com/r/nextjs/comments/159909e/what_is_the_big_deal_with_use_client/) or is there additional code needed?
 */
import React, { useState } from 'react';

const ImportCSV = () => {
  const csv = require('csv-parser')
  const fs = require('fs')

  const [csvData, setCsvData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  

  return (
    <>
    </>
  );
};

export default ImportCSV;

/**
 * Example code from the npm install csv-parser site for usage of the csv-parser. Not for use in prod, just for assistance with coding this section
 */

// const csv = require('csv-parser')
// const fs = require('fs')
// const results = [];

// fs.createReadStream('data.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//     // [
//     //   { NAME: 'Daffy Duck', AGE: '24' },
//     //   { NAME: 'Bugs Bunny', AGE: '22' }
//     // ]
//   });
