import React from 'react';
import Box from '../Box';
import { ProfileSidebarMenu } from '../ProfileSidebarMenu';

export function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '5px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github/${props.githubUser}`} >
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <ProfileSidebarMenu />
    </Box>
  )
}