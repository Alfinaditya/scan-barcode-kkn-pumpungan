import listDataTanaman from '../data.json';
import React from 'react';
import { useParams } from 'react-router-dom';

const Tanaman = () => {
  const params = useParams();
  const tanaman = listDataTanaman.find(
    (tanaman) => tanaman.slug === params.slug
  );

  return (
    <div style={{ width: '95%', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>{tanaman.title}</h1>
      <img
        style={{ margin: 'auto', display: 'flex' }}
        src={tanaman.mainImage}
        width={500}
        height={300}
      />
      <div>
        <h1>Manfaat :</h1>

        {tanaman.benefits.map((benefit, i) => (
          <div key={crypto.randomUUID()}>
            {i + 1}. {benefit}
          </div>
        ))}
      </div>

      <h1>Cara Mengolah :</h1>
      {tanaman.howToUse.map((howToUse, i) => (
          <div key={crypto.randomUUID()}>
            {i + 1}. {howToUse}
          </div>
        ))}
    </div>
  );
};

export default Tanaman;
