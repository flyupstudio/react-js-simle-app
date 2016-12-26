/**
 * Created by maximvlasenko on 12/23/16.
 */

var SetTimeoutMixin = {
    componentWillMount: function() {
        this.timeouts = [];
    },
    setTimeout: function() {
        this.timeouts.push(setTimeout.apply(null, arguments));
    },

    clearTimeouts: function() {
        this.timeouts.forEach(clearTimeout);
    },

    componentWillUnmount: function() {
        this.clearTimeouts();
    }
};

export default SetTimeoutMixin;