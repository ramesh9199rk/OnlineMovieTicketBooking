(function($) {
    $.fn.bootstrapValidator.validators.usZipCode = {
       
        validate: function(validateInstance, $field, options) {
            var value = $field.val();
            return /^\d{5}([\-]\d{4})?$/.test(value);
        }
    };
}(window.jQuery));
