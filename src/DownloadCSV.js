import React from 'react';

const DownloadCSV = ({ data, fileName }) => {
  const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in array[i]) {
        if (line !== '') line += ',';

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  };

  const downloadCSV = () => {
    const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = csvURL;
    link.download = `${fileName}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadCSV} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download CSV</span>
</button>
    // <button onClick={downloadCSV}>Download CSV</button>
  );
}

export default DownloadCSV;