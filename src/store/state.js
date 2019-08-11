import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "./action.js";

const initialState = {
    searchText: "",
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;