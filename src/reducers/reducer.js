let initialState = {
    data: [],
    tableHeader: [
        "accountId",
        "accountType",
        "displayName",
        "role"
    ]
}

export default function (currentState = initialState, action) {
    console.log(action);
    switch (action.type) {
        case "SET_DATA":
            return {
                ...currentState,
                data: action.data
            }
        default: return currentState

    }

}