import styled from 'styled-components';

export const StyledUseReducerHookNav= styled.nav`
  .use-reducer-hook-nav {
    background-color: #f1f1f1;
    border: 1px solid #fafafa;
    display: flex;
    justify-content: space-around;


    .use-reducer-hook-nav-link {
        color: blue;
        &:hover {
            background-color: blue;
            color: white;
            font-weight: 700;
        }
    }
  }
`;