export const mailsData = (state: [], action: any) => {
  switch (action.type) {
    case "setMails":
      return action.payload;
    default:
      return state || [];
  }
};
