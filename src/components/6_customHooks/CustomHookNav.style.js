import styled from 'styled-components';

export const StyledCustomHookNav= styled.nav`
  .custom-hook-nav {
    background-color: #f1f1f1;
    border: 1px solid #fafafa;
    display: flex;
    justify-content: space-around;


    .custom-hook-nav-link {
        color: blue;
        &:hover {
            background-color: blue;
            color: white;
            font-weight: 700;
        }
    }
  }
`;