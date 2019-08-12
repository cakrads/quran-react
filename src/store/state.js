import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "./action.js";

const initialState = {
    searchText: "",
    selectedAya: null
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;