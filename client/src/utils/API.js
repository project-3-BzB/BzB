import axios from 'axios'

// Pseudocoding out some basic routes


export default {
    //Get all saved docs
    get: function() {
        axios.get(`/api/docs`)
    },
    //Save new doc
    save: function(data) {
        axios.post(`/api/`)
    },
    //Update a doc
    update: function(data) {
        axios.put()
    },
    //Delete a doc
    delete: function(id) {
        axios.delete()
    }

    //USER ROUTES

}