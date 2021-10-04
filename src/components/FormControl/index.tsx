type FormControlProps = {
  children: React.ReactNode;
  onSubmit: () => void;
  className?: string;
};

const FormControl = ({ children, onSubmit, className }: FormControlProps) => (
  <form onSubmit={onSubmit} className={` w-full space-y-5 space ${className}`}>
    {children}
  </form>
);

export default FormControl;
