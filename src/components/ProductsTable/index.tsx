import { Table, TableBody } from '@mui/material';
import { useState } from 'react';
import { ProductTableRow } from './TableRow';
import { IProduct } from '../../api/products/types';
import { ProductTableHead } from './TableHead';

interface ProductsTableProps {
  products: IProduct[];
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const isAllSelected = () => products.length !== 0 && products.length === selectedIds.length;

  const selectAll = () => {
    if (isAllSelected()) {
      setSelectedIds([]);
    } else {
      const ids = products.map((p) => p.id);
      setSelectedIds(ids);
    }
  };

  const isIdSelected = (id: number) => selectedIds.some((i) => i === id);

  const handleRowClick = (productId: number) => {
    if (isIdSelected(productId)) {
      const filteredIds = selectedIds.filter((id) => id !== productId);
      setSelectedIds(filteredIds);
    } else {
      setSelectedIds([...selectedIds, productId]);
    }
  };

  return (
    <Table className="root">
      <ProductTableHead checked={isAllSelected()} onChange={selectAll} />
      <TableBody>
        {products.map((p) => (
          <ProductTableRow
            key={p.id}
            product={p}
            checked={isIdSelected(p.id)}
            onClick={() => handleRowClick(p.id)}
          />
        ))}
      </TableBody>
    </Table>
  );
};
