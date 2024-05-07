export default function Form({ children, action, onSubmit }) {
  return (
    <form action={action} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
