const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
let initialState = {
    messagesData: [{ id: 1, message: "Hi" }, { id: 2, message: "I'm good" }, { id: 3, message: "How are you" }],
    dialogsData: [{ id: 1, name: "Petik" }, { id: 2, name: "Fin" }, {id:3 , name: "Den"}, {id:4 , name : "Vasya"}],
        }
const messagesPageReducer = (state = initialState,action) => {

    
    // stateCopy.messagesData = [...state.messagesData];
    switch (action.type) {
       
        // case UPDATE_MESSAGE :
        //     {return {...state,
        //         NewMessageText : action.body    
        //     };    
        // }
            case ADD_MESSAGE :
            let body = action.newMessageBody            
            {return {...state, 
                messagesData : [...state.messagesData, {id: 4 , message:body}],
                     
                };    
      
               }
            default: return state;
        }
    
    
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });
// export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE, newText: text });
export default messagesPageReducer;