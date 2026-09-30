export class FormModel {
     public passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';
     public validNumberRegex = '^[0-9]+(.[0-9]+)?$';
     public validStringRegex = '^[a-zA-Z0-9,+*& \\_\\-.\\(\\)\\[\\]/%]+$';

     public numberValidationMessage =
          'Enter a valid number. It can be an integer or a decimal (e.g., 123 or 123.45).';
     public stringValidationMessage =
          'Please enter a valid string using letters, numbers, and these symbols: , + * & _ - . ( ) [ ] / %. Spaces are also allowed.';
     public passwordValidationMsg =
          'Password must be 8-20 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (e.g., @, #, $).';
     public webUrlValidationMsg = 'Please enter valid URL.';

     public formErrors: any = {
          login: {
               username: '',
               password: '',
          },
     };

     public validationMessage: any = {
          login: {
               username: {
                    required: 'Username is required.',
                    email: 'Enter correct email',
               },
               password: {
                    required: 'Password is required.',
               },
          },
     };
}
