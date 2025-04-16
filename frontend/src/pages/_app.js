import "@/styles/globals.css";
import { ApolloProvider } from '@apollo/client'
import client from "@/lib/apollo-client";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
