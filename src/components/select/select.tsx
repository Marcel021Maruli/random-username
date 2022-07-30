import React from "react";
import { Form, Select } from "antd";

const { Option } = Select;

interface ISelectInput {
  options: { value: string; name: string }[];
  name?: string;
  label?: string;
}

const SelectInput = ({ options, name, label }: ISelectInput) => {
  return (
    <Form.Item name={name} label={label}>
      <Select>
        {options?.map((option, indx) => {
          return (
            <Option key={`${indx}-${option.value}`} value={option.value}>
              {option.name}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default SelectInput;
