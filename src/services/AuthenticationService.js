class AuthenticationService {
    constructor() {
      this.baseUrl = 'https://fosterpet.azurewebsites.net';
    }

    //login function
    async login(email, password) {
      try {
        const response = await fetch(`${this.baseUrl}/api/auth/admin-login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error('Invalid credentials');
        }

        const data = await response.json();
        console.warn("login response ",data);
        return data; // You may want to return a user token or user data here
      } catch (error) {
        throw error;
      }
    }


    //register function
    async register(firstName,lastName, email, password) {

        try {
          const response = await fetch(`${this.baseUrl}/api/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName,lastName, email, password }),
          });

          if (!response.ok) {
            throw new Error('Registration failed');
          }

          const data = await response.json();

          console.warn(data);
          return data; // You may want to return user data or a success message
        } catch (error) {
          throw error;
        }
    }


    //email verification
    async emailVerification(email,verificationCode) {

      try {
        const response = await fetch(`${this.baseUrl}/api/auth/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email,verificationCode }),
        });

        if (!response.ok) {
          throw new Error('Invalid verification code');
        }

        const data = await response.json();
        console.warn("verified");
        console.warn(data);
        return data;
      } catch (error) {
        throw error;
      }
  }


  }

// Create an instance of AuthenticationService
const authService = new AuthenticationService();

// Export the instance as the default export
export default authService;
