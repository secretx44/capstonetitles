import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonTitle() {
  return (
    <Box sx={{ mx: 'auto', mt: 6 }} >
      <Skeleton height={50} />
      <Skeleton height={50} animation="wave" />
      <Skeleton height={50} animation={false} />
    </Box>
  );
}
