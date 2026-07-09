import styled from "styled-components"

export const Container = styled.div`


`

export const Header = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 16px;
`

export const AddButton = styled.button`
display: flex;
align-items: center;
gap: 8px;
border: 0;
background-color: ${(props) => props.theme.purple};
color: ${(props) => props.theme.white};
padding: 10px 18px;
border-radius: 8px;
cursor: pointer;
font-weight: 600;

svg {
    height: 18px;
    width: 18px;
}

&:hover {
    opacity: 0.9;
}
`

export const CategoryImage = styled.img`
height: 80px;
padding: 12px;
border-radius: 16px;

`

export const EditButton = styled.button`
border: 0;
background-color: ${props => props.theme.darkWhite};
height: 32px;
width: 32px;
border-radius: 8px;
margin: 0 auto;

display: flex;
align-items: center;
justify-content: center;

svg {
    height: 18px;
    width: 18px;
}

&:hover {
    background-color: ${props => props.theme.purple};

    svg {
        fill: ${props => props.theme.white};
    }
}

`