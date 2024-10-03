import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Tanaman from '../src/Tanaman';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import listDataTanaman from '../data.json';

describe('Tanaman UI', () => {
	test('render tanaman title', () => {
		render(
			<MemoryRouter initialEntries={['/tanaman/aglaonema']}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		const element = screen.getByTestId('title');
		expect(element).toBeDefined();
	});
	test('render tanaman image', () => {
		render(
			<MemoryRouter initialEntries={['/tanaman/aglaonema']}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		const element = screen.getByTestId('image');
		expect(element).toBeDefined();
	});
	test('render tanaman benefits title', () => {
		render(
			<MemoryRouter initialEntries={['/tanaman/aglaonema']}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		const element = screen.getByTestId('benefits-title');
		expect(element).toBeDefined();
	});
	test('render tanaman benefits item', () => {
		const slug = 'aglaonema';
		const tanaman = listDataTanaman.find((tanaman) => tanaman.slug === slug);
		render(
			<MemoryRouter initialEntries={[`/tanaman/${slug}`]}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		tanaman.benefits.forEach((_item, i) => {
			const element = screen.getByTestId(`benefits-item-${i}`);
			expect(element).toBeInTheDocument();
		});
	});
	test('render tanaman how to use title', () => {
		render(
			<MemoryRouter initialEntries={['/tanaman/bidara']}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		const element = screen.getByTestId('how-to-use-title');
		expect(element).toBeDefined();
	});
	test('render tanaman how to use item', () => {
		const slug = 'bidara';
		const tanaman = listDataTanaman.find((tanaman) => tanaman.slug === slug);
		render(
			<MemoryRouter initialEntries={[`/tanaman/${slug}`]}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		tanaman.howToUse.forEach((_item, i) => {
			const element = screen.getByTestId(`how-to-use-item-${i}`);
			expect(element).toBeInTheDocument();
		});
	});
	test('render tanaman how to treat title', () => {
		render(
			<MemoryRouter initialEntries={['/tanaman/bidara']}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		const element = screen.getByTestId('how-to-treat-title');
		expect(element).toBeDefined();
	});
	test('render tanaman how to treat item', () => {
		const slug = 'bidara';
		const tanaman = listDataTanaman.find((tanaman) => tanaman.slug === slug);
		render(
			<MemoryRouter initialEntries={[`/tanaman/${slug}`]}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		tanaman.howToTreat.forEach((_item, i) => {
			const element = screen.getByTestId(`how-to-treat-item-${i}`);
			expect(element).toBeInTheDocument();
		});
	});
	test('render tanaman not found', () => {
		render(
			<MemoryRouter initialEntries={['/tanaman/fdfdfdfdfdfd']}>
				<Routes>
					<Route path="/tanaman/:slug" element={<Tanaman />} />
				</Routes>
			</MemoryRouter>
		);
		const element = screen.getByTestId('not-found-title');
		expect(element).toBeDefined();
	});
});

describe('Tanaman Data', () => {
	test('render correct JSON array format', () => {
		expect(Array.isArray(listDataTanaman)).toBe(true);

		listDataTanaman.forEach((item, index) => {
			expect(typeof item).toBe('object');

			expect(item).toHaveProperty('slug');
			expect(typeof item.slug).toBe('string');

			expect(item).toHaveProperty('title');
			expect(typeof item.title).toBe('string');

			expect(item).toHaveProperty('benefits');
			expect(Array.isArray(item.benefits)).toBe(true);
			item.benefits.forEach((benefits) => {
				expect(typeof benefits).toBe('string');
			});

			// UNUSED
			// expect(item).toHaveProperty('meaning');
			// expect(Array.isArray(item.meaning)).toBe(true);
			// item.meaning.forEach((meaning) => {
			// 	expect(typeof meaning).toBe('string');
			// });

			expect(item).toHaveProperty('howToUse');
			expect(Array.isArray(item.howToUse)).toBe(true);
			item.howToUse.forEach((howToUse) => {
				expect(typeof howToUse).toBe('string');
			});

			expect(item).toHaveProperty('howToTreat');
			expect(Array.isArray(item.howToTreat)).toBe(true);
			item.howToTreat.forEach((howToTreat) => {
				expect(typeof howToTreat).toBe('string');
			});

			// // Optional: validate specific values if needed
			// expect(item.id).toBe(index + 1);
		});
	});
});
