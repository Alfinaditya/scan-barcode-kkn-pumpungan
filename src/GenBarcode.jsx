import React from 'react';
import listDataTanaman from '../data.json';
import QRCode from 'react-qr-code';

const GenBarcode = () => {
  console.log(window.location.host);
  return (
    <>
      <div style={{ display: 'flex' }}>
        {listDataTanaman.map((tanaman) => (
          <div style={{ marginRight: 15 }} key={crypto.randomUUID()}>
            <h1 style={{ textAlign: 'center' }}>{tanaman.title}</h1>
            <QRCode
              size={230}
              value={`${window.location.host}/${tanaman.slug}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GenBarcode;
