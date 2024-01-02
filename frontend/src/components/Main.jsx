import { Container } from "react-bootstrap";

function Main({ children }) {
  return (
    <main className="py-3">
      <Container>{children}</Container>
    </main>
  );
}

export default Main;
