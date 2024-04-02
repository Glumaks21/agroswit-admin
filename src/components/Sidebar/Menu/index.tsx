import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes/router';

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <MenuList>
      <MenuItem onClick={() => navigate(routes.categories)}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText>Categories</ListItemText>
      </MenuItem>

      <MenuItem onClick={() => navigate(routes.products)}>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText>Products</ListItemText>
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText>Users</ListItemText>
      </MenuItem>
    </MenuList>
  );
};
