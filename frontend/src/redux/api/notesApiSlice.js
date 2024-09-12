import { apiSlice } from './apiSlice';
import { NOTES_URL } from '../constants';

export const notesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createNote: builder.mutation({
            query: data => ({
                url: `${NOTES_URL}`,
                method: "POST",
                body: data,
            }),
        }),
        getNotes: builder.query({
            query: () => ({
                url: NOTES_URL
            })
        }),
        updateNote: builder.mutation({
            query: ({ noteId, updatedNote }) => ({
                url: `${NOTES_URL}/${noteId}`,
                method: 'PUT',
                body: updatedNote
            })
        }),
        deleteNote: builder.mutation({
            query: (noteId) => ({
                url: `${NOTES_URL}/${noteId}`,
                method: 'DELETE'
            })
        }),
    })
});

export const { useCreateNoteMutation, useGetNotesQuery, useUpdateNoteMutation, useDeleteNoteMutation } = notesApiSlice;