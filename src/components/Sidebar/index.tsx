import { Button } from '../UI/Button';
import cl from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <aside className={cl.root}>
      <div>Sidebar</div>
      <ul>
        <li>
          <Button>Button</Button>
        </li>
        <li>
          <Button>Button</Button>
        </li>
        <li>
          <Button>Button</Button>
        </li>
        <li>
          <Button>Button</Button>
        </li>
      </ul>
    </aside>
  );
};
