import styled from '@emotion/styled'

export const OurProductsSection = styled.section`
    padding: 10px 0 120px;
    position: relative;
    &>.container{
        position: relative;
        &:before{
            content: '';
            position:absolute;
            top: 3px;
            left:15px;
            background: #000;
            height: 1px;
            width: 133px;
        }
        & h4{
            font-family: 'Playfair Display', serif;
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            color: #000000;
            margin-top:32px;
        }
        & p{
            font-size: 14px;
            line-height: 16px;
            color: #626262;
            margin-top:10px;
            margin-bottom: 34px;
            
        }
    }
`
export const OurProductsBlock = styled.div`
    
    &>.catalog-link{
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        padding: 18px 64px;
        color: #000;
        border: 1px solid #000;
        filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
    }
`
export const OurProductsProduct = styled.div`
    position: relative;
    &>.marker{
        position: absolute;
        padding: 12px 26px;
        background:  #FF0000;
        top: 15px;
        left: 20px;
        border-radius: 36px;
        font-weight: bold;
        font-size: 8px;
        line-height: 9px;
        text-transform: uppercase;
        color: #000000;
        font-weight: 700;
    }
    &>img{
        margin-bottom: 23px;
        width: 100%;
        object-fit: cover;
    }
    &>h5{
        margin-bottom: 13px;
    }
`