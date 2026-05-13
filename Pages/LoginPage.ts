class LoginPage {

    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get loginBtn() {
        return $('#login');
    }

    async login(user: string, pass: string) {
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginBtn.click();
    }
}

export default new LoginPage();
