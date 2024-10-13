class AuthContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    async authenticate(username, password) {
        return await this.strategy.authenticate(username, password);
    }
}


export default AuthContext; 