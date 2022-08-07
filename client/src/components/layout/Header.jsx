import React from "react";
import styled from "styled-components";
import { Avatar, Dropdown, Menu } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import store from "../../store/store";
import { useNavigate } from "react-router-dom";
import { routes } from "../../consts/routes";
import { Button } from "./styled";

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
  const navigate = useNavigate();

  const onSendMessage = () => {
    navigate(routes.supportRequest);
  };
  return (
    <HeaderContainer>
      <Button onClick={() => navigate(routes.test)}>Test page</Button>
      <Button onClick={onSendMessage}>Send message</Button>
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
