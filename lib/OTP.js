const { Bridge } = require("./Bridge")

class OTP extends Bridge {

    request(req) {
        return new Promise((resolve, reject) => {
            this.call({
                method: "POST",
                api: "/subscription/otp/request",
                payload: {
                    subscriberId: 'tel:' + req.tel,
                    applicationMetaData: {
                        client: "MOBILEAPP",
                        device: req.device,
                        os: req.os,
                        appCode: req.app_code
                    }
                }
            })
            .then(Response => resolve(Response))
            .catch(e => reject(e))
        })
    }

    verify(req) {
        return new Promise((resolve, reject) => {
            this.call({
                method: "POST",
                api: "/subscription/otp/verify",
                payload: {
                    referenceNo: req.reference_no,
                    otp: req.otp
                }
            })
            .then(Response => resolve(Response))
            .catch(e => reject(e))
        })
    }

}

exports.OTP = OTP