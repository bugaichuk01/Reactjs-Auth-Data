import {useActions} from "../../_hooks/useActions";
import React from 'react';
import {login} from "../../store/reducers/auth.slice";
import styled from "styled-components";

export const Button = () => {
    const dispatch = useActions();

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(login());
    };

    return <StyledButton onClick={handleSubmit}>Submit</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #E4B062;
  border-radius: 10px;
  border: none;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  padding: 5px;
  width: 213px;
  margin: 0 auto;
  cursor: pointer;
  @media ${(props) => props.theme.phone} {
    width: 100%;
    margin-top: 15px;
  };
`;

