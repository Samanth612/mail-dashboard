export default function AuthReducer(state: null, action: any) {
  switch (action.type) {
    case "userLoggedIn":
      return { isOK: true, token: action.payload.data.token };
    case "userLoggedOut":
      return false;
    default:
      return state || null;
  }
}
