import styled from "@emotion/styled";
import {white, black} from '../../../styles/colors'


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
export const CartButton = styled.div`
    &>button>img{
        margin-right: 5px;
    }
    &>button{
        width: 200px;
        padding: 17px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${black};
        background: ${white};
        font-size: 12px;
        line-height: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 6px;
    }
    &>span{
        font-size: 12px;
        line-height: 28px;
    }
`