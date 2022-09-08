import React from 'react';
import styled from 'styled-components';

interface IProps {
    value?: string;
    handleChange: (e: any) => void;
    type: string;
}

export const Input: React.FC<IProps> = ({value, handleChange, type}) => {
    return (
        <InputStyle
            type={type}
            onChange={handleChange}
            value={value}
        />
    );
};

const InputStyle = styled.input`
  border: 4px solid #27569C;
  border-radius: 10px;
  max-width: 295px;
  width: 100%;
  background-color: #D9D9D9;
  padding: 3px;
  outline: none;
  font-size: 24px;
 `;
