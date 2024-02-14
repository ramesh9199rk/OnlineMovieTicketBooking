(function($) {
    $.fn.bootstrapValidator.validators.different = {
       
        validate: function(validator, $field, options) {
            var value        = $field.val(),
                $compareWith = validator.getFieldElement(options.field);
            if ($compareWith && value != $compareWith.val()) {
                validator.removeError($compareWith);
                return true;
            } else {
                return false;
            }
        }
    };
}(window.jQuery));
