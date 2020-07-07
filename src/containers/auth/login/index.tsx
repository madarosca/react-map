import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'components/Button'
// import { signInUser } from 'actions/login'

export default class Login extends Component<{}> {
	state = {
		email: '',
		password: '',
		isLoading: false
	}

	render() {
		const { email, password, isLoading } = this.state

		return (
			<Container fluid className='min-vh-100 d-flex flex-column justify-content-center'>
				<Row className='justify-content-center'>
					<Col xs={12} className='mb-4'>
						<h2>User Login</h2>
					</Col>
					<Col xs>
						<Form>
							<Form.Group controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type='email'
									placeholder='Enter email'
									value={email}
									disabled={isLoading}
									onChange={this.handleEmailChange}
								/>
								<Form.Text className='text-muted'>
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									placeholder='Password'
									value={password}
									disabled={isLoading}
									onChange={this.handlePasswordChange}
								/>
							</Form.Group>
							<Button
								className='float-right'
								text={isLoading ? 'Loading…' : 'Login'}
								disabled={isLoading}
								onClick={this.handleLoginSubmit}
							/>
						</Form>
					</Col>
				</Row>
			</Container>
		)
	}

	handleEmailChange = ({ target }: any) => {
		this.setState({ email: target.value })
	}

	handlePasswordChange = ({ target }: any) => {
		this.setState({ password: target.value })
	}

	handleLoginSubmit = () => {
		const { email, password } = this.state

		console.log({ email, password })
		console.log(this.props)
		this.props.history.push('/map')

		// signInUser({ email, password }).then(() =>
		//   this.setState({ isLoading: false })
		// );
	}
}
