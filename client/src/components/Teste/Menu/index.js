import React, { useState } from 'react';
import { MenuWrapper, MenuLogo, LogoWrapper } from './styles';
import Logo from '../../../assets/icons/bird.svg';
import MenuOpen from '../../../assets/icons/menu-open.svg';
import MenuClosed from '../../../assets/icons/menu-closed.svg';
import { ProfileSidebarMenu } from '../ProfileSidebarMenu';
import { Link } from 'react-router-dom';

export function Menu({ githubUser }) {
  const [isMenuOpen, setMenuState] = useState(false);
  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <nav style={{ flex: 1 }}>
          <MenuLogo src={Logo} />
          <Link to='/home'>
            Início
          </Link>
          <Link to='/Teste'>
            Amigos
          </Link>
        </nav>
        <nav>
          <a href={`/logout`}>
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar" />
          </div>
          <button onClick={() => setMenuState(!isMenuOpen)}>
            {isMenuOpen && <img src={MenuOpen} />}
            {!isMenuOpen && <img src={MenuClosed} />}
          </button>
        </nav>





      </div>

      {console.log(githubUser)}
      <ProfileSidebar githubUser={githubUser} />
    </MenuWrapper>
  )
}

function ProfileSidebar({ githubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <ProfileSidebarMenu />
      </div>
    </div>
  )
}