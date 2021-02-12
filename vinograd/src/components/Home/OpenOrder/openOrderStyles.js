import styled from '@emotion/styled'

export const OpenOrderSection = styled.section`
    padding: 145px 0 130px;
    position: relative;
    background: rgb(81, 23, 117);
    text-align: center;
    &:before{
        content: '';
        position: absolute;
        top: 115px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 150px;
        height: 1px;
        background-color: #fff;
    }
    &>img{
        position:absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }
    & .year{
        font-size: 47px;
    }
    & h2{
        color:#fff;
        font-weight: 700;
        font-size: 36px;
        line-height: 47px;
        text-transform: uppercase;
        text-align: center;
        font-family: 'Playfair Display', serif;
        max-width: 561px;
        margin-bottom: 78px;
        margin-right: auto;
        margin-left: auto;
        max-width: 485px;
       }
    & .catalogLink{
        font-size: 12px;
        text-transform: uppercase;
        line-height: 14px;
        font-weight: 700;
        color: #fff;
        padding: 18px 64px;
        border: 1px solid #FFFFFF;
        filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
        display: inline;
        align-items: center;
    }
`