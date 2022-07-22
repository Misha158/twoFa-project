import React from "react";
import styled from "styled-components";
import { Avatar, Button, Dropdown, Menu } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import store from "../../store/store";

const HeaderContainer = styled.div`
  background-color: paleturquoise;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  padding: 10px 25px;
`;

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={["3"]}
    items={[
      {
        key: "1",
        label: "Account",
      },
      {
        key: "2",
        label: "Logout",
      },
    ]}
  />
);

export const Header = () => {
  return (
    <HeaderContainer>
      <Button style={{ marginRight: 20 }}>Send message</Button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          style={{ backgroundColor: "salmon", verticalAlign: "middle" }}
          size="large"
        >
          {store.authData.username}
        </Avatar>
        <div>
          <Dropdown overlay={menu}>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 5 }}
            >
              {store.authData.username}{" "}
              <AiOutlineDown style={{ marginTop: 3, marginLeft: 3 }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </HeaderContainer>
  );
};
