import styled from "@emotion/styled";
import {white} from '../../../styles/colors'


export const NavAndCartHeroSection = styled.div`
    padding: 25px 0 47px 0;
`

export const Nav = styled.nav`
    &>ul{
        display: flex;
        list-style:none;
        padding-left: 0;
    }
    &>ul>li>a{
        text-transform: uppercase;
        font-size: 12px;
        line-height: 13px;
        color:${white};
        display: flex;
        align-items:flex-start;
        margin-right:18px;
    }
    &>ul>li>a>img{
        margin-right:3px;
    }
`