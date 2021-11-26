import { searchVideo } from "@/api/search";

export default {

    namespaced: true,

    state: () => ({
        currentVideo: {
            url: "https://www.youtube.com/embed/2DQFFLHNrKo",
            title: "Título del video"
        },
        videoResults: []
    }),

    mutations: {

        SET_CURRENT_VIDEO(state, payload) {
            state.currentVideo = payload;
        },

        SET_VIDEO_RESULTS(state, { results }) {
            state.videoResults = results;
        }

    },

    actions: {

        searchVideo({ commit }, { query }) {

            searchVideo(query)
            .then(results => {
                commit("SET_VIDEO_RESULTS", { results: results.data.items })
            })
            .catch(e => {
                console.error("Surgió un error", e);
            });

        }

    }

}