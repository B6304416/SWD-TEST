import React from 'react';
import { Layout, Select } from 'antd';
import { useTranslation } from 'react-i18next';


const { Header } = Layout;
const { Option } = Select;

const AppHeader: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Header className="app-header">
      <Select 
        defaultValue={i18n.language} 
        style={{ width: 80 }} 
        onChange={changeLanguage}
      >
        <Option value="en">EN</Option>
        <Option value="th">TH</Option>
      </Select>
    </Header>
  );
};

export default AppHeader;