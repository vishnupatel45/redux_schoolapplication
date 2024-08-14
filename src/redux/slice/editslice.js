import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    Name: '',
    Age: '',
    Gender: '',
    Class: '',
    Marks1: '',
    Marks2: '',
    Marks3: ''
};

const editstudentslice = createSlice({
    name: 'updateStudent',
    initialState,
    reducers: {
        editstudent: (state, action) => {
            // Update state with the new student data
            return {
                ...state,
                id: action.payload.id,
                Name: action.payload.Name,
                Age: action.payload.Age,
                Gender: action.payload.Gender,
                Class: action.payload.Class,
                Marks1: action.payload.Marks1,
                Marks2: action.payload.Marks2,
                Marks3: action.payload.Marks3
            };
        }
    }
});

export const { editstudent } = editstudentslice.actions;

export default editstudentslice.reducer;
