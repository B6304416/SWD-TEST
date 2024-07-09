import React, { useState } from 'react';
import { Table, Button, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { deleteFormData, deleteMultipleFormData } from '../../tool/redux';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';

interface FormData {
    id: string;
    title: string;
    firstname: string;
    lastname: string;
    birthday: string;
    nationality: string;
    citizenID: string;
    gender: string;
    mobilePhone: string;
    passportNo: string;
    expectedSalary: string;
}

interface TableComponentProps {
    onEdit: (record: FormData) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({ onEdit }) => {
    const dispatch = useDispatch();
    const formData = useSelector((state: RootState) => state.form.formData);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const { t } = useTranslation();
    const columns: ColumnsType<FormData> = [
        {
            title: t('title'),
            dataIndex: 'firstname',
            sorter: (a: any, b: any) => a.firstname.localeCompare(b.firstname),
        },
        {
            title: t('gender'),
            dataIndex: 'gender',
            sorter: (a: any, b: any) => a.gender.localeCompare(b.gender),
            // filters: [
            //     { text: 'Male', value: 'Male' },
            //     { text: 'Female', value: 'Female' },
            //     { text: 'Unisex', value: 'Unisex' },
            // ],
            // onFilter: (value: string, record: any) => record.gender === value,
        },
        {
            title: t('mobilePhone'),
            dataIndex: 'mobilePhone',
            sorter: (a: any, b: any) => a.mobilePhone.localeCompare(b.mobilePhone),
        },
        {
            title: t('nationality'),
            dataIndex: 'nationality',
            sorter: (a: any, b: any) => a.nationality.localeCompare(b.nationality),
        },
        {
            title: t('manage'),
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <Button onClick={() => onEdit(record)}>Edit</Button>
                    <Button onClick={() => dispatch(deleteFormData(record.id))}>Delete</Button>
                </Space>
            ),
        },
    ];

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleDeleteSelected = () => {
        dispatch(deleteMultipleFormData(selectedRowKeys as string[]));
        setSelectedRowKeys([]);
    };

    return (
        <>
            <Button onClick={handleDeleteSelected} disabled={selectedRowKeys.length === 0}>
                Delete Selected
            </Button>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={formData}
                rowKey="id"
                pagination={{ pageSize: 10, position: ['topRight'] }}
            />
        </>
    );
};

export default TableComponent;