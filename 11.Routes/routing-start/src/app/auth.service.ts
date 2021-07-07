export class AuthService {
    loggedIn = false;

    isAuthenticated () {
        const promise = new Promise (
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 800)
            }
        );
        return promise;
    }
    login() {
        console.log('You have login!')
        this.loggedIn = true
    }

    logout() {
        console.log('You have logged out!')
        this.loggedIn = false; 
    }
}