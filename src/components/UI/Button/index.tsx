import cl from './Button.module.scss';

export const Button = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const classes = [cl.root];
  className?.split(' ').forEach((name) => classes.push(cl[name]));

  return (
    <button className={classes.join(' ')} {...props}>
      {children}
    </button>
  );
};
