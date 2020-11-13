const LoginPage = require('../pages/login.page');
const LoginWithPinPage = require('../pages/loginwithpin.page');

describe('Login page', () => {
    beforeEach(() => {
        
    });
    it('Should open the url and verify the title', () => {
        LoginPage.open();
        expect(browser).toHaveTitle('CTI');
    });

    // When entering invalid Email Id / Phone Number and valid Password
    // it('Should throw error message for Email Id/Phone Number field', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.loginBtn.click();
    //     browser.pause(5000);
    //     expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText('Wrong login id format, either it should be a valid phone number or an email Id.');//Text can be changed
    //     browser.pause(5000);
    // });

    // When entering valid Email Id / Phone Number and invalid Password
    // it('Should throw error message for Password field', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('9211');
    //     LoginPage.loginBtn.click();
    //     browser.pause(5000);
    //     expect(LoginPage.errorMsgPassword).toHaveText('You have entered incorrect password.');//Text can be changed
    //     browser.pause(5000);
    // });

    // When entering invalid Email Id / Phone Number and invalid Password
    // it('Should throw error message for both Email Id/Phone Number and Password field', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond');
    //     LoginPage.passwordInput.addValue('500500');
    //     LoginPage.loginBtn.click();
    //     browser.pause(5000);
    //     expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText('Wrong login id format, either it should be a valid phone number or an email Id.');//Text can be changed
    //     expect(LoginPage.errorMsgPassword).toHaveText('You have entered incorrect password.');//Text can be changed
    //     browser.pause(5000);
    // });

    // When entering valid login credentials
    // it('User should get login', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.loginBtn.click();
    //     browser.pause(5000);
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     browser.pause(5000);
    // });

    // After login should get login with pin
    // it('Should get Login With Pin', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     LoginPage.loginBtn.click();
    //     //browser.pause(5000);
    //     //expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginPage.pinInput.addValue('6001');
    //     LoginPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     browser.pause(5000);
    // });

    // After login when entering invalid pin should throw error message
    // it('Should throw error message', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     LoginPage.loginBtn.click();
    //     //browser.pause(5000);
    //     //expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginPage.pinInput.addValue('92119211');
    //     LoginPage.verifyPinBtn.click();
    //     //browser.pause(10000);
    //     expect(LoginPage.errorMessageLoginWithPin).toHaveText('Wrong Pin.');
    //     browser.pause(5000);
    // });

    // Student Sign Out
    // it('Student should get Sign Out', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     LoginPage.loginBtn.click();
    //     LoginPage.pinInput.addValue('6001');
    //     LoginPage.verifyPinBtn.click();
    //     LoginPage.signOutBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    //     browser.pause(5000);
    // });

    // When try to login again we should get credentials prefilled becuse we marked Remember Me as checked
    it('Student should get Sign Out', () => {
        LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
        LoginPage.passwordInput.addValue('5001');
        LoginPage.checkboxInput.click();
        LoginPage.loginBtn.click();
        LoginPage.pinInput.addValue('6001');
        LoginPage.verifyPinBtn.click();
        LoginPage.signOutBtn.click();
        expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
        browser.pause(5000);
    });


    //  When entering valid login credentials and marking remember me as checked
    // it('User gets login and after sign out their credentials should be prefilled when go to Login page', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     LoginPage.loginBtn.click();
    //     browser.pause(10000);
    // });

    // it('checkbox should get checked', () => {
    //     LoginPage.checkboxInput.click();
    //     browser.pause(10000);
    // });


    // it('forgot password should get clicked', () => {
    //     LoginPage.forgotPassword.click();
    //     browser.pause(5000);
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/user/user/forgot');
    //     browser.pause(15000);
    // });
});