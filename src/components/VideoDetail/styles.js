import styled from 'styled-components'

export const Container = styled.section`
  background-color: #121212;
  border-radius: 10px;
  
  footer {
    padding: 10px;

    display: flex;
    flex-flow: column;
    gap: 15px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`