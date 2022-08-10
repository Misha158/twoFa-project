import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS, GET_ONE_USER } from "./query/user";
import { CREATE_USER } from "./mutations/user";
import { Card, Layout } from "../../components";
import { Button, Input } from "antd";

export const GraphQL = () => {
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [age, _] = useState(15);

  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  const { data: oneUser, loading: loadingOneUser } = useQuery(GET_ONE_USER, {
    variables: {
      id: 1,
    },
  });

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  console.log(users);

  const onChange = (event) => {
    setUsername(event.target.value);
  };

  const onClick = async () => {
    await newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    });

    setUsername("");
    refetch();
  };

  return (
    <Layout>
      <Card>
        <div>GraphQL</div>

        <Input value={username} onChange={onChange} />
        <Button onClick={onClick}>Create</Button>
        <div>
          {users?.map((user, index) => (
            <div key={user.id}>
              {index + 1}. {user.username}
            </div>
          ))}
        </div>
      </Card>
    </Layout>
  );
};
