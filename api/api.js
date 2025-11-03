// This is the base URL for your deployed Render server
const SERVER_URL = "https://mini-server-dxhx.onrender.com";

export const fetchProjects = async () => {
  const response = await fetch(`${SERVER_URL}/api/data`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects from server");
  }

  const data = await response.json();

  const processedData = data.map((project) => {
    let languagesArray = [];

    if (typeof project.Languages === "string" && project.Languages.length > 0) {
      languagesArray = project.Languages.split(",").map((lang) => lang.trim());
    } else if (Array.isArray(project.Languages)) {
      languagesArray = project.Languages;
    }

    return {
      ...project,
      Languages: languagesArray,
    };
  });

  return processedData;
};
