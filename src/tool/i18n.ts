import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    Htest: 'Test',
                    test1: 'Layout & Style',
                    test2: 'Connect API',
                    test3: 'Form & Table',

                    t1_btn1: 'Move shape',
                    t1_btn2: 'Move position',

                    title: 'Title',
                    firstname: 'Firstname',
                    lastname: 'Lastname',
                    birthday: 'Birthday',
                    nationality: 'Nationality',
                    n_thai: 'Thai',
                    n_other: 'Other',
                    citizenID: 'Citizen ID',
                    gender: 'Gender',
                    male: 'Male',
                    female: 'Female',
                    unisex: 'Unisex',

                    mobilePhone: 'Mobile Phone',
                    passportNo: 'Passport No',
                    expectedSalary: 'Expected Salary',

                    reset: 'Reset',
                    submit: 'Submit',
                    manage: 'Manage',
                },
            },
            th: {
                translation: {
                    Htest: 'แบบทดสอบที่',
                    test1: 'การจัดการหน้าเว็บ',
                    test2: 'เชื่อมต่อ API',
                    test3: 'การจัดการหน้าฟอร์ม',

                    t1_btn1: 'เปลี่ยนรูปแบบ',
                    t1_btn2: 'เปลี่ยนตําแหน่ง',

                    title: 'คำนำหน้า',
                    firstname: 'ชื่อจริง',
                    lastname: 'นามสกุล',
                    birthday: 'วันเกิด',
                    nationality: 'สัญชาติ',
                    n_thai: 'ไทย',
                    n_other: 'อื่น ๆ',
                    citizenID: 'เลขบัตรประชาชน',
                    gender: 'เพศ',
                    male: 'ชาย',
                    female: 'หญิง',
                    unisex: 'ไม่ระบุ',
                    mobilePhone: 'หมายเลขโทรศัพท์มือถือ',
                    passportNo: 'หนังสือเดินทาง',
                    expectedSalary: 'เงินเดือนที่คาดหวัง',

                    reset: 'รีเซ็ต',
                    submit: 'บันทึก',
                    manage: 'จัดการ',
                },
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;