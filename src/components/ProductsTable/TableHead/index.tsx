import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material';

interface ProductTableHeadProps {
  checked: boolean;
  onChange: () => void;
}

export const ProductTableHead = ({ checked, onChange }: ProductTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox checked={checked} onChange={onChange} />
        </TableCell>
        <TableCell>Image</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Producer</TableCell>
        <TableCell>1C ID</TableCell>
      </TableRow>
    </TableHead>
  );
};
