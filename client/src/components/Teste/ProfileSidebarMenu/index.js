import React from 'react';
import { ProfileSidebarMenuWrapper } from './styles';
import User from '../../../assets/icons/user.svg';
import Book from '../../../assets/icons/book.svg';
import Camera from '../../../assets/icons/camera.svg';
import Sun from '../../../assets/icons/sun.svg';
import Plus from '../../../assets/icons/plus.svg';
import Logout from '../../../assets/icons/logout.svg';

export function ProfileSidebarMenu() {
  return (
    <ProfileSidebarMenuWrapper>
      <nav>
        <a href="/">
          <img src={User} />
          Perfil
        </a>
        <a href="/">
          <img src={Book} />
          Recados
        </a>
        <a href="/">
          <img src={Camera} />
          Fotos
        </a>
        <a href="/">
          <img src={Sun} />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={Plus} />
          GitHub Trends
        </a>
        <a href="/logout">
          <img src={Logout} />
          Sair
        </a>
      </nav>
    </ProfileSidebarMenuWrapper>
  )
}
