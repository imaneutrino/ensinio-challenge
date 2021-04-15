import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiUserCircle, BiCheck } from 'react-icons/bi';
import {
  Container,
  Nav,
  NavItems,
  Separator,
  LeftNavItem,
  RightNavItem,
  SolutionsDropdown,
  SolutionsDropdownItems,
  Item,
  LanguagesDropdown,
} from './styles';

import Logo from '../../assets/images/ensinio-logo.svg';
import EadIcon from '../../assets/images/ead.svg';
import GamificationIcon from '../../assets/images/icon-gamification.svg';
import SocialIcon from '../../assets/images/icon-social.svg';
import AppIcon from '../../assets/images/icon-app.svg';

import PtIcon from '../../assets/images/brazil.svg';
import EnIcon from '../../assets/images/usa.svg';
import EsIcon from '../../assets/images/spain.svg';

const Navbar: React.FC = () => {
  const navbarList: HTMLElement | null = document.getElementById(
    'navbarToggle',
  );

  function toggleNavbar(): void {
    navbarList?.classList.toggle('active');
  }

  return (
    <>
      <Container>
        <Nav>
          <a className="logo" href="/">
            <img src={Logo} alt="Ensinio Logo" />
          </a>

          <button
            onClick={toggleNavbar}
            className="toggleMenu"
            type="button"
            aria-label="Toggle Navigation"
          >
            <GiHamburgerMenu />
          </button>

          <NavItems id="navbarToggle">
            <LeftNavItem>
              <li className="dropdown-leftNav">
                <a href="/">
                  Soluções <IoMdArrowDropdown />
                </a>
                <SolutionsDropdown>
                  <h3>soluções principais</h3>

                  <SolutionsDropdownItems>
                    <Item>
                      <img src={EadIcon} alt="" />
                      <div>
                        <strong>Crie uma Escola Online</strong>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </Item>

                    <Item>
                      <img src={GamificationIcon} alt="" />
                      <div>
                        <strong>Crie uma Escola Online</strong>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </Item>

                    <Item>
                      <img src={SocialIcon} alt="" />
                      <div>
                        <strong>Crie uma Escola Online</strong>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </Item>

                    <Item>
                      <img src={AppIcon} alt="" />
                      <div>
                        <strong>Crie uma Escola Online</strong>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </Item>
                  </SolutionsDropdownItems>
                </SolutionsDropdown>
              </li>
              <li>
                <a href="/">Preços</a>
              </li>
              <li>
                <a href="/">Academy</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contato</a>
              </li>
            </LeftNavItem>

            <Separator />

            <RightNavItem>
              <ul>
                <li>
                  <a href="/">
                    <BiUserCircle />
                    Entrar
                  </a>
                </li>
                <li>
                  <button type="button">Começar agora</button>
                </li>
                <li className="dropdown-rightNav">
                  <a href="/">
                    PT <IoMdArrowDropdown width={100} />
                  </a>
                  <LanguagesDropdown>
                    <p className="active">
                      <img src={PtIcon} alt="Brazil icon" />
                      <span> PT </span>
                      <BiCheck size={25} />
                    </p>

                    <p>
                      <img src={EnIcon} alt="USA icon" />
                      <span>EN</span>
                    </p>

                    <p>
                      <img src={EsIcon} alt="Spanish icon" /> <span>ES</span>
                    </p>
                  </LanguagesDropdown>
                </li>
              </ul>
            </RightNavItem>
          </NavItems>
        </Nav>
      </Container>
    </>
  );
};

export default Navbar;
