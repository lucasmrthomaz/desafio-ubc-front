import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StudentList from "@/components/StudentList";

export default function Home() {
  return (
    <>
      <Container as="main" className="py-4 px-3 mx-auto">
          <StudentList></StudentList>
      </Container>   
    </>
  );
}
