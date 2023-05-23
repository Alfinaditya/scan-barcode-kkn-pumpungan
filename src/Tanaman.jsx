import listDataTanaman from '../data.json';
import React from 'react';
import { useParams } from 'react-router-dom';

const Tanaman = () => {
  const params = useParams();
  const tanaman = listDataTanaman.find(
    (tanaman) => tanaman.slug === params.slug
  );
  console.log(tanaman.howToUse);
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 25 }}>{tanaman.title}</h1>
      <img
        style={{ margin: 'auto', display: 'flex' }}
        src={tanaman.mainImage}
        width={500}
        height={300}
      />
      {tanaman.benefits.length > 0 && (
        <div style={{ marginBottom: 25, marginTop: 25 }}>
          <h1>Manfaat :</h1>
          {tanaman.benefits.map((benefit, i) => (
            <div key={crypto.randomUUID()}>
              <div style={{ display: 'flex' }}>
                {i + 1}.
                <div
                  dangerouslySetInnerHTML={{
                    __html: benefit,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {tanaman.howToUse.length > 0 && (
        <div style={{ marginBottom: 25 }}>
          <h1>Cara Mengolah :</h1>
          {tanaman.howToUse.map((howToUse, i) => (
            <div key={crypto.randomUUID()}>
              <div style={{ display: 'flex' }}>
                {i + 1}.
                <div
                  dangerouslySetInnerHTML={{
                    __html: howToUse,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {tanaman.howToTreat.length > 0 && (
        <div style={{ marginBottom: 25 }}>
          <h1>Cara Merawat :</h1>
          {tanaman.howToTreat.map((howToTreat, i) => (
            <div key={crypto.randomUUID()}>
              <div style={{ display: 'flex' }}>
                {i + 1}.
                <div
                  dangerouslySetInnerHTML={{
                    __html: howToTreat,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tanaman;
