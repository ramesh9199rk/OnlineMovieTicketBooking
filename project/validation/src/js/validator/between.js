(function($) {
    $.fn.bootstrapValidator.validators.between = {
        
        validate: function(validator, $field, options) {
            var value = parseFloat($field.val());
            return (options.inclusive === true)
                        ? (value > options.min && value < options.max)
                        : (value >= options.min && value <= options.max);
        }
    };
}(window.jQuery));
