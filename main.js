"use strict"; //'use strict'

document.addEventListener('DOMContentLoaded', function () {

    let formDom = document.getElementById('my_profile');
    let buttonSubmitDom = formDom.lastElementChild; //console.log(buttonSubmitDom);
    buttonSubmitDom.setAttribute('disabled',true);

    const myProfileData = {
        fname: '',
        email: '',
        dateBirth: '',
        age: '',
        gender: '',
        favoriteDrink: '',
        favoriteDisciplines: [],
        aboutMe: '',
        worlingCapacity: '',
        saveMyData: false
    }

    //get Name name='fname'
    let inputName = formDom.querySelector('[ name="fname" ]'); 
    inputName.addEventListener('blur',function (event) {

        let error = this.nextElementSibling.nextElementSibling;  //console.log(error);
        let success = this.nextElementSibling; 
        
        checkLengthString(this,error,success);

        myProfileData.fname = this.value; //console.log(myProfileData);
    });

    //get Email
    let inputEmail = formDom.querySelector('[ name="email" ]');
    inputEmail.addEventListener('blur',function (event) {
        let error = this.nextElementSibling.nextElementSibling;  //console.log(error);
        let success = this.nextElementSibling; 
        
        checkLengthString(this,error,success);

        myProfileData.email = this.value; //console.log(myProfileData);
    });

    //get Date of Birth
    let inputDateBirth = formDom.querySelector('[ name="date_birth" ]');
    inputDateBirth.addEventListener('blur',function (event) {

        myProfileData.dateBirth = this.value; //console.log(myProfileData);
    });

    //get Age
    let inputAge= formDom.querySelector('[ name="age" ]');
    inputAge.addEventListener('blur',function (event) {

        myProfileData.age = this.value; //console.log(myProfileData);
    });

    //get RadioButtons
    let customRadioButtons = formDom.querySelector('.custom-radio-groups');
    //console.log(customRadioButtons);
    customRadioButtons.addEventListener('click',function (event) {
        if( event.target.tagName === 'INPUT'){
            myProfileData.gender = event.target.value; //console.log(myProfileData);
        }
    });

    //get Select
    let mySelect = document.getElementById('select');
    mySelect.addEventListener('change',function (event) {
        let selectedIndexOfSelect = mySelect.options.selectedIndex; //console.log(selectedIndexOfSelect);
        let thisAllOptions = this.options; //console.log(thisAllOptions);

        let thisValueSelected = this.value; //console.log(thisValueSelected);
        //let thisValueSelected = thisAllOptions[selectedIndexOfSelect].text; console.log(thisValueSelected)

        myProfileData.favoriteDrink = thisValueSelected; //console.log(myProfileData);
    });

    //get Checkbox - miltiple choice
    let customCheckboxGroup = formDom.querySelector('.custom-checkbox-groups');
    let disciplinesCheckboxes = formDom.querySelectorAll('input[name="disciplines[]"]');

    customCheckboxGroup.addEventListener('click',function (event) {
        let checkboxChecked = [];

        if( event.target.tagName === 'INPUT'){
            for( let i = 0; i < disciplinesCheckboxes.length; i++){
                if( disciplinesCheckboxes[i].checked){
                    checkboxChecked.push(disciplinesCheckboxes[i].value);
                }
            }
        }
        myProfileData.favoriteDisciplines = checkboxChecked; //console.log(myProfileData);
    });

    //get text Aria
    let inputTextAria = formDom.querySelector('textarea');

    inputTextAria.addEventListener('blur',function (event) {
        myProfileData.aboutMe = this.value; //console.log(myProfileData);
    });

    //get range
    let inputControlRange = formDom.querySelector('#formControlRange'); 
    let spanRangeDom = formDom.querySelector('#rangeval'); 

    inputControlRange.addEventListener('change', function(event){
    	myProfileData.worlingCapacity = this.value; 
    	spanRangeDom.innerHTML = this.value;
    });

    //get Checkbox - remember
    let inputCheckRemember = formDom.querySelector('[name="remember"]'); 

    inputCheckRemember.addEventListener('click', function(event){
    	if( event.target.tagName === 'INPUT' )
    	{
    		if( inputCheckRemember.checked ){
    			myProfileData.saveMyData = true; console.log(myProfileData);
    		}
    	}
    });
});

//__________________________________

let textareaInput = document.querySelector('textarea'); 
let spanForCounter = document.querySelector('.counter-length'); 
let maxLength = 50;
spanForCounter.style.cssText =`
padding: 5px;
`;

textareaInput.addEventListener('input',function(event){
	let freeChar = maxLength - this.value.length ;
 spanForCounter.innerHTML = this.value.length  + '/' + freeChar;
});


function checkLengthString(target,error,success ){

    if( target.value === '' ){
            error.setAttribute('style', 'display:block');
            success.setAttribute('style', 'display:none');
        }else{
            error.setAttribute('style', 'display:none');
            success.setAttribute('style', 'display:block');
        }
}