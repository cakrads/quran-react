export const setSearchText = (store, text) => {
    const searchText = text;
    store.setState({
        searchText
    });
};