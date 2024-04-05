import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";

import Dashboard from "./pages/Dashboard";
import Trade from "./pages/Trade";
import Earn from "./pages/Earn";
import Faucet from "./pages/Faucet";
import Docs from "./pages/Docs";
import More from "./pages/More";
import Header from "./components/header/header";
import ConnectionInfo from "./components/connectionInfo/connectionInfo";

import { GlobalStyle } from "./styles/globalStyles";

const { Content } = Layout;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/faucet" element={<Faucet />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </Content>
        <ConnectionInfo />
      </Layout>
    </>
  );
}

export default App;
