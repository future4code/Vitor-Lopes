export const updateCurrentPage = (newPage) => ({
  type: "UPDATE_CURRENT_PAGE",
  payload: {
    newPage, // mesma coisa que newPage: newPage
  }
});
