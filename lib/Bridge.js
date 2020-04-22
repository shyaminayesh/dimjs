const axios = require("axios")

class Bridge {

    constructor(app) {
        this.endpoint = 'https://api.dialog.lk'
    }

    call(req, callback) {

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

        console.log("Bridge::call")

    }

}

exports.Bridge = Bridge