import { Menu } from './Menu';
import cl from './Sidebar.module.scss';

// const menuItems = [
//   {
//     name: 'Categories',
//     icon: 'temp',
//   },
// ];

export const Sidebar = () => {
  return (
    <aside className={cl.root}>
      <div>Sidebar</div>
      <Menu />
    </aside>
  );
};
