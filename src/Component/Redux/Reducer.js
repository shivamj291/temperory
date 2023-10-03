const initialState = {
    Student: [],
    Admin: [],
    stuAuth:false,
    TeachAuth:false
  };
  
  export function Reducer(state = initialState, action) {
    switch (action.type) {
      case 'STUDENT':
        return { ...state, Student: action.payload };
      case 'ADMIN':
        return { ...state, Admin: action.payload };
      case 'STUAUTH':
        return { ...state, stuAuth: action.payload };
      case 'TEACHAUTH':
         return { ...state, TeachAuth: action.payload };
      default:
        return state;
    }
  }
  