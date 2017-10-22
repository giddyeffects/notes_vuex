<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus" title="Add New Note"></i>
        <i @click="toggleFavorite(activeNote)" class="glyphicon glyphicon-star":class="{starred: activeNote.favorite }" title="Add to Favorites"></i>
        <i @click="deleteNote(activeNote)" class="glyphicon glyphicon-remove" title="Delete Note"></i>
    </div>
</template>
<script>
import { isEmpty, emptyNote } from '../vuex/actions'

export default {
    computed: {
        activeNote () {
            return isEmpty(this.$store.getters.activeNote)?emptyNote:this.$store.getters.activeNote
        },
        activeNoteText () {
            return isEmpty(this.$store.getters.activeNote)?'':this.$store.getters.activeNoteText
        },
    },
    methods: {
        addNote () {
            this.$store.dispatch('addNote')
        },
        toggleFavorite (note) {
            this.$store.dispatch('toggleFavorite', {id:note.id, text: this.activeNoteText, fav: this.activeNote.favorite})
        },
        deleteNote (note) {
            this.$store.dispatch('deleteNote', {id:note.id})
        }
    }
}
</script>
