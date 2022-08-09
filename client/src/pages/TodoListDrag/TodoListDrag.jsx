import React, { useState } from "react";
import { Form, Button } from "antd";
import Draggable from "react-draggable";
import { Card, Layout } from "../../components";
import { InputStyled } from "./styled";

export const TodoListDrag = () => {
  const [todoItems, setTodoItems] = useState([]);

  const onFinish = (values) => {
    setTodoItems((prevItems) => [
      ...prevItems,
      {
        name: values.todo,
        defaultPosition: {
          x: Math.floor(Math.random() * (600 + 1)),
          y: Math.floor(Math.random() * (100 + 1)),
        },
      },
    ]);
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
            <Draggable defaultPosition={todo.defaultPosition}>
              <div
                key={todo.name}
                style={{
                  padding: "7px",
                  margin: "7px 0",
                  backgroundColor: "saddlebrown",
                  position: "absolute",
                  width: 100,
                }}
              >
                {todo.name}
              </div>
            </Draggable>
          ))}
        </div>
      </Card>
    </Layout>
  );
};
