// absolute imports
import React from 'react';
import { Table, Button } from 'antd';
import type { TableProps } from 'antd';

// relative imports
import MintButton from '../mintButton/mintButton';
import { assetsMapping } from '../../utils/assetsMapping';

// styles
import { TableContainer } from './styledTable';

interface DataType {
  key: string;
  name: string;
  mintAmount: number;
  myBalance: number;
  url: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Asset',
    dataIndex: 'name',
    key: 'asset',
  },
  {
    title: 'Mint amount',
    dataIndex: 'mintAmount',
    key: 'mintAmount',
  },
  {
    title: 'My balance',
    dataIndex: 'myBalance',
    key: 'myBalance',
    render: (text: number, record: DataType) => {
      return (
        <>
          <span className="value">{record.myBalance}</span>
          <span className="currency-symbol">{assetsMapping[record.name]}</span>
        </>
      )
    }
  },
  {
    title: <Button type="primary">Mint All</Button>,
    dataIndex: 'mintButton',
    key: 'mintButton',
    render: () => (
      <MintButton />
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'ETHERIUM',
    mintAmount: 0.5,
    myBalance: 0.50,
    url: 'string',
  },
  {
    key: '2',
    name: 'BITCOIN',
    mintAmount: 0.1,
    myBalance: 0.01,
    url: 'string',
  },
  {
    key: '3',
    name: 'USDC',
    mintAmount: 300,
    myBalance: 300.00,
    url: 'string',
  },
  {
    key: '4',
    name: 'UNISWAP',
    mintAmount: 50,
    myBalance: 50.00,
    url: 'string',
  },
  {
    key: '5',
    name: 'ETHERIUM',
    mintAmount: 0.5,
    myBalance: 0.50,
    url: 'string',
  },
  {
    key: '6',
    name: 'BITCOIN',
    mintAmount: 0.1,
    myBalance: 0.01,
    url: 'string',
  },
  {
    key: '7',
    name: 'USDC',
    mintAmount: 300,
    myBalance: 300.00,
    url: 'string',
  },
  {
    key: '8',
    name: 'UNISWAP',
    mintAmount: 50,
    myBalance: 50.00,
    url: 'string',
  },
];

const FaucetTable: React.FC = () => (
  <TableContainer>
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        hideOnSinglePage: true
      }}
    />
  </TableContainer>
  
);

export default FaucetTable;  