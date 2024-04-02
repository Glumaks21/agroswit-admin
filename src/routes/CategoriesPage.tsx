import { Button, Collapse, IconButton, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ICategory } from '../api/category/types';
import CategoryApi from '../api/category/CategoryApi';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CategoriesPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    CategoryApi.getAll().then(setCategories);
  }, []);

  return (
    <div>
      <h2>Categories</h2>

      <List>
        {categories.map((c) => (
          <CategoryListItem key={c.id} category={c} />
        ))}
      </List>
    </div>
  );
};

const CategoryListItem = ({ category }: { category: ICategory }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ListItem>
        {category.name}
        <IconButton onClick={() => setOpen(!isOpen)}>
          <ExpandMoreIcon />
        </IconButton>
      </ListItem>
      <Collapse in={isOpen}>
        <ListItem>
          <List>
            {category.subcategories.map((sc) => (
              <ListItem key={sc.id}>{sc.name}</ListItem>
            ))}
          </List>
        </ListItem>
      </Collapse>
    </>
  );
};
