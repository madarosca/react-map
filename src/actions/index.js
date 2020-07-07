import { LOADING } from 'constants/action-types';

export const isLoading = (loading) => ({
  type: LOADING,
  payload: loading
})