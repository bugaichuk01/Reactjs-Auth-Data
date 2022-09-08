import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as BigLogo} from '../../images/bigLogo.svg';
import {ReactComponent as LogoutLogo} from '../../images/logoutLogo.svg';
import React from 'react';
import styled from 'styled-components';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {useWindowSize} from "../../_hooks/useWindowSize";
import {useActions} from "../../_hooks/useActions";
import {logout} from "../../store/reducers/auth.slice";

export const Header = () => {
    const {inputLogin, auth} = useTypedSelector(state => state.auth);
    const dispatch = useActions();
    const windowSize = useWindowSize();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Container>
            {windowSize.width <= 424 ? <Logo/> : <BigLogo/>}
            {auth && (
                <UsernameWrapper>
                    {windowSize.width > 424 ? <Username>{inputLogin}</Username> : null}
                    <Logout onClick={handleLogout}><LogoutLogo/></Logout>
                </UsernameWrapper>
            )}
        </Container>
    );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  background-color: #E4B062;

  svg {
    cursor: pointer;
  }
`;

const UsernameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  margin-right: 30px;
`;

const Logout = styled.button`
  border: none;
  background: none;
`;