import { extend } from 'vee-validate';
import { ValidationProvider } from 'vee-validate';
import Vue from "vue";
import { ValidationObserver } from 'vee-validate';
import { email } from 'vee-validate/dist/rules';
import { oneOf } from 'vee-validate/dist/rules';
import { confirmed } from 'vee-validate/dist/rules';
import { min } from 'vee-validate/dist/rules';
import { numeric } from 'vee-validate/dist/rules';

// No message specified.
extend('email',{...email, message: 'email'});
extend('oneOf',{...oneOf, message: 'oneOf'});
extend('confirmed',{...confirmed, message: 'confirmed'});
extend('min',{...min, message: 'min'});
extend('numeric',{...numeric, message: 'numeric'});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


extend('required', {
    validate(value) {
        return {
            required: true,
            valid: ['', null, undefined].indexOf(value) === -1
        };
    },
    message: 'required',
    computesRequired: true,
});

extend('url', {
    validate(value) {
        var pattern = new RegExp('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)', 'i'); // fragment locator
        return pattern.test(value);
    },
    message: 'url'
});

extend('password', {
    validate(value) {
        var pattern = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", 'i'); // fragment locator
        return pattern.test(value);
    },
    message: 'password'
});
