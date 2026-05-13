import ElementHelper from '../helpers/elementHelper';

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

    async login(
        username: string,
        password: string
    ) {

        await ElementHelper.type(
            this.username,
            username
        );

        await ElementHelper.type(
            this.password,
            password
        );

        await ElementHelper.click(
            this.loginBtn
        );
    }
}

export default new LoginPage();
