import styled from 'styled-components';

export const ConnectionStatusContainer = styled.div`
  position: fixed;
  left: 12px;
  right: 0;
  bottom: 0;
  color: #969696;
  line-height: 18px;
  z-index: 1;
  padding: 10px 0 4px;
  background: #050505;

  .connection-toggle {
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: block;
      text-align: center;
      margin-bottom: 8px;
    }
    @media screen and (min-width: 769px) {
      display: none;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: block;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    @media screen and (min-width: 769px) {
      display: flex;
      flex-wrap: wrap;
      max-height: 100%;
    }

    li {
      margin-bottom: 8px;
      margin-right: 8px;
      padding-right: 8px;
      display: flex;
      align-items: center;
      border-right: 1px solid #141414;
      @media screen and (max-width: 768px) {
        margin-right: 0;
        border-right: none;
        padding-right: 0;
      }

      &:last-child {
        margin-right: 0;
        border-right: none;
      }
    }

    .tag {
      display: inline-block;
      padding: 5px;
      border-radius: 4px;
      background: #141414;
      margin-left: 8px;
      line-height: 10px;
    }
  }

  .status {
    width: 8px;
    height: 8px;
    margin-right: 7px;
    border-radius: 50%;
    &.success {
      background: #00E388;
    }
    &.error {
      background: red;
    }
  }

  &.expanded ul {
    max-height: 300px; 
  }
`;
