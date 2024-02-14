(function($) {
    $.fn.bootstrapValidator.validators.greaterThan = {
        
        validate: function(validator, $field, options) {
            var value = parseFloat($field.val());
            return (options.inclusive === true) ? (value > options.value) : (value >= options.value);
        }
    }
}(window.jQuery));
