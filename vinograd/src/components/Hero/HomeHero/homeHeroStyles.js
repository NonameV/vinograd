import styled from '@emotion/styled'

export const HeroHomeSection = styled.div`
    padding: 50px 0 150px;
    border-top: 1px solid #fff;
    &>h1{
        font-family: 'Playfair Display', serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 48px;
        text-transform: uppercase;
        max-width: 651px;
        margin-bottom: 16px;
    }
    &>p{
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 70px;
    }
    &>.catalogLink{
        color: #fff;
        padding: 18px 64px;
        border: 1px solid #FFFFFF;
        filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
    }
`