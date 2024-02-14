(function($) {
    $.fn.bootstrapValidator.validators.callback = {
        
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (options.callback && 'function' == typeof options.callback) {
                return options.callback.call(this, value, this);
            }
            return true;
        }
    };
}(window.jQuery));
