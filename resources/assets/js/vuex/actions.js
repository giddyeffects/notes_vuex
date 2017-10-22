import axios from 'axios'

export const actions = {
    getNotes ({ commit }) {
        axios.get('/api/notes').then( (response) => { 
            commit('GET_NOTE', { notes: response.data })
        }, (err) => {
            console.log(err)
        })
    },
    addNote ({ commit }) {
        const newNote = {
            text: 'New note',
            favorite: false,
        }
        axios.post('/api/notes', newNote).then( (response) => { 
            commit('ADD_NOTE', newNote)
        }, (err) => {
            console.log(err)
        })
    },
    editNote ({ commit }, {e, id, fav}) {//@TODO try passing whole activeNote object again..it has refused :)
        if(id) {
            let update = {
                text: e.target.value,
                favorite: fav
            }
            axios.patch('/api/notes/'+id, update).then( (response) => {
                commit('EDIT_NOTE', e.target.value)
            }, (err) => {
                console.log(err)
            })
        }
    },
    deleteNote ({ commit }, {id}) {
        if(id) {
            axios.delete('/api/notes/'+id).then( (response) => {
                commit('DELETE_NOTE')
            }, (err) => {
                console.log(err)
            })
        }
    },
    updateActiveNote ({ commit }, note) {
        commit('SET_ACTIVE_NOTE', note)
    },
    toggleFavorite ({ commit }, {id, text, fav}) {
        if(id){
            fav = !fav
            let update = {
                text,
                favorite: fav
            }
            axios.patch('api/notes/'+id, update).then( (response) => {
                commit('TOGGLE_FAVORITE')
            }, (err) => {
                console.log(err)
            })
        }
    }
}

export const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const emptyNote = {}