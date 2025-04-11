import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box, Typography } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { info } from "../Info/Info";

const iconMap = { ...FaIcons, ...SiIcons };

export default function About() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="3rem" gap="2rem">
      <Terminal text={
        <>
          <Typography variant="h5" className={Style.headText}>About Me</Typography>
          <Typography className={Style.aboutMeText}>{info.bio}</Typography>
        </>
      } />

      <Terminal text={
        <>
          <Typography variant="h5" className={Style.headText}>Skills / Tools</Typography>
          {Object.entries(info.skills).map(([group, items]) => (
            <Box key={group} mt={3}>
              <Typography variant="subtitle1" style={{ color: "#facc15", marginBottom: '0.5rem' }}>
                {group}
              </Typography>
              <Box className={Style.skillsGrid}>
                {items.map((skill, i) => {
                  const IconComponent = iconMap[skill.icon];
                  return (
                    <Box key={i} className={Style.skillItem}>
                      <span className={Style.icon}>
                        {IconComponent && <IconComponent style={{ color: skill.color }} />}
                      </span>
                      <span className={Style.label}>{skill.label}</span>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ))}
        </>
      } />

      <Terminal text={
        <>
          <Typography variant="h5" className={Style.headText}>Hobbies / Interests</Typography>
          <Box className={Style.skillsGrid}>
            {info.hobbies.map((hobby, i) => (
              <Box key={i} className={Style.skillItem}>
                <Box component={'span'} mr={'0.5rem'} fontSize="1.5rem">{hobby.emoji}</Box>
                <Typography variant="body2" className={Style.label}>{hobby.label}</Typography>
              </Box>
            ))}
          </Box>
        </>
      } />
    </Box>
  );
}
