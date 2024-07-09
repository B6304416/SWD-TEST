import React, { useState } from 'react';

import FormComponent from './test3/form';
import TableComponent from './test3/table';
import { Provider } from 'react-redux';
import { store } from '../store';
import './test3/test3.scss';
import { useTranslation } from 'react-i18next';
const Test3: React.FC = () => {
    const [editingRecord, setEditingRecord] = useState<any>(null);
    const { t } = useTranslation();

    const handleEdit = (record: any) => {
        setEditingRecord(record);
    };

    const handleSubmit = () => {
        setEditingRecord(null);
    };

    return (
        <Provider store={store}>
            <h1>{t('test1')}</h1>
            <div className="t3-form">
                <FormComponent initialValues={editingRecord} onSubmit={handleSubmit} />
            </div>
            <div className="t3-table">
                <TableComponent onEdit={handleEdit} />
            </div>
        </Provider>
    );
};

export default Test3;