import {createSelector, createSlice} from '@reduxjs/toolkit'
import data from './data'
import {RootState} from '../store'

const initialState = {
    sections: data
}

const directorySlice = createSlice({
    name: 'directory',
    initialState,
    reducers: {}
})


export const selectDirectorySections = createSelector(
    [(state: RootState)=> state.directory],
    (directory) => directory.sections
)


export default directorySlice.reducer