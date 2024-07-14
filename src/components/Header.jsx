import styled from "styled-components";
import '../css/font.css';

const StyledHeader = styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 40px;
    height: 7vh;
    color: #FF6E42;
    padding: 0 15px;
    box-sizing: border-box;
    font-family: "Gugi", sans-serif;
`;

function Header({children}) {
    return(
        <StyledHeader>{children}</StyledHeader>
    );
}

export default Header;