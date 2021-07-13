import styled from '@emotion/styled/macro'

import {white, oneMoreGrey} from '../../..//colors'

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

export const DropDownToggleButton = styled.button(
    { 
    width: "160px",
    border: "none",
    borderBottom: "1px solid #fff",
    background: "transparent",
    color: white,
    textAlign: "left",
    padding: 0,
    paddingBottom: "5px",
    paddingRight: "15px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "1s",
    "&:focus":{
        outline: "none"
    },
    "&>span":{
        marginTop: "-5px"
    },
    "&:hover":{
        "&>span":{
            transition: "0.4s",
            marginTop: "0px"
        }
    }
}, ({mr = 0})  => ({
    marginRight: mr
}))


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
    
` 