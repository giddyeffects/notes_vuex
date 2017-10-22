//store.js

import Vue from 'vue'
import Vuex from 'vuex'
import { actions, isEmpty } from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

//the root, initial state object
//It's always recommended (and good practice) to initialize the state.
const state = {
    notes: [],
    activeNote: {}
}
// getters
const getters = {
    activeNote: state => state.activeNote,
    activeNoteText: state => state.activeNote.text,
    activeNoteID: state => state.activeNote.id,
    notes: state => state.notes //can opt to do notes: state => state.notes.notes
}

//define the possible mutations that can be applied to our state
const mutations = {
    GET_NOTE (state, notes) {
        state.notes = notes
    },
    ADD_NOTE (state, newNote) {
        state.notes.notes.push(newNote)
        state.activeNote = newNote
    },

    EDIT_NOTE (state, text) {
        state.activeNote.text = text
    },

    DELETE_NOTE (state) {
        if(!isEmpty(state.activeNote)){
            const index = state.notes.notes.findIndex(t => t.text === state.activeNote.text);
            state.notes.notes.splice(index, 1) 
            state.activeNote = state.notes.notes[0]
        }
    },

    TOGGLE_FAVORITE(state, favorite) {
        state.activeNote.favorite = !state.activeNote.favorite
    },

    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note
    }
}

//create the Vuex instance by combining the state and the mutations objects
//then export the Vuex store for use by our components
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: debug
})