const axios = require("axios")

class Bridge {

    constructor(app) {
        this.url = 'https://api.dialog.lk'
        this.app = app
    }

    call(req) {

        // PROPS
        let payload = {}


        // HEADERS
        payload.headers = { 'Content-Type': 'application/json' }


        // REQUEST : GET
        if ( req.method === 'GET' ) {
            payload.method = req.method
        }

        // REQUEST : POST
        if ( req.method === 'POST' ) {
            payload.method = req.method
            payload.body = JSON.stringify(req.params)
        }


        return new Promise((resolve, reject) => {
            axios({
                method: req.method,
                url: this.url + req.api,
                headers: payload.headers,
                data: {
                    applicationId: this.app.id,
                    password: this.app.password,
                }
            })
            .then(res => resolve(res))
            .catch(e => reject(e))
        })

    }

}

exports.Bridge = Bridge