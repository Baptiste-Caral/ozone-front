/* eslint-disable linebreak-style */
const authMiddleware = (store) => (next) => (action) => {
  next(action);
};
export default authMiddleware;
