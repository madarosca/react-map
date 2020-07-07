export const loginQuery = (email, password) =>
    `query {
        login (
            email: "${email}",
            password: "${password}"
        )
        {
            userId
            token
            tokenExpiration
        }
    }`
