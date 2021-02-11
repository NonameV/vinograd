import styled from '@emotion/styled'
import {white, oneMoreGrey} from '../../../styles/colors'

export const HeaderBlock = styled.header`
    padding-top: 25px;
    justify-content: space-between;
    padding-bottom: 30px;
    border-bottom: 1px solid ${white};
`

export const ViberLink = styled.a`
    margin-top: 12px;
    display: flex;
    align-items: center;
    &>p{
        margin-bottom: 0
    }
    &>svg{
        margin-right: 4px;
    }
`

export const ContactsBlock = styled.div`
    margin-left: 70px;
    margin-right: 24px;
    &>a{
        color: ${white};
        font-size: 16px;
        line-height: 24px;
    }
`

export const DropDownToggleButton = styled.button`
    width: 160px;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    color: ${white};
    text-align: left;
    padding: 0;
    padding-bottom: 5px;
    padding-right: 15px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 1s;
    &:focus{
        outline: none;
    }
    &>span{
        margin-top: -5px;
    }
    &:hover{
        &>span{
            transition: 0.4s;
            margin-top: 0px; 
        }
    }
`

export const DropDownContactsInfoBlock = styled.div`
    transition: 0.4s;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    &>p{
        margin-bottom: 0px;
        color: ${white};
    }
    &>span{
        color: ${oneMoreGrey};
        margin-bottom: 5px;
    }
    width: auto;

`
export const DropDownContacts = styled.div`
    min-width: 140%;
    padding: 20px;
    background: #0F1835;
    border-radius: 3px;
    font-size: 12px;
    line-height: 18px;
    transition: 0.4s;
`
export const AskQuestionButton = styled.button`
    width: auto;
    border: none;
    background: transparent;
    color: ${white};
    text-align: center;
    padding: 0;
    padding-bottom: 5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    position: relative;
    border-bottom: 2px solid #fff;
    border-top: 2px solid rgba(255, 0, 0, .0);
    border-right: 2px solid rgba(255, 0, 0, .0);
    border-left: 2px solid rgba(255, 0, 0, .0);
    transition: 0.4s;
    &:span{
        -webkit-transition: 0.6s;
        -moz-transition: 0.6s;
        -o-transition: 0.6s;
        transition: 0.6s;
        -webkit-transition-delay: 0.2s;
        -moz-transition-delay: 0.2s;
        -o-transition-delay: 0.2s;
        transition-delay: 0.2s;
    }
    &:focus{
        outline: none;
    }
    &:before {
        content: '';
        position: absolute;
        top: 0.2em;
        left: 0;
        width: 100%;
        text-align: center;
        opacity: 0;
        -webkit-transition: .4s,opacity .6s;
        -moz-transition: .4s,opacity .6s;
        -o-transition: .4s,opacity .6s;
        transition: .4s,opacity .6s;
        content: attr(data-hover);
        -webkit-transform: translate(-75%,0);
        -moz-transform: translate(-75%,0);
        -ms-transform: translate(-75%,0);
        -o-transform: translate(-75%,0);
        transform: translate(-75%,0);
    }
    &:hover{
        border-top: 2px solid rgba(255, 255, 255, 1);
        border-right: 2px solid rgba(255, 255, 255, 1);
        border-left: 2px solid rgba(255, 255, 255, 1);
        transition: 0.4s;
    }
    &:hover span{
        opacity: 0;
        trasnsition: 0.4s;
        -webkit-transform: scale(0.4);
        -moz-transform: scale(0.4);
        -ms-transform: scale(0.4);
        -o-transform: scale(0.4);
        transform: scale(0.4);
    }
    &:hover:before{
        opacity: 1;
        -webkit-transform: translate(0,0);
        -moz-transform: translate(0,0);
        -ms-transform: translate(0,0);
        -o-transform: translate(0,0);
        transform: translate(0,0);
        -webkit-transition-delay: .4s;
        -moz-transition-delay: .4s;
        -o-transition-delay: .4s;
        transition-delay: .4s;
    }
` 