const { OTP } = require('./OTP')

class IdeaMart {
    constructor(params) {

        // PROPS
        let app = {
            id: null,
            password: null
        }

        // VALIDATE
        if ( !params.ID ) {
            throw Error("You must include the IdeaMart app id")
        } else {
            app.id = params.ID
        }

        if ( !params.PASSWORD ) {
            throw Error("You must include the IdeaMart app password")
        } else {
            app.password = params.PASSWORD
        }

        // MODULES
        this.otp = new OTP(app)
    }
}

exports.IdeaMart = IdeaMart