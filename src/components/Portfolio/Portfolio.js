import React from 'react';
import { Box, Grid, Typography, Chip, Button } from '@mui/material';
import { FaSafari } from 'react-icons/fa';
import { info } from '../Info/Info';


const Portfolio = () => {
  return (
    <Box sx={{ py: 5, px: 2 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Projects I've Built
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 700, mx: 'auto', mb: 4}}
      >
        A curated showcase of the real-world projects I’ve designed and developed — spanning AI,
        web, and mobile applications. Each project reflects my passion for solving problems through
        code, delivering clean user experiences, and building scalable solutions across the tech
        stack.
      </Typography>
      <Grid container justifyContent="center">
        {info.portfolio.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </Grid>
    </Box>
  );
};

const PortfolioCard = ({ project }) => {
  return (
    <Box
      sx={{
        p: 3,
        m: 2,
        borderRadius: '20px',
        background: '#1e1e1e',
        color: '#fff',
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
        maxWidth: 400,
        height: '100%', // make height full in Grid container context
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center'
      }}
    >
      <Box>
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: '100%',
            borderRadius: '12px',
            mb: 2
          }}
        />
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: '#ccc' }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {project.stack.map((tech, idx) => (
            <Chip key={idx} label={tech} sx={{ backgroundColor: '#333', color: '#fff' }} />
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<FaSafari />}
          href={project.live}
          target="_blank"
        >
          Live
        </Button>
      </Box>
    </Box>
  );
};

export default Portfolio;