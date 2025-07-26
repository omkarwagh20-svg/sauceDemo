class loginPage{

    constructor(page){
     this.page = page
     this.userName = page.locator("//input[@id='user-name']")
     this.passWord = page.locator("//input[@id='password']")
     this.loginButton = page.locator("//input[@id='login-button']")
    }

    async login(username,password){
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.loginButton.click()
    }
}
module.exports = loginPage;