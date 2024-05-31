import styled from 'styled-components';

export const StyledUseRefHookNav= styled.nav`
  .use-ref-hook-nav {
    background-color: #f1f1f1;
    border: 1px solid #fafafa;
    display: flex;
    justify-content: space-around;


    .use-ref-hook-nav-link {
        color: blue;
        &:hover {
            background-color: blue;
            color: white;
            font-weight: 700;
        }
    }
  }
`;