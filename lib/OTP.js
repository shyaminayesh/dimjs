const { Bridge } = require("./Bridge")

class OTP extends Bridge {

    request(req) {
        return new Promise((resolve, reject) => {

            this.call({
                method: "POST",
                api: '/subscription/otp/request'
            })
            .then(Response => {
                console.log( Response )
                resolve(Response)
            })
            .catch(e => reject(e))

        })
    }

}

exports.OTP = OTP