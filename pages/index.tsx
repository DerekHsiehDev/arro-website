import type { NextPage } from "next";
import { Nav } from "../components/navbar";
import { Layout } from "../components/layout";
import { Hero } from "../components/hero";
import { Box } from "../components/styles/box";
import { Features1 } from "../components/features1";
import Head from "next/head";
import { Testimonials } from "../components/testimonials";
import { Statistics } from "../components/statistics";
import { Faq } from "../components/faq";
import { Footer } from "../components/footer";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Arro Social</title>
				<style>
					{`html {
  scroll-behavior: smooth;
}`}
				</style>
			</Head>
			<Layout>
				<Nav />
				<Box as="main">
					<Hero />
					<Features1 />
					<Testimonials />
					<Statistics />
					<Faq />
					<Footer />
				</Box>
			</Layout>
		</>
	);
};

export default Home;
