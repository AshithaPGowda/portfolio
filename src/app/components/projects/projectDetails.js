// components/ProjectDetails.js
import React from 'react';
import { Typography, Button } from '@mui/material';

const ProjectDetails = ({ project, onBackClick }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4">{project.title}</Typography>
      <Typography variant="body1">{project.description}</Typography>
      <Button onClick={onBackClick} variant="outlined" style={{ marginTop: '20px' }}>
        Back to Projects
      </Button>
    </div>
  );
};

export default ProjectDetails;
