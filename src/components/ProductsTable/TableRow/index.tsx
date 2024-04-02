import { Checkbox, TableCell, TableRow } from '@mui/material';
import { IProduct } from '../../../api/products/types';
import { MouseEventHandler } from 'react';

interface TableRowProps {
  product: IProduct;
  checked: boolean;
  onClick: MouseEventHandler<HTMLTableRowElement>;
}

export const ProductTableRow = ({ product, checked, onClick }: TableRowProps) => {
  return (
    <TableRow onClick={onClick}>
      <TableCell>
        <Checkbox checked={checked} />
      </TableCell>
      <TableCell>
        <img src={product.imageUrl} width={50} />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell>{product.producer.name}</TableCell>
      <TableCell>{product.article1CId}</TableCell>
    </TableRow>
  );
};
