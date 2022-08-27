import { Box } from '@chakra-ui/react';

import RouteLink from '@/common/components/RouteLink';

export default function NewPage() {
  return (
    <Box>
      Back to <RouteLink href="/">Home</RouteLink>
    </Box>
  );
}
