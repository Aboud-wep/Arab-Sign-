import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CustomSpinner = ({ message = "Loading...", size = 24 }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Spin indicator={antIcon} />
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default CustomSpinner;
