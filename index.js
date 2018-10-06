'use strict';

var validation;

var emailTest = function(email) {
    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regExp.test(email);
};

var nameTest = function(name) {
    var regExp = /^([a-zA-Z ]){2,30}$/;
    return regExp.test(name);
};

var phoneTest = function(phone) {
    var regExp = /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/;
    return regExp.test(phone);
};

validation = {
    email: function (email) {

        if(email != '') {
            return emailTest(email);
        } else {
            return false;
        }

    },
    name: function (name) {

        if(name != '') {
            return nameTest(name);
        } else {
            return false;
        }

    },
    phone: function (phone) {

        if(phone != '') {
            return phoneTest(phone);
        } else {
            return false;
        }

    }
}

module.exports = validation;

