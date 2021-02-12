import styled from '@emotion/styled'


export const IntroductionSection = styled.section`
    padding: 200px 0 120px;
    text-align: center;
    position: relative;
   color: #000;
   &>img{
       position: absolute;
       top:0;
       left:0;
       right:0;
       width: 100%;
       z-index: -1;
   }
   & *{
       margin: 0 auto;
   }
   & h2{
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    max-width: 561px;
    margin-bottom: 45px;
   }
   & p{
       font-size: 14px;
       line-height: 30px;
       max-width: 605px;
   }
`