import Container from "react-bootstrap/Container";
import StudentList from "@/components/StudentList";
import { useEffect, useState } from "react";
import LoginForm from "@/components/LoginForm";
import Header from "@/components/Header";

export default function Home() {

  const [loginToken, setLoginToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/entrar';
    } else {
      setLoginToken(token)
    }
  }, [])

  return (
    <>
      <Header />
      <Container as="main" className="py-4 px-3 mx-auto">
        {loginToken ? <StudentList></StudentList> : <LoginForm></LoginForm>}
      </Container>
    </>
  );
}
