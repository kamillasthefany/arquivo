import React from 'react';
import Box from '../Box';
import { ProfileSidebarMenu } from '../ProfileSidebarMenu';
import userFoto from '../../../assets/user.png';

export function ProfileSideBar(props) {
  return (
    <Box>
      <img src={userFoto} style={{ borderRadius: '5px' }} />
      <hr />
      <p>
        @usuario
        {/* <a className="boxLink" href={`https://github/${props.githubUser}`} >
          @{props.githubUser}
        </a> */}
      </p>
      <hr />
      <ProfileSidebarMenu />
    </Box>
  )
}