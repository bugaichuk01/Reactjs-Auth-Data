import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {onLoginChange, onPasswordChange} from "../../store/reducers/auth.slice";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";

export const Login = () => {
    const dispatch = useDispatch();
    const {inputPassword, inputLogin} = useTypedSelector(state => state.auth);

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onLoginChange(e.target.value));
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onPasswordChange(e.target.value));
    };

    return (
        <Form>
            <Wrapper>
                <Authorization>Authorization</Authorization>
                <Label>
                    <InputLabel>login</InputLabel>
                    <Input
                        handleChange={handleChangeLogin}
                        value={inputLogin}
                        type='text'
                    />
                </Label>
                <Label>
                    <InputLabel>password</InputLabel>
                    <Input
                        handleChange={handleChangePassword}
                        value={inputPassword}
                        type='password'
                    />
                </Label>
                <Button/>
            </Wrapper>
        </Form>
    );
};

const Form = styled.form`
  font-size: 24px;
  border: 5px solid #27569c;
  box-shadow: 0 4px 4px 0 #00000040;
  border-radius: 6px;
  width: 480px;
  height: 330px;
  padding: 25px 20px 0;
  margin: 230px auto;
  @media ${(props) => props.theme.phone} {
    width: auto;
    height: auto;
    padding: 8px 0 30px 0;
    margin: 15px;
  }`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${(props) => props.theme.phone} {
    width: 250px;
    margin: 0 auto;
  };
`

const Authorization = styled.span`
  color: #27569c;
  font-weight: 800;
  display: flex;
  align-self: center;
  height: 70px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.phone} {
    height: 45px;
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  margin-bottom: 25px;
  font-size: 24px;
  color: black;
  @media ${(props) => props.theme.phone} {
    flex-direction: column;
    align-items: start;
    margin-bottom: 7px;
  }`;

const InputLabel = styled.label`
  @media ${(props) => props.theme.phone} {
    padding: 10px 0;
  }`;
