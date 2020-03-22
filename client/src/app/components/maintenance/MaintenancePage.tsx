import * as React from 'react';
import styled from 'styled-components';

export default function MaintenancePage() {

    return (
        <Layout>
            <Header>ただ今システムメンテナンス中です</Header>
            <ContentLayout>
                <p>
                    現在、システムメンテナンス中です。
                    <br/>
                    全サービスをご利用いただけません。
                </p>
            </ContentLayout>
        </Layout>
    );
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  color: #f4ba48;
  font-weight: bold;
  font-size: 40px:
  margin: 24px 0;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 20px;
  > p:not(:last-child) {
    margin-bottom: 16px;
  }
`;
