import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    studData: [
        {
            id: 1,
            Name: 'Sri Ram',
            Age: '2024-01-21',
            Gender: 'Male',
            Class: 9,
            Marks1: 100,
            Marks2: 100,
            Marks3: 100
        }
    ]
};

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            const { id, userName, userDOB, Gender, class: Class, marks1, marks2, marks3 } = action.payload;
            const existingStudentIndex = state.studData.findIndex(student => student.id === id);
            if (existingStudentIndex !== -1) {
                // Update existing student
                state.studData[existingStudentIndex] = {
                    id ,
                    Name: userName,
                    Age: userDOB,
                    Gender,
                    Class,
                    Marks1: marks1,
                    Marks2: marks2,
                    Marks3: marks3
                };
            } else {
                // Add new student
                const newStudent = {
                    id: nanoid(),  // Generate a new ID only if one isn't provided
                    Name: userName,
                    Age: userDOB,
                    Gender,
                    Class,
                    Marks1: marks1,
                    Marks2: marks2,
                    Marks3: marks3
                };
                state.studData.push(newStudent);
            }
        },
        removeStudent: (state, action) => {
            const idToRemove = action.payload;
            state.studData = state.studData.filter(student => student.id !== idToRemove);
        }
    }
});

export const { addStudent, removeStudent } = studentSlice.actions;

export default studentSlice.reducer;
