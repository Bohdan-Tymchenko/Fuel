// absolute imports
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #050505;
    color: white;
    font-family: Arial, sans-serif;
    font-size: 10px;
    line-height: 16px;
  }

  .ant-layout {
    min-height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    background-color: #050505;
    padding: 8px 12px;
    position: relative;
  }
  .ant-layout-content {
    color: #fff;
  }
  .page-title {
    font-size: 14px;
    line-height: 16px;
    margin-left: 24px;
  }
`;