let initialState = {
    data: [],
    tableHeader: [
        "accountId",
        "accountType",
        "displayName",
        "role"
    ],
    selectedIndex: -1
}

export default function (currentState = initialState, action) {
    console.log(action);
    switch (action.type) {
        case "SET_DATA":
            return {
                ...currentState,
                data: action.data
            }
        case "SET_SELECT":
            return {
                ...currentState,
                selectedIndex: action.selectedIndex
            }
        default: return currentState

    }

}