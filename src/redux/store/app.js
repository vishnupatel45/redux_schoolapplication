import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../slice/appslice.js';
import editstudentReducer from '../slice/editslice.js';

export const store = configureStore({
    reducer: {
        student: studentReducer,
        updateStudent: editstudentReducer
    }
});
