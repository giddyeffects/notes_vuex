<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>Notes | GiddyEffects</h2>
            <div class="btn-group btn-group-justified" role="group">
                <!-- All notes button -->
                <div class="btn-group" role="group">
                    <button title="Show All Notes" type="button" class="btn btn-default" @click="show = 'all'" :class="{active: show === 'all'}">All Notes</button>
                </div>
                <!-- Favorites button -->
                <div class="btn-group" role="group">
                    <button title="Show Favorites" type="button" class="btn btn-default" @click="show = 'favorites'" :class="{active: show === 'favorites'}">Favorites</button>
                </div>
            </div>
        </div>
        <!-- render notes in a list -->
        <div class="container">
            <div class="list-group">
                <a v-for="note in filteredNotes" :key="note.id" class="list-group-item" href="#" :class="{active: activeNote === note}" @click="updateActiveNote(note)">
                    <h4 class="list-group-item-heading">{{ note.text.trim().substring(0, 30)}} </h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { isEmpty, emptyNote } from '../vuex/actions'

export default {
    data () {
        return {
            show: 'all'
        }
    },
    computed: {
        activeNote () {
            return isEmpty(this.$store.getters.activeNote)?emptyNote:this.$store.getters.activeNote
        },
        notes () {
            return isEmpty(this.$store.getters.notes)?emptyNote:this.$store.getters.notes
        },
        filteredNotes () {
            if(!isEmpty(this.notes.notes)){
                if (this.show === 'all') {
                    return this.notes.notes
                } else if (this.show === 'favorites') {
                    return this.notes.notes.filter(note => note.favorite )
                }
            }
            else {
                return emptyNote
            }
        }
    },
    methods: {
        updateActiveNote (note) {
            this.$store.dispatch('updateActiveNote', note)
        }
    }
}
</script>
