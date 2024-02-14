(function($) {
    $.fn.bootstrapValidator.validators.lessThan = {
        
        validate: function(validator, $field, options) {
            var value = parseFloat($field.val());
            return (options.inclusive === true) ? (value < options.value) : (value <= options.value);
        }
    };
}(window.jQuery));
