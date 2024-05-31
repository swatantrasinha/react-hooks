import styled from 'styled-components';

export const StyledUseMemoNav= styled.nav`
  .use-memo-nav {
    background-color: #f1f1f1;
    border: 1px solid #fafafa;
    display: flex;
    justify-content: space-around;


    .use-memo-nav-link {
        color: blue;
        &:hover {
            background-color: blue;
            color: white;
            font-weight: 700;
        }
    }
  }
`;