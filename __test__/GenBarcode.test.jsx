import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import listDataTanaman from '../data.json';
import GenBarcode from '../src/GenBarcode';

describe('Gen Barcode', () => {
	test('render tanaman barcode item', () => {
		render(<GenBarcode />);
		listDataTanaman.forEach((_item, i) => {
			const container = screen.getByTestId(`barcode-tanaman-item-${i}`);
			const title = screen.getByTestId(`barcode-tanaman-title-${i}`);
			const barcode = screen.getByTestId(`barcode-tanaman-value-${i}`);
			expect(container).toBeInTheDocument();
			expect(title).toBeInTheDocument();
			expect(barcode).toBeInTheDocument();
		});
	});
});
