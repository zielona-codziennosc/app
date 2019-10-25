//no trailing slash is allowed here.
const ROOT = `https://trace.papiewski.tk`;

export default {
  ROOT,
  LOGIN: `${ROOT}/user/login`,
  LOGOUT: `${ROOT}/user/logout`,
  USER_OF_ID: userId => ({
    ROOT: `${ROOT}/user/${userId}/`,
    DAILY_ACTIVITY: `${ROOT}/user/${userId}/daily`,
    COORDINATES: `${ROOT}/user/${userId}/coordinates`,
    PHOTO: {
      ROOT: `${ROOT}/user/${userId}/photo`,
      OF_ID: photoId => `${ROOT}/user/${userId}/${photoId}`
    }
  })
}
