import { Layout, Table } from "antd";

const TableComp = ({ data, columns, onChange, pagination }: any) => {
  return (
    <Layout className='u-container'>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={pagination}
      />
    </Layout>
  );
};

export default TableComp;
