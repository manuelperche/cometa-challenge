import type { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";
import Hero from "../components/Hero";
import { APIContextProvider } from "../context";
import CardStudentTotal from "../components/CardStudentTotal";
import CardCuotasPagadas from "../components/CardCuotasPagadas";

const Home: NextPage = () => {
  return (
    <APIContextProvider>
      <Head>
        <title>Colegio Brillamont</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Container maxWidth="md">
        <CardStudentTotal />
        <CardCuotasPagadas />
      </Container>
    </APIContextProvider>
  );
};

export default Home;
