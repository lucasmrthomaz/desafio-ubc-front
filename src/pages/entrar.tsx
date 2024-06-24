import LoginForm from "@/components/LoginForm";
import { Container } from "react-bootstrap";

export default function Entrar() {
    return (
      <>
        <Container as="main" className="py-4 px-3 mx-auto">
            <LoginForm></LoginForm>
        </Container>   
      </>
    );
  }
  