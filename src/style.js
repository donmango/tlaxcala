import { injectGlobal } from 'styled-components'

const Css = () => injectGlobal`
  ::selection {
    color: #fff;
    background: #1A88B7;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    background-color: #f4f4f4;
    color: rgba(74,74,74,.94);
    line-height: 1.5;
    font-weight: 300;
    font-size: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

export default Css
