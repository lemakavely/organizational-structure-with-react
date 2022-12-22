import { legacy_createStore as createStore } from "redux";

const treeReducer = (state = {showTree: false, showModal: false, showDetail: false, showList: false, addPage: false}, action: any) => {
    if (action.type === "showtree") {
        return {
            showTree: state.showTree = !state.showTree,
             showModal: state.showModal,
             showDetail: state.showDetail,
             showList: state.showList,
             addPage: state.addPage
        }
    }
    if (action.type === "showmodal") {
        return {
            showModal: state.showModal = !state.showModal,
            showTree: state.showTree,
            showDetail: state.showDetail,
            showList: state.showList,
            addPage: state.addPage

        }
    }
    if (action.type === "showdetail") {
        return {
            showDetail: state.showDetail = !state.showDetail,
            showTree: state.showTree,
            showModal: state.showDetail,
            showList: state.showList,
            addPage: state.addPage

        }
    }
    if (action.type === "showlist") {
        return {
            showList: state.showList = !state.showList,
            showTree: state.showTree,
            showModal: state.showDetail,
            showDetail: state.showDetail,
            addPage: state.addPage

        }
    }
    if (action.type === "addpagestate") {
        return {
            addPage: state.addPage = !state.addPage,
            showTree: state.showTree,
            showModal: state.showDetail,
            showDetail: state.showDetail,
            showList: state.showList

        }
    }

    return state;
};

const store = createStore(treeReducer);

export default store;