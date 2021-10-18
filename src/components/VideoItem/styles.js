import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 10px;

  img {
    max-width: 200px;
  }

  div {
    display: flex;
    flex-flow: column;
    gap: 10px;

    p {
      font-size: 14px;
    }
  }
`