const baseUrl = "http://localhost:5000";
// const baseUrl = "https://api-test.hadielearning.com";

export const API = `${baseUrl}/api`;

export const toImageUrl = (filePath) => {
  return `${baseUrl}/${filePath.replace(/\\/g, "/")}`;
};
