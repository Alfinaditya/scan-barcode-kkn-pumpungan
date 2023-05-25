import React from 'react';
import listDataTanaman from '../data.json';
import QRCode from 'react-qr-code';

const GenBarcode = () => {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        {listDataTanaman.map((tanaman) => (
          <div style={{ marginRight: 50 }} key={crypto.randomUUID()}>
            <h1 style={{ textAlign: 'center', width: 600 }}>{tanaman.title}</h1>
            <QRCode
              size={600}
              value={`${window.location.host}/${tanaman.slug}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GenBarcode;
