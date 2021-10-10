/*
 *Class 6: FORMS
 * this is what it does
 */

//Alternate ways to target elements in the DOM

//const form = document.getElementById('searchForm');

// const form = document.querySelector('form#searchForm'); //old way

const form = document.forms.search;

//const inp = docuemnt.getElementsByName9("searchBox");

const inp = form.elements.searchBox;
let inp_type = inp.getAttribute('placeholder');

inp.addEventListener('focus',function(){
    console.log("focused on " + inp.name)
});

inp.addEventListener('blur',function() {
    console.log("leaving", inp.name);
});

inp.addEventListener('change',function() {
    console.log("leaving after changing", inp.name);
});

form.addEventListener('submit',function(ev) {
    console.log("submitting form", this.name);
    ev.preventDefault();
});

//simple placeholder
inp.addEventListener('focus', function() {
    console.log("focused on", inp.name);
    if (inp.value == "Type your search term here") {
        inp.value = '';
    } else {
        //do nothing
    }
});

//simple placeholder
inp.addEventListener('blur', function() {
    console.log("leaving", inp.name);
    if (inp.value == '') {
        inp.value = 'Type your search term here';
    } else {
        //do nothing
    }
});



form.addEventListener('submit',function(ev) {
    console.log("submitting form", this.name);
    ev.preventDefault();

    const inp_search_box = form.elements.searchBox.value;

    console.log(inp_search_box);

    if(inp_search_box === ''){
        alert('your search box needs a value!');
    } else {
        form.submit();
    }

    /*
    let input_area = form.elements.searchArea;

    const form_area_vals = [];
    
    for (i=0;i<input_area.length;i++){
        if(input_area[i].checked) {
            form_area_vals.push(input_area[i].value);
        }
    };
    console.log('search area values', form_area_vals);

    let input_scope = form.elements.searchScope.value;
    */
});
