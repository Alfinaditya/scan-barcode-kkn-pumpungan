import React from 'react';
import listDataTanaman from '../data.json';
import QRCode from 'react-qr-code';

const GenBarcode = () => {
	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
				{listDataTanaman.map((tanaman, i) => (
					<div
						data-testid={`barcode-tanaman-item-${i}`}
						style={{ marginRight: 50 }}
						key={crypto.randomUUID()}
					>
						<h1
							data-testid={`barcode-tanaman-title-${i}`}
							style={{ textAlign: 'center', width: 270 }}
						>
							{tanaman.title}
						</h1>
						<QRCode
							data-testid={`barcode-tanaman-value-${i}`}
							size={270}
							value={`${window.location.host}/tanaman/${tanaman.slug}`}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default GenBarcode;
