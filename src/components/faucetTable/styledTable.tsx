// absolute imports
import styled from 'styled-components';

export const TableContainer = styled.div`
  .ant-table {
      font-size: 10px;
      background: none;
      color: #fff;
      border-radius: 8px;
      border: 1px solid #141414;
      tr {
        th {
          background: none;
          color: #969696;
          border-bottom-color: #141414;
          &:last-child {
            text-align: right;
          }
          &:before {
            display: none;
          }
          width: 25%;
        }
        td {
          width: 25%;
          border-bottom-color: #141414;
          &:last-child {
            text-align: right;
          }
        }
        .currency-symbol {
          display: inline-block;
          margin-left: 5px;
          padding: 4px 8px;
          line-height: 10px;
          color: #969696;
          background: #141414;
          border-radius: 5px;
        }
      }
      tr {
        &:last-child {
          td {
            border: none;
          }
        }
      }
      tbody {
        tr {
          .ant-table-cell.ant-table-cell-row-hover {
            background: #141414;
          }
        }
      }
      .ant-btn {
        background: none;
        color: #969696;
        padding: 8px;
        text-transform: uppercase;
        min-width: 120px;
        border-radius: 15px;
        border: 1px solid #4B4B4B;
        font-size: 10px;
        span {
          padding: 0;
        }
      }
    }
`;