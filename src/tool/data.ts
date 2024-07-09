interface FormData {
    id: string;
    title: string;
    firstname: string;
    lastname: string;
    birthday: string;
    nationality: string;
    citizenID: string;
    gender: 'Male' | 'Female' | 'Unisex';
    mobilePhone: string;
    passportNo: string;
    expectedSalary: string;
}
const defaultData: FormData[] = [
    {
        id: '1',
        title: 'Mr.',
        firstname: 'John',
        lastname: 'Doe',
        birthday: '1990-01-01',
        nationality: 'Thai',
        citizenID: '1-2345-67890-12-3',
        gender: 'Male',
        mobilePhone: '+66 812345678',
        passportNo: 'A1234567',
        expectedSalary: '50000',
    },
    {
        id: '2',
        title: 'Ms.',
        firstname: 'Jane',
        lastname: 'Smith',
        birthday: '1992-05-15',
        nationality: 'Other',
        citizenID: '9-8765-43210-98-7',
        gender: 'Female',
        mobilePhone: '+1 9876543210',
        passportNo: 'B9876543',
        expectedSalary: '60000',
    },
    {
        id: '3',
        title: 'Mr.',
        firstname: 'James',
        lastname: 'Brown',
        birthday: '1985-09-20',
        nationality: 'British',
        citizenID: '5-4321-09876-54-3',
        gender: 'Male',
        mobilePhone: '+44 7123456789',
        passportNo: 'C5432109',
        expectedSalary: '55000',
    },
    {
        id: '4',
        title: 'Ms.',
        firstname: 'Emily',
        lastname: 'Davis',
        birthday: '1991-12-03',
        nationality: 'American',
        citizenID: '8-7654-32109-87-6',
        gender: 'Female',
        mobilePhone: '+1 2345678901',
        passportNo: 'D7654321',
        expectedSalary: '62000',
    },
    {
        id: '5',
        title: 'Mr.',
        firstname: 'Michael',
        lastname: 'Wilson',
        birthday: '1988-07-15',
        nationality: 'Australian',
        citizenID: '3-2109-87654-32-1',
        gender: 'Male',
        mobilePhone: '+61 412345678',
        passportNo: 'E3210987',
        expectedSalary: '58000',
    },
    {
        id: '6',
        title: 'Ms.',
        firstname: 'Sophia',
        lastname: 'Lee',
        birthday: '1994-03-28',
        nationality: 'Korean',
        citizenID: '7-6543-21098-76-5',
        gender: 'Female',
        mobilePhone: '+82 1023456789',
        passportNo: 'F1098765',
        expectedSalary: '63000',
    },
];

export { defaultData }