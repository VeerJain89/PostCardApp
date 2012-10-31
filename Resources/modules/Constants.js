var constants = {
	
	//Initial screen size assumption
	Screen_Width : 320,
	Screen_Height : 460,
	
	// controllers name
	LoginController : 'LoginController',
	CreateCardController : 'CreateCardController',
	HomeController : "HomeController",
	CreateAccountController : "CreateAccountController",
	AddAddressController:'AddAddressController',
	
	// view name
	CreateCardView: 'CreateCardView',
	EditImageView: 'EditImageView',
	WriteMsgView: 'WriteMsgView',
	PreviewView: 'PreviewView',
	AddAddressView: 'AddAddressView',
	// core page constants
	controllerPath : 'app/controllers/',
	
	// Login page message
	UserName: 'username',
	Password: 'password',
	LoginValidation: 'Please enter your Username/Password.',
	LoginFaliure: 'Login Failure.\nPlease enter correct username/password.',
	NetworkFailure: 'No network connectivity',
	LoginSuccess: 'Success login.',
};

module.exports = constants; 