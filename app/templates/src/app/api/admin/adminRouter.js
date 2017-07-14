
// Import core modules
import express from 'express';

// Import custom modules
import adminModel from './adminModel';
import Decorator from '../../helpers/decorator';
import * as constants from '../../helpers/constants';

let _this,
    router = new express.Router();

/**
 * Accept and respond to requests related to application configurations
 * These route endpoints should not be used for tasks related to the general business logic of Pulse
 */
class AdminRouter extends Decorator {

    /**
     * Constructor
     * @returns {express.Router} - Module express router to be used by the Root express router
     */
    constructor() {
        super();
        _this = this;

        // API Endpoints of AdminRouter module
        router.post('/errorConfig', _this.overrideErrorConfig);

        return router;
    }

    /**
     * Override the 'path' or 'causes' attribute of the Error object which is added by the appendDetails prototype function
     * @param {Object} req - http Request
     * @param {Object} res - http Response
     */
    overrideErrorConfig(req, res) {
        adminModel.overrideErrorConfig(req.body).then(function (statusCode) {
            return res.status(statusCode)
                .send("Error prototype config updated successfully");
        }).catch(function (err) {
            err.appendDetails("AdminRouter", "overrideErrorConfig");
            _this.logger.error(`Error: ${err.message}\nPath: ${err.path}\nCauses: ${err.causes}`);
            return res.status(err.statusCode || constants.INTERNAL_ERROR).send({
                error: err.message,
                cause: err.causes
            });
        });
    }
}

export default new AdminRouter();
