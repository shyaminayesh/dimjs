const { Bridge } = require("./Bridge")

class OTP extends Bridge {

    request(req) {
        return new Promise((resolve, reject) => {

            this.call({
                method: "POST",
                api: '/subscription/otp/request',
                payload: {
                    subscriberId: 'tel:' + req.tel,
                    applicationMetaData: {
                        client: "MOBILEAPP",
                        device: req.device,
                        os: req.os,
                        appCode: req.appCode
                    }
                }
            })
            .then(Response => resolve(Response))
            .catch(e => reject(e))

        })
    }

}

exports.OTP = OTP