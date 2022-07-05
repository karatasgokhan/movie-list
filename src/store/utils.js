export const prepareHeaders = (headers, isSecure) => {
  if (isSecure) {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjIyN2VjNWNiMGM3MDVhNTA0Y2U2OTljOGIyYmU0ZCIsInN1YiI6IjYyYzMyNDI3YzUyNWM0MDA1OGMyZDE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SR82PZBXS4lOU_Abme7DqfqIuAbJIF9EMv2N195YICw";
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }
  return headers;
};
