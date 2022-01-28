import React from 'react';

import {
  Box,
  Container,
  Grid,
  Link,
  Skeleton,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

import RouteLink from '@/components/RouteLink';
import { useGetNameQuery } from '@/services/local';

const Home = (): JSX.Element => {
  const { data, isSuccess, fulfilledTimeStamp } = useGetNameQuery();

  return (
    <Container>
      <Box>
        Go to <RouteLink href="/new-page">New Page</RouteLink>
        {isSuccess ? (
          `Local API /hello responds called
          ${data?.timestamp || 0 - (fulfilledTimeStamp || 0)}ms ago`
        ) : (
          <Skeleton />
        )}
      </Box>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main">
        <Typography variant="h1" component="h1">
          Welcome to{' '}
          <Link target="_blank" rel="noopener" href="https://nextjs.org">
            Next.js!
          </Link>
        </Typography>

        <Typography>
          Get started by editing{' '}
          <Typography component="code">pages/index.js</Typography>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Link target="_blank" rel="noopener" href="https://nextjs.org/docs">
              <Typography variant="h3" component="h3">
                Documentation &rarr;
              </Typography>
              <Typography>
                Find in-depth information about Next.js features and API.
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={6}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://nextjs.org/learn"
            >
              <Typography variant="h3" component="h3">
                Learn &rarr;
              </Typography>
              <Typography>
                Learn about Next.js in an interactive course with quizzes!
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={6}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://github.com/vercel/next.js/tree/master/examples"
            >
              <Typography variant="h3" component="h3">
                Examples &rarr;
              </Typography>
              <Typography>
                Discover and deploy boilerplate example Next.js projects.
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={6}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <Typography variant="h3" component="h3">
                Deploy &rarr;
              </Typography>
              <Typography>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Box component="footer">
        <Link
          target="_blank"
          rel="noopener"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={64} height={64} />
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
