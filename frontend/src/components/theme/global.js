import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .bm-menu {
    background:${({ theme }) => theme.body};
    color:${({ theme }) => theme.text}
  }
  .bm-item-list{
    color:${({ theme }) => theme.text}
  }
  .bm-menu a{
    color:${({ theme }) => theme.text}
  }
  .react-grid-item{
    background: ${({ theme }) => theme.colorDash}
  }
  `