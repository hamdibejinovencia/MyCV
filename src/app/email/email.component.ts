import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../shared/email.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './_helpers/must-match.validator';

@Component({ selector: 'app-email', templateUrl: './email.component.html' })
export class EmailComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, public service: EmailService, public tostr:ToastrService, public router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            EML_CVL: ['', Validators.required],
            EML_PRE: ['', Validators.required],
            EML_NOM: ['', Validators.required],
            EML_EML: ['', [Validators.required, Validators.email]],
            //password: ['', [Validators.required, Validators.minLength(6)]],
            //confirmPassword: ['', Validators.required],
            EML_TRM: [false, Validators.requiredTrue],
            EML_MSG: ['', Validators.required]
        }, {
            // validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // console.log(this.registerForm.value);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        
        this.service.postEmail(this.registerForm.value).subscribe(
          res=>
          {
            this.onReset();
            this.tostr.success('Message envoyé avec succès ...', 'Envoi d\'un message à Hamdi BEJI');
            this.router.navigateByUrl('');
          });
        }
        
  

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
  
  }