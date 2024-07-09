import React, {useEffect} from 'react';
import { Form, Input, DatePicker, Select, Radio, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addFormData, updateFormData } from '../../tool/redux';
import { v4 as uuidv4 } from 'uuid';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import CitizenIDInput from './citizenIDInput';
import moment from 'moment'; 

const { Option } = Select;

interface FormComponentProps {
    initialValues?: any;
    onSubmit?: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ initialValues, onSubmit }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    console.log(initialValues);

    useEffect(() => {
        // Update form values when initialValues change
        if (initialValues) {
          // Ensure date fields are properly formatted
          const initialValuesFormatted = {
            ...initialValues,
            birthday: initialValues.birthday ? moment(initialValues.birthday) : null, // Parse 'birthday' field as a moment object
          };
          form.setFieldsValue(initialValuesFormatted);
        }
      }, [initialValues, form]);

    const onFinish = (values: any) => {
        const formData = {
            ...values,
            id: initialValues?.id || uuidv4,
            birthday: values.birthday.format('YYYY-MM-DD') || '',
        };

        if (initialValues) {
            dispatch(updateFormData(formData));
        } else {
            dispatch(addFormData(formData));
        }

        form.resetFields();
        if (onSubmit) onSubmit();
    };

    return (
        <Form form={form} onFinish={onFinish} initialValues={initialValues}>
            <Row>
                <Col span={4}>
                    <Form.Item name="title" label={t('title')} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item name="firstname" label={t('firstname')} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item name="lastname" label={t('lastname')} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="birthday" label={t('birthday')} rules={[{ required: true }]}>
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="nationality" label={t('nationality')} rules={[{ required: true }]}>
                        <Select>
                            <Option value="Thai">{t('thai')}</Option>
                            <Option value="Other">{t('other')}</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="citizenID"
                        label={t('citizenID')}
                        rules={[
                            { required: true },
                            {
                                validator: (_, value) => {
                                    const parts = value.split('-');
                                    if (parts.length !== 5 ||
                                        parts[0].length !== 1 ||
                                        parts[1].length !== 4 ||
                                        parts[2].length !== 5 ||
                                        parts[3].length !== 2 ||
                                        parts[4].length !== 1) {
                                        return Promise.reject('Please enter a valid Citizen ID');
                                    }
                                    return Promise.resolve();
                                }
                            }
                        ]}
                    >
                        <CitizenIDInput />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name="gender" label={t('gender')} rules={[{ required: true }]}>
                        <Radio.Group>
                            <Radio value="Male">{t('male')}</Radio>
                            <Radio value="Female">{t('female')}</Radio>
                            <Radio value="Unisex">{t('unisex')}</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Col span={8}>
                        <Form.Item name="mobilePhone" label={t('mobilePhone')} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Col>
                <Col span={24}>
                    <Col span={8}>
                        <Form.Item name="passportNo" label={t('passportNo')}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Col>
                <Col span={10}>
                    <Form.Item name="expectedSalary" label={t('expectedSalary')} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={4}></Col>
                <Col span={8}>
                    <Form.Item >
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button htmlType="button" onClick={() => form.resetFields()}>
                                {t('reset')}
                            </Button>
                            <Button htmlType="submit">
                                {t('submit')}
                            </Button>
                        </div>
                    </Form.Item>
                </Col>
                <Col span={2}></Col>
            </Row>
        </Form>
    );
};

export default FormComponent;