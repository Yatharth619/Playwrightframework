export class LoginPage 
{
constructor(page)
{
 this.page = page
 this.username = page.locator('#user-name')
 this.password = page.locator('#password')
 this.loginbutton = page.locator('#login-button')
 this.errormessage = page.locator("h3[data-test ='error']")
}
async navigate()
{
    await this.page.goto('/')
}
async login (username, password)
{
await this.username.fill(username)
await this.password.fill(password)
await this.loginbutton.click()
}
}