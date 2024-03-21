import { Button } from '../UI/Button';
import cl from './Header.module.scss';

export const Header = () => {
  return (
    <header className={cl.root}>
      <h1>AgroLogo</h1>

      <div>
        <Button className="outlined">1</Button>
        <Button className="outlined">1</Button>
        <Button className="outlined">1</Button>
      </div>
    </header>
  );
};
