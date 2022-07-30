import { useEffect, useState } from "react";
import { Form, Typography } from "antd";
import axios from "axios";

import dayjs from "dayjs";
import { cleanObject } from "../../utils/object";

const columns: any[] = [
  {
    title: "Username",
    dataIndex: "login",
    render: (login: any) => <Typography.Text>{login.username}</Typography.Text>,
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (name: any) => (
      <Typography.Text>
        {name.first} {name.last}
      </Typography.Text>
    ),
    sorter: (a: any, b: any) => {
      return String(a.name.first).localeCompare(String(b.name.first));
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a: any, b: any) => a.email.localeCompare(b.email),
  },
  {
    title: "Gender",
    dataIndex: "gender",
    sorter: (a: any, b: any) => a.gender.localeCompare(b.gender),
  },
  {
    title: "Registered Date",
    dataIndex: "registered",
    render: (registered: any) => {
      const date = dayjs(registered.date).format("DD-MM-YYYY HH:mm");
      return <Typography.Text>{date}</Typography.Text>;
    },
    sorter: (a: any, b: any) => {
      return a.registered.date.localeCompare(b.registered.date);
    },
  },
];

const useHome = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState<any[]>([]);
  const [params, setParams] = useState<object>({
    gender: "",
    results: 10,
    page: 1,
    keyword: "",
  });
  const [pagination, setPagination] = useState<any>({
    current: 1,
    pageSize: 10,
    total: 5000,
  });

  const fetchUsers = async (params: any) => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/", {
        params: cleanObject(params),
      });
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTableChange = (page: any, _: any): void => {
    const { current, pageSize } = page;

    const newParams = {
      ...params,
      results: pageSize,
      page: current,
    };

    setPagination(page);
    setParams(newParams);
    fetchUsers(newParams);
  };

  const handleSearch = (value: string) => {
    const newParams = {
      ...params,
      gender: form.getFieldValue("gender"),
      keyword: value,
    };
    setParams(newParams);
    fetchUsers(newParams);
  };

  useEffect(() => {
    fetchUsers(params);
  }, []);

  return {
    handleSearch,
    form,
    pagination,
    users,
    handleTableChange,
    columns,
  };
};

export default useHome;
