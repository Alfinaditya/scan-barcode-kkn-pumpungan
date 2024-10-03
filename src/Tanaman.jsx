import listDataTanaman from '../data.json';
import React from 'react';
import { useParams } from 'react-router-dom';

const Tanaman = () => {
	const params = useParams();
	const tanaman = listDataTanaman.find(
		(tanaman) => tanaman.slug === params.slug
	);
	return (
		<div style={{ width: '80%', margin: 'auto' }}>
			{tanaman ? (
				<>
					<h1
						data-testid="title"
						style={{ textAlign: 'center', marginBottom: 25 }}
					>
						{tanaman.title}
					</h1>
					<img
						data-testid="image"
						style={{
							margin: 'auto',
							display: 'flex',
							borderRadius: 10,
							maxWidth: 500,
							objectFit: 'cover',
						}}
						src={tanaman.mainImage}
						width={'100%'}
						height={500}
					/>
					{/* {tanaman.meaning.length > 0 && (
						<div style={{ marginBottom: 25, marginTop: 25 }}>
							<h1>Pengertian :</h1>
							{tanaman.meaning.map((meaning, i) => (
								<div key={crypto.randomUUID()}>
									<div style={{ display: 'flex' }}>
										{i + 1}.
										<div
											dangerouslySetInnerHTML={{
												__html: meaning,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					)} */}
					{tanaman.benefits.length > 0 && (
						<div style={{ marginBottom: 25, marginTop: 25 }}>
							<h1 data-testid="benefits-title" style={{ marginBottom: 10 }}>
								Manfaat :
							</h1>
							{tanaman.benefits.map((benefits, i) => (
								<div
									data-testid={`benefits-item-${i}`}
									key={crypto.randomUUID()}
								>
									<div style={{ display: 'flex' }}>
										{i + 1}.
										<div
											dangerouslySetInnerHTML={{
												__html: benefits,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					)}
					{tanaman.howToUse.length > 0 && (
						<div style={{ marginBottom: 25, marginTop: 25 }}>
							<h1 data-testid="how-to-use-title" style={{ marginBottom: 10 }}>
								Cara Mengolah :
							</h1>
							{tanaman.howToUse.map((howToUse, i) => (
								<div
									data-testid={`how-to-use-item-${i}`}
									key={crypto.randomUUID()}
								>
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
						<div style={{ marginBottom: 25, marginTop: 25 }}>
							<h1 data-testid="how-to-treat-title">Cara Merawat :</h1>
							{tanaman.howToTreat.map((howToTreat, i) => (
								<div
									data-testid={`how-to-treat-item-${i}`}
									key={crypto.randomUUID()}
								>
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
				</>
			) : (
				<div
					style={{
						height: '100vh',
						textAlign: 'center',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<h1 data-testid="not-found-title">Not Found</h1>
				</div>
			)}
		</div>
	);
};

export default Tanaman;
