// components/BackButton.js
import React from 'react';
import { Button } from '@mui/material';

const BackButton = ({ onBackClick }) => (
  <Button onClick={onBackClick} variant="outlined" style={{ marginTop: '20px' }}>
    Back to Projects
  </Button>
);

export default BackButton;
