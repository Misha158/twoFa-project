import React, { useState } from "react";
import { Form, Button } from "antd";
import { Card, Layout } from "../../components";
import { InputStyled } from "./styled";

export const TodoListDrag = () => {
  const [todoItems, setTodoItems] = useState([]);

  const onFinish = (values) => {
    setTodoItems((prevItems) => [...prevItems, { name: values.todo }]);
  };

  return (
    <Layout>
      <Card title="Todo with drag n drop">
        <div style={{ width: "300px" }}>
          <Form name="basic" onFinish={onFinish}>
            <Form.Item name="todo">
              <InputStyled placeholder="name of todo" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                style={{ marginTop: "10px" }}
                htmlType="submit"
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          {todoItems?.map((todo) => (
            <div key={todo.name}>{todo.name}</div>
          ))}
        </div>
      </Card>
    </Layout>
  );
};
