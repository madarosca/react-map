import request from 'lib/request'
import { loginQuery } from 'queries/login'
import { RESET_STATE, AUTH_ERROR } from 'constants/action-types'
import { isLoading } from 'actions'

export const signInUser = ({ email, password }) => async (dispatch) => {
	const query = loginQuery(email, password)

	dispatch(isLoading(true))

	try {
		// const response = await request(query)
		// const { data } = response.data
		// const token = data.login.token
		// if (token) {
		// 	localStorage.setItem('token', token)
		// }
		dispatch(isLoading(false))
		dispatch(push('/map'))
	} catch (error) {
		alert(error)
		dispatch(authError(error.message))
		dispatch(isLoading(false))
	}
}

// export const signOut = () => {
//     localStorage.removeItem('token');
//     dispatch(RESET_STATE, []);
// }

export const authError = (error) => (dispatch) => dispatch(AUTH_ERROR, error)
