import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {defaultData} from './data';
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
console.log(defaultData);
interface FormState {
    formData: FormData[];
}
const storedFormData = localStorage.getItem('formData');

if (storedFormData === null || storedFormData === '[]') {
    // If no data in localStorage, set defaultData into localStorage
    localStorage.setItem('formData', JSON.stringify(defaultData));
}
const initialState: FormState = {
    formData: JSON.parse(localStorage.getItem('formData') || '[]'),
};



const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addFormData: (state, action: PayloadAction<FormData>) => {
            state.formData.push(action.payload);
            localStorage.setItem('formData', JSON.stringify(state.formData));
        },
        updateFormData: (state, action: PayloadAction<FormData>) => {
            const index = state.formData.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.formData[index] = action.payload;
                localStorage.setItem('formData', JSON.stringify(state.formData));
            }
        },
        deleteFormData: (state, action: PayloadAction<string>) => {
            state.formData = state.formData.filter(item => item.id !== action.payload);
            localStorage.setItem('formData', JSON.stringify(state.formData));
        },
        deleteMultipleFormData: (state, action: PayloadAction<string[]>) => {
            state.formData = state.formData.filter(item => !action.payload.includes(item.id));
            localStorage.setItem('formData', JSON.stringify(state.formData));
        },
    },
});

export const { addFormData, updateFormData, deleteFormData, deleteMultipleFormData } = formSlice.actions;
export default formSlice.reducer;