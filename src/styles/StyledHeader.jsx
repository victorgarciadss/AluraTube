import styled from "styled-components";

import config from '../../config.json';

export const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};

    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        gap: 1rem;
    }
`;

export const StyledBanner = styled.div`
    background-image: url(${({ bg }) => bg});
    height: 230px;
`