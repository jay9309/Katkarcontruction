import api from "./api";


// Get all projects
export const getProjects = async () => {
    const response = await api.get("/projects");

    return response.data;
};


// Get projects by status
export const getProjectsByStatus = async (status) => {
    const response = await api.get(
        `/projects?status=${status}`
    );

    return response.data;
};


// Get single project
export const getProject = async (id) => {
    const response = await api.get(
        `/projects/${id}`
    );

    return response.data;
};


// Create project
export const createProject = async (projectData, token) => {

    const response = await api.post(
        "/projects",
        projectData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};


// Update project
export const updateProject = async (
    id,
    projectData,
    token
) => {

    const response = await api.put(
        `/projects/${id}`,
        projectData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};


// Delete project
export const deleteProject = async (
    id,
    token
) => {

    const response = await api.delete(
        `/projects/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};