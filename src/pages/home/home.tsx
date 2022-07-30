import React from "react";
import useHome from "./home.hooks";

import { Button, Col, Form, Layout, Row } from "antd";

import Search from "../../components/search";
import Select from "../../components/select";
import Table from "../../components/table";

const Home = () => {
  const { handleSearch, form, pagination, users, handleTableChange, columns } =
    useHome();

  return (
    <Layout className='u-container'>
      <Form layout='vertical' form={form} initialValues={{ gender: "" }}>
        <Row gutter={[24, 24]}>
          <Col>
            <Form.Item label='Search' name='keywords'>
              <Search onSearch={handleSearch} />
            </Form.Item>
          </Col>
          <Col>
            <Select
              options={[
                { value: "", name: "All" },
                { value: "male", name: "Male" },
                { value: "female", name: "Female" },
              ]}
              name='gender'
              label='Gender'
            />
          </Col>
          <Col>
            <Form.Item style={{ marginTop: "25px" }}>
              <Button onClick={() => form.resetFields()}>Reset Filter</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        data={users}
        columns={columns}
        onChange={handleTableChange}
        pagination={pagination}
      />
    </Layout>
  );
};

export default Home;
