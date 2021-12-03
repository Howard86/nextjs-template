import { Box } from '@mui/material';

import RouteLink from '@/components/RouteLink';

const NewPage = (): JSX.Element => (
  <Box>
    Back to <RouteLink href="/">Home</RouteLink>
  </Box>
);

export default NewPage;
