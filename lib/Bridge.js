const axios = require("axios")

class Bridge {

    constructor(app) {
        this.url = 'https://api.dialog.lk'
        this.app = app
    }

    call(req) {

        // PROPS
        let payload = {}

        // METHOD
        payload.method = ( req.method ) ? req.method : 'GET'

        // HEADERS
        payload.headers = { 'Content-Type': 'application/json' }

        // DATA
        payload.data = {
            applicationId: this.app.id,
            password: this.app.password
        }
        payload.data = Object.assign(payload.data, req.payload)

        return new Promise((resolve, reject) => {
            axios({
                method: req.method,
                url: this.url + req.api,
                headers: payload.headers,
                data: payload.data
            })
            .then(res => resolve(res))
            .catch(e => reject(e))
        })

    }

}

exports.Bridge = Bridge