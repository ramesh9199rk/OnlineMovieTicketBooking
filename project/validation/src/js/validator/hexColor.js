(function($) {
    $.fn.bootstrapValidator.validators.hexColor = {
       
        validate: function(validator, $field, options) {
            var value = $field.val();
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
        }
    };
}(window.jQuery));
