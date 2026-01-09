import { apiClient } from './apiClient';

export const auth = {
  isAuthenticated() {
    return !!apiClient.getAccessToken();
  },

  async login(email, password) {
    const response = await apiClient.post('/auth/login', { email, password });
    apiClient.setTokens(response.accessToken, response.refreshToken);
    return response;
  },

  async logout() {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      apiClient.clearTokens();
    }
  },

  async getCurrentUser() {
    return apiClient.get('/users/me');
  },
};


