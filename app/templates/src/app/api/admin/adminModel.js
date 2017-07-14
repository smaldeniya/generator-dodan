import Decorator from '../../helpers/decorator';
import Daemon from '../../../daemon';
import * as constants from '../../helpers/constants';

/**
 * Model class responsible for implementing logic for actions related to application administration on behalf of the Router
 */
class AdminModel extends Decorator {

    /**
     * Override the nature of the appendDetails custom prototype function of the Error object
     * @param {object} data - override configs
     *      @param {object} [data.pathOverride] - Whether or not to override the error propagation path
     *      @param {object} [data.causesOverride] - Whether or not to override the error causes list
     * @returns {Promise} - Resolve if proper arguments were sent
     */
    overrideErrorConfig(data) {
        return new Promise((resolve, reject) => {
            if (!data) {
                let err = new Error("Invalid Parameters");
                err.appendDetails("AdminModel", "updateErrorConfig", `${data}`);
                return reject(err);
            }
            let pathOverrider = data.pathOverride ? "_" : null;
            let causesOverrider = data.causesOverride ? "_" : null;

            this.logger.debug("Modified the error prototype successfully");
            return Daemon.modifyErrorPrototype(pathOverrider, causesOverrider)
                .then(() => resolve(constants.SUCCESS))
                .catch(reject);
        });
    }
}

export default new AdminModel();
