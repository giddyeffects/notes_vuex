<template>
    <div id="note-editor">
        <textarea name="" id="" cols="30" rows="10" :value="activeNoteText" @input="editNote" class="form-control"></textarea>
    </div>
</template>

<script>
//import { editNote } from '../vuex/actions'
import { isEmpty, emptyNote } from '../vuex/actions'
export default {
    computed: {
        activeNoteText () {
            return isEmpty(this.$store.getters.activeNote)?'':this.$store.getters.activeNoteText
        },
        activeNoteID () {
            return isEmpty(this.$store.getters.activeNote)?'':this.$store.getters.activeNoteID
        },
        activeNote () {
            return isEmpty(this.$store.getters.activeNote)?emptyNote:this.$store.getters.activeNote
        }
    },
    methods: {
        editNote (e) {
            this.$store.dispatch('editNote', {e:e, id:this.activeNoteID, fav:this.activeNote.favorite })
        }
    }
}
</script>

