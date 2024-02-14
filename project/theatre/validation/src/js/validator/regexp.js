(function($) {
    $.fn.bootstrapValidator.validators.regexp = {
       
        validate: function(validator, $field, options) {
            var value = $field.val();
            return options.regexp.test(value);
        }
    };
}(window.jQuery));
