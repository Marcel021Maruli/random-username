import { memo } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

interface ISearchInput {
  onSearch: Function;
}

const SearchInput = ({ onSearch }: ISearchInput) => (
  <div>
    <Search
      placeholder='Search...'
      onSearch={(value: any) => onSearch(value)}
      enterButton
    />
  </div>
);

export default memo(SearchInput);
