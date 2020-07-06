import styled from 'styled-components'

export const ButtonStyles = styled.button`
  padding: .5rem 2.5rem;
  color: #000;
  font-weight: 700;
  background: #f1f1f1;
  border-radius: 2px;
  border-width: 0;
  cursor: "pointer";
  box-shadow: 0px 2px 1px -2px rgba(121, 211, 255, 0.25);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 3px 2px 0px rgba(121, 211, 255, 0.75);
  }

`