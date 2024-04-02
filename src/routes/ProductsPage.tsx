import React, { useEffect, useState } from 'react';
import { IProduct } from '../api/products/types';
import { Box, Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { ProductApi } from '../api/products/ProductApi';
import { ProductsTable } from '../components/ProductsTable';

export const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    ProductApi.getAll({ page: 1, size: 5 }).then((r) => {
      setProducts(r.products);
      setTotalPages(r.totalPages);
    });
  }, []);

  return (
    <Box>
      <h2>Products</h2>
      <ProductsTable products={products} />
    </Box>
  );
};
