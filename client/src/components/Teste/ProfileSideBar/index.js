import React from 'react';
import Box from '../Box';
import { ProfileSidebarMenu } from '../ProfileSidebarMenu';
import userFoto from '../../../assets/user.png';

export function ProfileSideBar(props) {
  return (
    <Box>
      <img src={userFoto} style={{ borderRadius: '100px' }} />
      <hr />
      <p>@usuario</p>
      <hr />
      <ProfileSidebarMenu />
    </Box>
  )
}