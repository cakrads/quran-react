export const setSearchText = (store, text) => {
    const searchText = text;
    store.setState({
        searchText
    });
};

export const setSelectedAya = (store, selected) => {
    const selectedAya = selected;
    store.setState({
        selectedAya
    });
};