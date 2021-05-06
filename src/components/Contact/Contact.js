import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        icon={<FacebookIcon />}
        label="باسل القاضي"
        clickable
        color="primary"
      />
      <Chip
        icon={<TwitterIcon />}
        label="@bassil_qadi"
        clickable
        color="primary"
      />
      <Chip
        icon={<InstagramIcon />}
        label="@bassil_qadi"
        clickable
        color="primary"
      />
      <Chip
        icon={<GitHubIcon />}
        label="@bassil-97"
        clickable
        color="primary"
      />
      <Chip
        icon={<LinkedInIcon />}
        label="Bassil Alqadi"
        clickable
        color="primary"
      />
    </div>
  );
}
