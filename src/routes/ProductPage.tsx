import { Await, LoaderFunctionArgs, defer, useAsyncValue, useLoaderData } from 'react-router-dom';
import { ProductApi } from '../api/products/ProductApi';
import { IProduct } from '../api/products/types';
import { Box, Stack } from '@mui/material';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = parseInt(params.id || '0');
  return defer({ product: await ProductApi.getById(id) });
};

export const ProductPage = () => {
  const { product } = useLoaderData() as { product: IProduct };

  return (
    <div>
      <Await resolve={product}>
        <ProductInfo />
      </Await>
    </div>
  );
};

const ProductInfo = () => {
  const product = useAsyncValue() as IProduct;

  return (
    <Box>
      <Stack direction="row">
        <img src={product.imageUrl} width={100} alt="Product image" />
        <Box>{product.name}</Box>
      </Stack>
    </Box>
  );
};
