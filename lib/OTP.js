const { Bridge } = require("./Bridge")

class OTP extends Bridge {

    request(req) {
        // console.log( req )
        return new Promise((resolve, reject) => {

            this.call({

            }, )

            resolve()
        })
    }

}

exports.OTP = OTP