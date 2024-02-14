(function($) {
    $.fn.bootstrapValidator.validators.digits = {
        
        validate: function(validator, $field, options) {
            return /^\d+$/.test($field.val());
        }
    }
}(window.jQuery));
