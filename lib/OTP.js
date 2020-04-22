const { Bridge } = require("./Bridge")

class OTP extends Bridge {

    request(req) {
        console.log( req )
        return new Promise((resolve, reject) => {

            console.log( this.params )

            resolve()
        })
    }

}

exports.OTP = OTP