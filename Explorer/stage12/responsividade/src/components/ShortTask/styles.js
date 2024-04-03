import styled from "styled-components"

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  height: 2.7rem;
  border: 0;
  padding: 0 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  gap: 7px;

  > svg {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }
`
