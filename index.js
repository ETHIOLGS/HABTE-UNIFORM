
function myfun_over(){
    let num_m = new Date(),
    num_2 = Number(num_m.getSeconds());
    if (num_2 <= 5) {
        document.getElementById('sdm1').src="adw1.png";
        document.getElementById('sdm2').src="ads6.png";
        document.getElementById('sdm3').src="ads7.png";
        document.getElementById('sdm4').src="sd2.png";
    } else if (num_2 <= 10 ) {
        document.getElementById('sdm1').src="sd1.png";
        document.getElementById('sdm2').src="ps1.png";
        document.getElementById('sdm3').src="sd1.png";
        document.getElementById('sdm4').src="adw1.png";
    } else if (num_2 <= 15 ) {
        document.getElementById('sdm1').src="adw1.png";
        document.getElementById('sdm2').src="sd2.png";
        document.getElementById('sdm3').src="sd2.png";
        document.getElementById('sdm4').src="sdm11.png";
    } else if (num_2 <= 20 ) {
        document.getElementById('sdm1').src="ads5.png";
        document.getElementById('sdm2').src="ps1.png";
        document.getElementById('sdm3').src="sd1.png";
        document.getElementById('sdm4').src="sd1.png";
    } else if (num_2 <= 25) {
        document.getElementById('sdm1').src="ads7.png";
        document.getElementById('sdm2').src="sd2.png";
        document.getElementById('sdm3').src="ps1.png";
        document.getElementById('sdm4').src="sd2.png";
    } else if (num_2 <= 30) {
        document.getElementById('sdm1').src="adw1.png";
        document.getElementById('sdm2').src="sd1.png";
        document.getElementById('sdm3').src="sd1.png";
        document.getElementById('sdm4').src="sd1.png";
    } else if (num_2 <= 35) {
        document.getElementById('sdm1').src="sd2.png";
        document.getElementById('sdm2').src="ps1.png";
        document.getElementById('sdm3').src="sd2.png";
        document.getElementById('sdm4').src="sd2.png";
    } else if (num_2 <= 40 ) {
        document.getElementById('sdm1').src="sd1.png";
        document.getElementById('sdm2').src="sd1.png";
        document.getElementById('sdm3').src="sd1.png";
        document.getElementById('sdm4').src="sd1.png";
    } else if (num_2 <= 45 ) {
        document.getElementById('sdm1').src="ads6.png";
        document.getElementById('sdm2').src="sd2.png";
        document.getElementById('sdm3').src="sd2.png";
        document.getElementById('sdm4').src="sd2.png";
    } else if (num_2 <= 50 ) {
        document.getElementById('sdm1').src="ads8.png";
        document.getElementById('sdm2').src="ps1.png";
        document.getElementById('sdm3').src="sd1.png";
        document.getElementById('sdm4').src="sd1.png";
    } else if (num_2 <= 55) {
        document.getElementById('sdm1').src="sd2.png";
        document.getElementById('sdm2').src="sd2.png";
        document.getElementById('sdm3').src="sd2.png";
        document.getElementById('sdm4').src="sd2.png";
    } else if (num_2 <= 0) {
        document.getElementById('sdm1').src="sd1.png";
        document.getElementById('sdm2').src="sd1.png";
        document.getElementById('sdm3').src="sd1.png";
        document.getElementById('sdm4').src="sd1.png";
    }
}


function myfun_messagec_side(){

    let num1 = document.getElementById('cc').value,
    num2 = document.getElementById('ccc01'),
    num3 = document.getElementById('cc01');


    if (num1.includes("yes")) {
        let num8 = document.createElement('div').innerHTML = num3.innerHTML;
        document.getElementById('demo').innerHTML += num8 + num1 + "<br/>";
        let num9 = document.createElement('div').innerHTML +="\n" + num2.innerHTML + "what is your quastion?";
        document.getElementById('demo').innerHTML += num9 ;

    } else if (num1.includes("uniform")){
        let num8 = document.createElement('div').innerHTML = num3.innerHTML;
        document.getElementById('demo').innerHTML +=  " <br/>" + num8 + num1 + "<br/>";
        let num9 = document.createElement('div').innerHTML +=  " <br/>" + num2.innerHTML + "for which schol <br/>";
        document.getElementById('demo').innerHTML += num9 ;
    } else if (num1.includes("adventist")){
        let num8 = document.createElement('div').innerHTML = num3.innerHTML;
        document.getElementById('demo').innerHTML +=  " <br/>" + num8 + num1 + "<br/>";
        let num9 = document.createElement('div').innerHTML +=  " <br/>" + num2.innerHTML + 'we have uniforms of adventist school for all student for kg  for grade 1 8 and also for student gredae 9 and above <br/> ';

        document.getElementById('demo').innerHTML += num9 ;
    } else if (num1 !== "yes") {
        document.getElementById('demo').innerHTML +=  " <br/>" + num2.innerHTML + "pleas enter a valid quastion as i un derstand clearly<br/>"
    } else if (num1 === "no") {
        document.getElementById('demo').innerHTML  += " <br/>" + num2.innerHTML + "0k! but, if you have any quastion any time you can ask me hear, bay have a nice day. <br/>"
    }
}


function myfun_message(num){

    if (num === 0) {
        document.querySelector('.message_side').style="display: block;";
        document.querySelector('.body1').style="display: none;";
    } else if (num === 1) {
        document.querySelector('.message_side').style ="display: none;"; 
        document.querySelector('.body1').style="display: block;";
        document.querySelector('.signup_form').style='display: none;';
        document.querySelector('.login_form').style='display: none;';
    }
}


let num = 0, num2 = 0;
function myfun(num1) {
    if (num1 === 1) {
        if (num%2 === 0 ) {
            num++;
            document.querySelector('.school_list').style="display: block;";
            document.querySelector('.age_list').style="display: none;";
            document.querySelector('.color_list').style="display: none;";
            document.querySelector('.forgirl_list').style ='display: none;';
            document.querySelector('.forboy_list').style ='display: none;';
            document.querySelector('.break').style="display: block;";
        } else if (num%2 != 0 ) {
            document.querySelector('.school_list').style ="display: none;"; 
            num++;
        }

    } else if (num1 === 2) {
        if (num2%2 === 0 ) {
            ++num2;
            document.querySelector('.break').style="display: block;";
            document.querySelector('.age_list').style="display: block;";
            document.querySelector('.color_list').style="display: none;";
            document.querySelector('.school_list').style="display: none;";
            document.querySelector('.forgirl_list').style ='display: none;';
            document.querySelector('.forboy_list').style ='display: none;';
        } else if (num2%2 != 0 ) {
            document.querySelector('.age_list').style ='display: none;'; 
            ++num2;
        }

    } else if (num1 === 3) {
        if (num%2 === 0 ) {
            num++;
            document.querySelector('.break').style="display: block;";
            document.querySelector('.color_list').style="display: block;";
            document.querySelector('.school_list').style="display: none;";
            document.querySelector('.age_list').style="display: none;";
            document.querySelector('.forgirl_list').style ='display: none;';
            document.querySelector('.forboy_list').style ='display: none;';
        } else if (num%2 != 0 ) {
            document.querySelector('.color_list').style ='display: none;'; 
            num++;
        }

    } else if (num1 === 4) {
        if (num%2 === 0 ) {
            num++;
            document.querySelector('.break').style="display: block;";
            document.querySelector('.forgirl_list').style="display: block;";
            document.querySelector('.school_list').style="display: none;";
            document.querySelector('.age_list').style="display: none;";
            document.querySelector('.color_list').style="display: none;";
            document.querySelector('.forboy_list').style ='display: none;';
        } else if (num%2 != 0 ) {
            document.querySelector('.forgirl_list').style ='display: none;'; 
            num++;
        }

    } else if (num1 === 5) {
        if (num%2 === 0 ) {
            num++;
            document.querySelector('.break').style="display: block;";
            document.querySelector('.forboy_list').style="display: block;";
            document.querySelector('.school_list').style="display: none;";
            document.querySelector('.age_list').style="display: none;";
            document.querySelector('.color_list').style="display: none;";
            document.querySelector('.forgirl_list').style ='display: none;';
        } else if (num%2 != 0 ) {
            document.querySelector('.forboy_list').style ='display: none;';
            num++;
        }

    }
}















/* this only for sign up form display on*/

function myfun_signup() {
    document.querySelector('.login_form').style='display: none;';
    document.querySelector('.body1').style='display: none;';
    document.querySelector('.signup_form').style='display: block;';
    document.querySelector('.body').style='background-image: url(BH2.png);';
}


let account_group, email, password, em_pa;

account_group = [
]


/*JSON.parse(localStorage.getItem("account_group0"));*/

console.log(JSON.parse(localStorage.getItem("account_group0")));

function my_fun_signup_form() {
    email  = String(document.querySelector('.input_signup_email').value);
    console.log(email);
    password =  String(document.querySelector('.input_signup_pwc').value);
    console.log(password);
    em_pa = email + password;
    console.log(em_pa);
    account_group.push(em_pa);
    console.log(account_group);

    localStorage.setItem('account_group0', JSON.stringify(account_group));

    document.querySelector('.signup_form').style='display: none;';
    document.querySelector('.login_form').style='display: none;';
    document.querySelector('.admin_side').style='display: none;';
    document.querySelector('.body').style='display: block;';
    document.querySelector('.body1').style='display: block;';
}


function myfun_login() {
    document.querySelector('.signup_form').style='display: none;';
    document.querySelector('.body1').style='display: none;';
    document.querySelector('.login_form').style='display: block;';
    document.querySelector('.body').style='background-image: url(BH2.png);';
}


function my_fun_login_form() {
    let email1, password1, em_pa2;

    email1 = String(document.querySelector('.input_login_e').value);
    console.log(email1);
    password1  =  String(document.querySelector('.input_login_pw').value);
    console.log(password1);
    em_pa2 = email1 + password1;
    console.log(em_pa2);

    if (account_group.includes(em_pa2)) {
        document.querySelector('.signup_form').style='display: none;';
        document.querySelector('.login_form').style='display: none;';
        document.querySelector('.admin_side').style='display: none;';
        document.querySelector('.body').style='display: block;';
        document.querySelector('.body1').style='display: block;';
        document.querySelector('.img_sign_up').style='display: none;';
        document.querySelector('.img_login').src='cust.png';
        document.querySelector('.img_login').style='width: 5vw';
        document.querySelector('.login_form').onclick="myfun_login(0)"
        document.querySelector('.input_login_e').value="";
        document.querySelector('.input_login_pw').value="";

    } else if ( em_pa2 === "p9050731@gmail.comlgskbd123") {
        document.querySelector('.login_form').style='display: none;';
        document.querySelector('.body').style='background-image: url(BH2.png);';
        alert('welcome to your administrator!');
        document.querySelector('.admin_side').style='display: block;';
        document.querySelector('.input_login_e').value="";
        document.querySelector('.input_login_pw').value="";
    }  else {
        alert('please try agein you are enter wrong emile or password ');
    }
}



















let num_main_page = document.body.innerHTML;
function  myfunschool_page(num){
    if (num === 0) {
        document.querySelector('.body1').style.display='block';
        document.getElementById('school_page').style.display="none";

    }else if (num === 1) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ኢንዲያና ትምህርት ቤት';

    }else if (num === 2) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ብሩክ ትምህርት ቤት';

    }else if (num === 3) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ኖላዊ ትምህርት ቤት ኖላዊ';

    }else if (num === 4) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ኢትዮ ብሔራዊ ትምህርት ቤት';

    }else if (num === 5) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'አልታሜራ ትምህርት ቤት ';

    }else if (num === 6) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ኬሮድ ትምህርት ቤት';

    }else if (num === 7) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ግሪን ትምህርት ቤት ';

    }else if (num === 8) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'አቡነ ጏርጏሪዎስ ትምህርት ቤት';

    }else if (num === 9) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ሙሉ ሰው አካዳሚ ትምህርት ቤት';

    }else if (num === 10) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ትንሳዬ ሆልስቲክ ትምህርት ቤት ';

    } else if (num === 11) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'አቤኒ አፀደ ህፃናት ትምህርት ቤት';

    }else if (num === 12) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ሰመር ላንድ ትምህርት ቤት ';

    }else if (num === 13) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ዳንዲ ቦሩ ትምህርት ቤት';

    }else if (num === 14) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ሲያትል ትምህርት ቤት'

    }else if (num === 15) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'አቤኔዘር ትምህርት ቤት';

    } else if (num === 16) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ገላን ትምህርት ቤት';

    }else if (num === 17) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ባቡ ሰላም ትምህርት ቤት';

    }else if (num === 18) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ኬሮድ ትምህርት ቤት';

    }else if (num === 19) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'T.L.T ታለንት ትምህርት ቤት';

    }else if (num === 20) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ፍሬንድስ ትምህርት ቤት';

    }else if (num === 21) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ኦሽን ትምሀርት ቤት';
    }else if (num === 22) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ፍሪደም ትምህርት ቤት ';

    }else if (num === 23) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ኢትዮ ፓራዳይዝ ትምህርት ቤት ';

    } else if (num === 24) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ሪል ቪዥን ትምህርት ቤት ';

    }else if (num === 25) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ቤዛ ትምህርት ቤት ';

    }else if (num === 26) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ሰነራይዝ ትምህርት ቤት ';

    }else if (num === 27) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'አለም ብርሃን ትምህርት ቤት';

    }else if (num === 28) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ሪዴምሽን ትምህርት ቤት';

    }else if (num === 29) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ፓንጃ ትምህርት ቤት ';

    }else if (num === 30) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'ኢኖቬሽን ትምህርት ቤት';

    }else if (num === 31) {
        document.querySelector('.body1').style.display='none';
        document.getElementById('school_page').style.display="block";
        document.getElementById('head_grade2').innerText = 'አቃቂ አድቬንቲስት ትምህርት ቤት';

    }
}






/* the following 8 are for the shirt only */




let shirt1, c_value1, p_value1, s_value1;

shirt1 = JSON.parse(localStorage.getItem('shirt1'));
    document.querySelector('.shirt_1_h6').innerHTML = "  price :" + shirt1.price + "</br>" + " \n color :"  + shirt1.color + "</br>"  + " \n size :" + shirt1.size;
    document.querySelector('.shirt_1_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun1() {

    s_value1 = String(document.querySelector(".input_size").value);
    c_value1 = String(document.querySelector(".input_color").value);
    p_value1 = Number(document.querySelector(".input_price").value);

    shirt1.price = p_value1;
    shirt1.color = c_value1;
    shirt1.size = s_value1;
    localStorage.setItem('shirt1', JSON.stringify(shirt1));

}

let num1 = 0;
function myfun_buys1() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun1s(num) {

    if (num === 1) {
        document.getElementById('star11').src="star21.png";
        document.getElementById('star12').src="star2.png";
        document.getElementById('star13').src="star2.png";
        document.getElementById('star14').src="star2.png";
        document.getElementById('star15').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star11').src="star21.png";
        document.getElementById('star12').src="star21.png";
        document.getElementById('star13').src="star2.png";
        document.getElementById('star14').src="star2.png";
        document.getElementById('star15').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star11').src="star21.png";
        document.getElementById('star12').src="star21.png";
        document.getElementById('star13').src="star22.png";
        document.getElementById('star14').src="star2.png";
        document.getElementById('star15').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star11').src="star21.png";
        document.getElementById('star12').src="star21.png";
        document.getElementById('star13').src="star22.png";
        document.getElementById('star14').src="star23.png";
        document.getElementById('star15').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star11').src="star21.png";
        document.getElementById('star12').src="star21.png";
        document.getElementById('star13').src="star22.png";
        document.getElementById('star14').src="star23.png";
        document.getElementById('star15').src="star23.png";
    }
}











/* the following 8 are for the shirt only*/




let shirt2, c_value2, p_value2,s_value2;

shirt2 = JSON.parse(localStorage.getItem('shirt2'));
    document.querySelector('.shirt_2_h6').innerHTML = "  price :" + shirt2.price + "</br>" + " \n color :"  + shirt2.color + "</br>"  + " \n size :" + shirt2.size;
    document.querySelector('.shirt_2_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun2() {

    s_value2 = String(document.querySelector(".input_size").value);
    c_value2 = String(document.querySelector(".input_color").value);
    p_value2 = Number(document.querySelector(".input_price").value);

    shirt2.price = p_value2;
    shirt2.color = c_value2;
    shirt2.size = s_value2;
    localStorage.setItem('shirt2', JSON.stringify(shirt2));

}


function myfun_buys2() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun2s(num) {

    if (num === 1) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star2.png";
        document.getElementById('star23').src="star2.png";
        document.getElementById('star24').src="star2.png";
        document.getElementById('star25').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star21.png";
        document.getElementById('star23').src="star2.png";
        document.getElementById('star24').src="star2.png";
        document.getElementById('star25').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star21.png";
        document.getElementById('star23').src="star22.png";
        document.getElementById('star24').src="star2.png";
        document.getElementById('star25').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star21.png";
        document.getElementById('star23').src="star22.png";
        document.getElementById('star24').src="star23.png";
        document.getElementById('star25').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star21.png";
        document.getElementById('star23').src="star22.png";
        document.getElementById('star24').src="star23.png";
        document.getElementById('star25').src="star23.png";
    }
}





let shirt3, c_value3, p_value3, s_value3;

shirt3 = JSON.parse(localStorage.getItem('shirt3'));

    document.querySelector('.shirt_3_h6').innerHTML = "  price :" + shirt3.price + "</br>" + " \n color :"  + shirt3.color + "</br>"  + " \n size :" + shirt3.size;
    document.querySelector('.shirt_3_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun3() {

    s_value3 = String(document.querySelector(".input_size").value);
    c_value3 = String(document.querySelector(".input_color").value);
    p_value3 = Number(document.querySelector(".input_price").value);

    shirt3.price = p_value3;
    shirt3.color = c_value3;
    shirt3.size = s_value3;
    localStorage.setItem('shirt3', JSON.stringify(shirt3));

}


function myfun_buys3() {
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun3s(num) {
    if (num === 1) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star2.png";
        document.getElementById('star33').src="star2.png";
        document.getElementById('star34').src="star2.png";
        document.getElementById('star35').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star21.png";
        document.getElementById('star33').src="star2.png";
        document.getElementById('star34').src="star2.png";
        document.getElementById('star35').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star21.png";
        document.getElementById('star33').src="star22.png";
        document.getElementById('star34').src="star2.png";
        document.getElementById('star35').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star21.png";
        document.getElementById('star33').src="star22.png";
        document.getElementById('star34').src="star23.png";
        document.getElementById('star35').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star21.png";
        document.getElementById('star33').src="star22.png";
        document.getElementById('star34').src="star23.png";
        document.getElementById('star35').src="star23.png";
    }
} 








let shirt4, c_value4, p_value4, s_value4;

shirt4 =  JSON.parse(localStorage.getItem('shirt4'));

    document.querySelector('.shirt_4_h6').innerHTML = "  price :" + shirt4.price + "</br>" + " \n color :"  + shirt4.color + "</br>"  + " \n size :" + shirt4.size;
    document.querySelector('.shirt_4_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun4() {

    s_value4 = String(document.querySelector(".input_size").value);
    c_value4 = String(document.querySelector(".input_color").value);
    p_value4 = Number(document.querySelector(".input_price").value);

    shirt4.price = p_value4;
    shirt4.color = c_value4;
    shirt4.size = s_value4;
    localStorage.setItem('shirt4', JSON.stringify(shirt4));

}



function myfun_buys4() {
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun4s(num) {
    if (num === 1) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star2.png";
        document.getElementById('star43').src="star2.png";
        document.getElementById('star44').src="star2.png";
        document.getElementById('star45').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star21.png";
        document.getElementById('star43').src="star2.png";
        document.getElementById('star44').src="star2.png";
        document.getElementById('star45').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star21.png";
        document.getElementById('star43').src="star22.png";
        document.getElementById('star44').src="star2.png";
        document.getElementById('star45').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star21.png";
        document.getElementById('star43').src="star22.png";
        document.getElementById('star44').src="star23.png";
        document.getElementById('star45').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star21.png";
        document.getElementById('star43').src="star22.png";
        document.getElementById('star44').src="star23.png";
        document.getElementById('star45').src="star23.png";
    }
}






let shirt5, c_value5, p_value5, s_value5;

shirt5 = JSON.parse(localStorage.getItem('shirt5'));

    document.querySelector('.shirt_5_h6').innerHTML = "  price :" + shirt5.price + "</br>" + " \n color :"  + shirt5.color + "</br>"  + " \n size :" + shirt5.size;
    document.querySelector('.shirt_5_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun5() {

    s_value5 = String(document.querySelector(".input_size").value);
    c_value5 = String(document.querySelector(".input_color").value);
    p_value5 = Number(document.querySelector(".input_price").value);

    shirt5.price = p_value5;
    shirt5.color = c_value5;
    shirt5.size = s_value5;
    localStorage.setItem('shirt5', JSON.stringify(shirt5));

}

function myfun_buys5() {
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun5s(num) {
    if (num === 1) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star2.png";
        document.getElementById('star53').src="star2.png";
        document.getElementById('star54').src="star2.png";
        document.getElementById('star55').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star21.png";
        document.getElementById('star53').src="star2.png";
        document.getElementById('star54').src="star2.png";
        document.getElementById('star55').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star21.png";
        document.getElementById('star53').src="star22.png";
        document.getElementById('star54').src="star2.png";
        document.getElementById('star55').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star21.png";
        document.getElementById('star53').src="star22.png";
        document.getElementById('star54').src="star23.png";
        document.getElementById('star55').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star21.png";
        document.getElementById('star53').src="star22.png";
        document.getElementById('star54').src="star23.png";
        document.getElementById('star55').src="star23.png";
    }
}







/* the following 8 are for the shirt6 only*/




let shirt6, c_value6, p_value6, s_value6;

shirt6 = JSON.parse(localStorage.getItem('shirt6'));
    document.querySelector('.shirt_6_h6').innerHTML = "  price :" + shirt6.price + "</br>" + " \n color :"  + shirt6.color + "</br>"  + " \n size :" + shirt6.size;
    document.querySelector('.shirt_6_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun6() {

    s_value6 = String(document.querySelector(".input_size").value);
    c_value6 = String(document.querySelector(".input_color").value);
    p_value6 = Number(document.querySelector(".input_price").value);

    shirt6.price = p_value6;
    shirt6.color = c_value6;
    shirt6.size = s_value6;
    localStorage.setItem('shirt6', JSON.stringify(shirt6));

}

function myfun_buys6() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun6s(num) {

    if (num === 1) {
        document.getElementById('star61').src="star21.png";
        document.getElementById('star62').src="star2.png";
        document.getElementById('star63').src="star2.png";
        document.getElementById('star64').src="star2.png";
        document.getElementById('star65').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star61').src="star21.png";
        document.getElementById('star62').src="star21.png";
        document.getElementById('star63').src="star2.png";
        document.getElementById('star64').src="star2.png";
        document.getElementById('star65').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star61').src="star21.png";
        document.getElementById('star62').src="star21.png";
        document.getElementById('star63').src="star22.png";
        document.getElementById('star64').src="star2.png";
        document.getElementById('star65').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star61').src="star21.png";
        document.getElementById('star62').src="star21.png";
        document.getElementById('star63').src="star22.png";
        document.getElementById('star64').src="star23.png";
        document.getElementById('star65').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star61').src="star21.png";
        document.getElementById('star62').src="star21.png";
        document.getElementById('star63').src="star22.png";
        document.getElementById('star64').src="star23.png";
        document.getElementById('star65').src="star23.png";
    }
}








let shirt7, c_value7, p_value7, s_value7;

shirt7 = JSON.parse(localStorage.getItem('shirt7'));

    document.querySelector('.shirt_7_h6').innerHTML = "  price :" + shirt7.price + "</br>" + " \n color :"  + shirt7.color + "</br>"  + " \n size :" + shirt7.size;
    document.querySelector('.shirt_7_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun7() {

    s_value7 = String(document.querySelector(".input_size").value);
    c_value7 = String(document.querySelector(".input_color").value);
    p_value7 = Number(document.querySelector(".input_price").value);

    shirt7.price = p_value7;
    shirt7.color = c_value7;
    shirt7.size = s_value7;
    localStorage.setItem('shirt7', JSON.stringify(shirt7));

}

function myfun_buys7() {
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun7s(num) {
    if (num === 1) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star2.png";
        document.getElementById('star73').src="star2.png";
        document.getElementById('star74').src="star2.png";
        document.getElementById('star75').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star21.png";
        document.getElementById('star73').src="star2.png";
        document.getElementById('star74').src="star2.png";
        document.getElementById('star75').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star21.png";
        document.getElementById('star73').src="star22.png";
        document.getElementById('star74').src="star2.png";
        document.getElementById('star75').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star21.png";
        document.getElementById('star73').src="star22.png";
        document.getElementById('star74').src="star23.png";
        document.getElementById('star75').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star21.png";
        document.getElementById('star73').src="star22.png";
        document.getElementById('star74').src="star23.png";
        document.getElementById('star75').src="star23.png";
    }
}




let shirt8, c_value8, p_value8, s_value8;

shirt8 =  JSON.parse(localStorage.getItem('shirt8'));

    document.querySelector('.shirt_8_h6').innerHTML = "  price :" + shirt8.price + "</br>" + " \n color :"  + shirt8.color + "</br>"  + " \n size :" + shirt8.size;
    document.querySelector('.shirt_8_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun8() {

    s_value8 = String(document.querySelector(".input_size").value);
    c_value8 = String(document.querySelector(".input_color").value);
    p_value8 = Number(document.querySelector(".input_price").value);

    shirt8.price = p_value8;
    shirt8.color = c_value8;
    shirt8.size = s_value8;
    localStorage.setItem('shirt8', JSON.stringify(shirt8));

}

function myfun_buys8() {
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun8s(num) {
    if (num === 1) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star2.png";
        document.getElementById('star83').src="star2.png";
        document.getElementById('star84').src="star2.png";
        document.getElementById('star85').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star21.png";
        document.getElementById('star83').src="star2.png";
        document.getElementById('star84').src="star2.png";
        document.getElementById('star85').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star21.png";
        document.getElementById('star83').src="star22.png";
        document.getElementById('star84').src="star2.png";
        document.getElementById('star85').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star21.png";
        document.getElementById('star83').src="star22.png";
        document.getElementById('star84').src="star23.png";
        document.getElementById('star85').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star21.png";
        document.getElementById('star83').src="star22.png";
        document.getElementById('star84').src="star23.png";
        document.getElementById('star85').src="star23.png";
    }
}








let shirt9, c_value9, p_value9, s_value9;

shirt9 = JSON.parse(localStorage.getItem('shirt9'));

    document.querySelector('.shirt_9_h6').innerHTML = "  price :" + shirt9.price + "</br>" + " \n color :"  + shirt9.color + "</br>"  + " \n size :" + shirt9.size;
    document.querySelector('.shirt_9_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun9() {

    s_value9 = String(document.querySelector(".input_size").value);
    c_value9 = String(document.querySelector(".input_color").value);
    p_value9 = Number(document.querySelector(".input_price").value);

    shirt9.price = p_value9;
    shirt9.color = c_value9;
    shirt9.size = s_value9;
    localStorage.setItem('shirt9', JSON.stringify(shirt9));

}

function myfun_buys9() {
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun9s(num) {
    if (num === 1) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star2.png";
        document.getElementById('star93').src="star2.png";
        document.getElementById('star94').src="star2.png";
        document.getElementById('star95').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star21.png";
        document.getElementById('star93').src="star2.png";
        document.getElementById('star94').src="star2.png";
        document.getElementById('star95').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star21.png";
        document.getElementById('star93').src="star22.png";
        document.getElementById('star94').src="star2.png";
        document.getElementById('star95').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star21.png";
        document.getElementById('star93').src="star22.png";
        document.getElementById('star94').src="star23.png";
        document.getElementById('star95').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star21.png";
        document.getElementById('star93').src="star22.png";
        document.getElementById('star94').src="star23.png";
        document.getElementById('star95').src="star23.png";
    }
}






let shirt10, c_value10, p_value10, s_value10;

shirt10 = JSON.parse(localStorage.getItem('shirt10'));


    document.querySelector('.shirt_10_h6').innerHTML = "  price :" + shirt10.price + "</br>" + " \n color :"  + shirt10.color + "</br>"  + " \n size :" + shirt10.size;
    document.querySelector('.shirt_10_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun10() {

    s_value10 = String(document.querySelector(".input_size").value);
    c_value10 = String(document.querySelector(".input_color").value);
    p_value10 = Number(document.querySelector(".input_price").value);

    shirt10.price = p_value10;
    shirt10.color = c_value10;
    shirt10.size = s_value10;
    localStorage.setItem('shirt10', JSON.stringify(shirt10));

}

function myfun_buys10() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun10s(num) {
    if (num === 1) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star2.png";
        document.getElementById('star103').src="star2.png";
        document.getElementById('star104').src="star2.png";
        document.getElementById('star105').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star21.png";
        document.getElementById('star103').src="star2.png";
        document.getElementById('star104').src="star2.png";
        document.getElementById('star105').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star21.png";
        document.getElementById('star103').src="star22.png";
        document.getElementById('star104').src="star2.png";
        document.getElementById('star105').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star21.png";
        document.getElementById('star103').src="star22.png";
        document.getElementById('star104').src="star23.png";
        document.getElementById('star105').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star21.png";
        document.getElementById('star103').src="star22.png";
        document.getElementById('star104').src="star23.png";
        document.getElementById('star105').src="star23.png";
    }
}






/* the following 8 are for the shirt11 only*/




let shirt11, c_value11, p_value11, s_value11;

shirt11 = JSON.parse(localStorage.getItem('shirt11'));
    document.querySelector('.shirt_11_h6').innerHTML = "  price :" + shirt11.price + "</br>" + " \n color :"  + shirt11.color   + "</br>" + " \n size :" + shirt11.size;
    document.querySelector('.shirt_11_h6').style = "font-size: 12px; color: white; font-weight: bold;";


function myfun11() {

    s_value11 = String(document.querySelector(".input_size").value);
    c_value11 = String(document.querySelector(".input_color").value);
    p_value11 = Number(document.querySelector(".input_price").value);

    shirt11.price = p_value11;
    shirt11.color = c_value11;
    shirt11.size = s_value11;
    localStorage.setItem('shirt11', JSON.stringify(shirt11));

}


function myfun_buys11() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun11s(num) {

    if (num === 1) {
        document.getElementById('star111').src="star21.png";
        document.getElementById('star112').src="star2.png";
        document.getElementById('star113').src="star2.png";
        document.getElementById('star114').src="star2.png";
        document.getElementById('star115').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star111').src="star21.png";
        document.getElementById('star112').src="star21.png";
        document.getElementById('star113').src="star2.png";
        document.getElementById('star114').src="star2.png";
        document.getElementById('star115').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star111').src="star21.png";
        document.getElementById('star112').src="star21.png";
        document.getElementById('star113').src="star22.png";
        document.getElementById('star114').src="star2.png";
        document.getElementById('star115').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star111').src="star21.png";
        document.getElementById('star112').src="star21.png";
        document.getElementById('star113').src="star22.png";
        document.getElementById('star114').src="star23.png";
        document.getElementById('star115').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star111').src="star21.png";
        document.getElementById('star112').src="star21.png";
        document.getElementById('star113').src="star22.png";
        document.getElementById('star114').src="star23.png";
        document.getElementById('star115').src="star23.png";
    }
}






/* the following 8 are for the shirt12 only*/




let shirt12, c_values12, p_values12, s_values12;

shirt12 = JSON.parse(localStorage.getItem('shirt12'));
    document.querySelector('.shirt_12_h6').innerHTML = "  price :" + shirt12.price + "</br>" + " \n color :"  + shirt12.color   + "</br>"  + " \n size :" + shirt12.size;
    document.querySelector('.shirt_12_h6').style = "font-size: 12px; color: white; font-weight: bold;";


function myfun12() {

    s_values12 = String(document.querySelector(".input_size").value);
    c_values12 = String(document.querySelector(".input_color").value);
    p_values12 = Number(document.querySelector(".input_price").value);

    shirt12.price = p_values12;
    shirt12.color = c_values12;
    shirt12.size = s_values12;
    localStorage.setItem('shirt12', JSON.stringify(shirt12));

}


function myfun_buys12() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun12s(num) {

    if (num === 1) {
        document.getElementById('star121').src="star21.png";
        document.getElementById('star122').src="star2.png";
        document.getElementById('star123').src="star2.png";
        document.getElementById('star124').src="star2.png";
        document.getElementById('star125').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star121').src="star21.png";
        document.getElementById('star122').src="star21.png";
        document.getElementById('star123').src="star2.png";
        document.getElementById('star124').src="star2.png";
        document.getElementById('star125').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star121').src="star21.png";
        document.getElementById('star122').src="star21.png";
        document.getElementById('star123').src="star22.png";
        document.getElementById('star124').src="star2.png";
        document.getElementById('star125').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star121').src="star21.png";
        document.getElementById('star122').src="star21.png";
        document.getElementById('star123').src="star22.png";
        document.getElementById('star124').src="star23.png";
        document.getElementById('star125').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star121').src="star21.png";
        document.getElementById('star122').src="star21.png";
        document.getElementById('star123').src="star22.png";
        document.getElementById('star124').src="star23.png";
        document.getElementById('star125').src="star23.png";
    }
}








/* the following 8 are for the sweater1 only*/




let sweater11, c_valuew11, p_valuew11, s_valuew11;

sweater11 = JSON.parse(localStorage.getItem('sweater11'));
    document.querySelector('.sweater_1_h6').innerHTML = "  price :" + sweater11.price + "</br>" + "  color :"  + sweater11.color  + "</br>" + " size :" + sweater11.size;
    document.querySelector('.sweater_1_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw1() {

    s_valuew11 = String(document.querySelector(".input_size1").value);
    c_valuew11 = String(document.querySelector(".input_color1").value);
    p_valuew11 = Number(document.querySelector(".input_price1").value);

    sweater11.price = p_valuew11;
    sweater11.color = c_valuew11;
    sweater11.size = s_valuew11;
    localStorage.setItem('sweater11', JSON.stringify(sweater11));

}


function myfun_buysw1() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun1sw(num) {

    if (num === 1) {
        document.getElementById('starw11').src="star21.png";
        document.getElementById('starw12').src="star2.png";
        document.getElementById('starw13').src="star2.png";
        document.getElementById('starw14').src="star2.png";
        document.getElementById('starw15').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw11').src="star21.png";
        document.getElementById('starw12').src="star21.png";
        document.getElementById('starw13').src="star2.png";
        document.getElementById('starw14').src="star2.png";
        document.getElementById('starw15').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw11').src="star21.png";
        document.getElementById('starw12').src="star21.png";
        document.getElementById('starw13').src="star22.png";
        document.getElementById('starw14').src="star2.png";
        document.getElementById('starw15').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw11').src="star21.png";
        document.getElementById('starw12').src="star21.png";
        document.getElementById('starw13').src="star22.png";
        document.getElementById('starw14').src="star23.png";
        document.getElementById('starw15').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw11').src="star21.png";
        document.getElementById('starw12').src="star21.png";
        document.getElementById('starw13').src="star22.png";
        document.getElementById('starw14').src="star23.png";
        document.getElementById('starw15').src="star23.png";
    }
}








/* the following 8 are for the sweater only*/


let sweater12, c_value12, p_value12,s_value12;

sweater12 = JSON.parse(localStorage.getItem('sweater12'));

    document.querySelector('.sweater_2_h6').innerHTML = "  price :" + sweater12.price + "</br>" + " \n color :"  + sweater12.color  + "</br>"  + " \n size :" + sweater12.size;
    document.querySelector('.sweater_2_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw2() {

    s_value12 = String(document.querySelector(".input_size1").value);
    c_value12 = String(document.querySelector(".input_color1").value);
    p_value12 = Number(document.querySelector(".input_price1").value);

    sweater12.price = p_value12;
    sweater12.color = c_value12;
    sweater12.size = s_value12;
    localStorage.setItem('sweater12', JSON.stringify(sweater12));

}

function myfun_buyw2() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun2sw(num) {
    if (num === 1) {
        document.getElementById('starw21').src="star21.png";
        document.getElementById('starw22').src="star2.png";
        document.getElementById('starw23').src="star2.png";
        document.getElementById('starw24').src="star2.png";
        document.getElementById('starw25').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw22').src="star21.png";
        document.getElementById('starw23').src="star2.png";
        document.getElementById('starw24').src="star2.png";
        document.getElementById('starw25').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw21').src="star21.png";
        document.getElementById('starw22').src="star21.png";
        document.getElementById('starw23').src="star22.png";
        document.getElementById('starw24').src="star2.png";
        document.getElementById('starw25').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw21').src="star21.png";
        document.getElementById('starw22').src="star21.png";
        document.getElementById('starw23').src="star22.png";
        document.getElementById('starw24').src="star23.png";
        document.getElementById('starw25').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw21').src="star21.png";
        document.getElementById('starw22').src="star21.png";
        document.getElementById('starw23').src="star22.png";
        document.getElementById('starw24').src="star23.png";
        document.getElementById('starw25').src="star23.png";
    }
}





let sweater13, c_value13, p_value13, s_value13;

sweater13 = JSON.parse(localStorage.getItem('sweater13'));

    document.querySelector('.sweater_3_h6').innerHTML = "  price :" + sweater13.price + "</br>" + " \n color :"  + sweater13.color  + "</br>"  + " \n size :" + sweater13.size;
    document.querySelector('.sweater_3_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw3() {

    s_value13 = String(document.querySelector(".input_size1").value);
    c_value13 = String(document.querySelector(".input_color1").value);
    p_value13 = Number(document.querySelector(".input_price1").value);

    sweater13.price = p_value13;
    sweater13.color = c_value13;
    sweater13.size = s_value13;
    localStorage.setItem('sweater13', JSON.stringify(sweater13));

}

function myfun_buyw3() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun3sw(num) {
    if (num === 1) {
        document.getElementById('starw31').src="star21.png";
        document.getElementById('starw32').src="star2.png";
        document.getElementById('starw33').src="star2.png";
        document.getElementById('starw34').src="star2.png";
        document.getElementById('starw35').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw32').src="star21.png";
        document.getElementById('starw33').src="star2.png";
        document.getElementById('starw34').src="star2.png";
        document.getElementById('starw35').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw31').src="star21.png";
        document.getElementById('starw32').src="star21.png";
        document.getElementById('starw33').src="star22.png";
        document.getElementById('starw34').src="star2.png";
        document.getElementById('starw35').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw31').src="star21.png";
        document.getElementById('starw32').src="star21.png";
        document.getElementById('starw33').src="star22.png";
        document.getElementById('starw34').src="star23.png";
        document.getElementById('starw35').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw31').src="star21.png";
        document.getElementById('starw32').src="star21.png";
        document.getElementById('starw33').src="star22.png";
        document.getElementById('starw34').src="star23.png";
        document.getElementById('starw35').src="star23.png";
    }
}






let sweater14, c_value14, p_value14, s_value14;

sweater14 = JSON.parse(localStorage.getItem('sweater14'));

    document.querySelector('.sweater_4_h6').innerHTML = "  price :" + sweater14.price + "</br>" + " \n color :"  + sweater14.color  + "</br>"  + " \n size :" + sweater14.size;
    document.querySelector('.sweater_4_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw4() {

    s_value14 = String(document.querySelector(".input_size1").value);
    c_value14 = String(document.querySelector(".input_color1").value);
    p_value14 = Number(document.querySelector(".input_price1").value);

    sweater14.price = p_value14;
    sweater14.color = c_value14;
    sweater14.size = s_value14;
    localStorage.setItem('sweater14', JSON.stringify(sweater14));

}

function myfun_buyw4() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun4sw(num) {
    if (num === 1) {
        document.getElementById('starw41').src="star21.png";
        document.getElementById('starw42').src="star2.png";
        document.getElementById('starw43').src="star2.png";
        document.getElementById('starw44').src="star2.png";
        document.getElementById('starw45').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw42').src="star21.png";
        document.getElementById('starw43').src="star2.png";
        document.getElementById('starw44').src="star2.png";
        document.getElementById('starw45').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw41').src="star21.png";
        document.getElementById('starw42').src="star21.png";
        document.getElementById('starw43').src="star22.png";
        document.getElementById('starw44').src="star2.png";
        document.getElementById('starw45').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw41').src="star21.png";
        document.getElementById('starw42').src="star21.png";
        document.getElementById('starw43').src="star22.png";
        document.getElementById('starw44').src="star23.png";
        document.getElementById('starw45').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw41').src="star21.png";
        document.getElementById('starw42').src="star21.png";
        document.getElementById('starw43').src="star22.png";
        document.getElementById('starw44').src="star23.png";
        document.getElementById('starw45').src="star23.png";
    }
} 







let sweater15, c_value15, p_value15, s_value15;

sweater15 =  JSON.parse(localStorage.getItem('sweater15'));

    document.querySelector('.sweater_5_h6').innerHTML = "  price :" + sweater15.price + "</br>" + " \n color :"  + sweater15.color  + "</br>"  + " \n size :" + sweater15.size;
    document.querySelector('.sweater_5_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw5() {

    s_value15 = String(document.querySelector(".input_size1").value);
    c_value15 = String(document.querySelector(".input_color1").value);
    p_value15 = Number(document.querySelector(".input_price1").value);

    sweater15.price = p_value15;
    sweater15.color = c_value15;
    sweater15.size = s_value15;
    localStorage.setItem('sweater15', JSON.stringify(sweater15));

}


function myfun_buyw5() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun5sw(num) {
    if (num === 1) {
        document.getElementById('starw51').src="star21.png";
        document.getElementById('starw52').src="star2.png";
        document.getElementById('starw53').src="star2.png";
        document.getElementById('starw54').src="star2.png";
        document.getElementById('starw55').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw52').src="star21.png";
        document.getElementById('starw53').src="star2.png";
        document.getElementById('starw54').src="star2.png";
        document.getElementById('starw55').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw51').src="star21.png";
        document.getElementById('starw52').src="star21.png";
        document.getElementById('starw53').src="star22.png";
        document.getElementById('starw54').src="star2.png";
        document.getElementById('starw55').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw51').src="star21.png";
        document.getElementById('starw52').src="star21.png";
        document.getElementById('starw53').src="star22.png";
        document.getElementById('starw54').src="star23.png";
        document.getElementById('starw55').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw51').src="star21.png";
        document.getElementById('starw52').src="star21.png";
        document.getElementById('starw53').src="star22.png";
        document.getElementById('starw54').src="star23.png";
        document.getElementById('starw55').src="star23.png";
    }
} 






let sweater16, c_valuew16, p_valuew16, s_valuew16;

sweater16 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('sweater16')));
    document.querySelector('.sweater_6_h6').innerHTML = "  price :" + sweater16.price + "</br>" + "  color :"  + sweater16.color  + "</br>" + " size :" + sweater16.size;
    document.querySelector('.sweater_6_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw6() {

    s_valuew16 = String(document.querySelector(".input_size1").value);
    c_valuew16 = String(document.querySelector(".input_color1").value);
    p_valuew16 = Number(document.querySelector(".input_price1").value);

    sweater16.price = p_valuew16;
    sweater16.color = c_valuew16;
    sweater16.size = s_valuew16;
    localStorage.setItem('sweater16', JSON.stringify(sweater16));

}


function myfun_buysw6() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun6sw(num) {

    if (num === 1) {
        document.getElementById('starw61').src="star21.png";
        document.getElementById('starw62').src="star2.png";
        document.getElementById('starw63').src="star2.png";
        document.getElementById('starw64').src="star2.png";
        document.getElementById('starw65').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw61').src="star21.png";
        document.getElementById('starw62').src="star21.png";
        document.getElementById('starw63').src="star2.png";
        document.getElementById('starw64').src="star2.png";
        document.getElementById('starw65').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw61').src="star21.png";
        document.getElementById('starw62').src="star21.png";
        document.getElementById('starw63').src="star22.png";
        document.getElementById('starw64').src="star2.png";
        document.getElementById('starw65').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw61').src="star21.png";
        document.getElementById('starw62').src="star21.png";
        document.getElementById('starw63').src="star22.png";
        document.getElementById('starw64').src="star23.png";
        document.getElementById('starw65').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw61').src="star21.png";
        document.getElementById('starw62').src="star21.png";
        document.getElementById('starw63').src="star22.png";
        document.getElementById('starw64').src="star23.png";
        document.getElementById('starw65').src="star23.png";
    }
}



















let sweater17, c_value17, p_value17, s_value17;

sweater17 = JSON.parse(localStorage.getItem('sweater17'));

    document.querySelector('.sweater_7_h6').innerHTML = "  price :" + sweater17.price + "</br>" + " \n color :"  + sweater17.color  + "</br>"  + " \n size :" + sweater17.size;
    document.querySelector('.sweater_7_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw7() {

    s_value17 = String(document.querySelector(".input_size1").value);
    c_value17 = String(document.querySelector(".input_color1").value);
    p_value17 = Number(document.querySelector(".input_price1").value);

    sweater17.price = p_value17;
    sweater17.color = c_value17;
    sweater17.size = s_value17;
    localStorage.setItem('sweater17', JSON.stringify(sweater17));

}

function myfun_buyw7() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun7sw(num) {
    if (num === 1) {
        document.getElementById('starw71').src="star21.png";
        document.getElementById('starw72').src="star2.png";
        document.getElementById('starw73').src="star2.png";
        document.getElementById('starw74').src="star2.png";
        document.getElementById('starw75').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw72').src="star21.png";
        document.getElementById('starw73').src="star2.png";
        document.getElementById('starw74').src="star2.png";
        document.getElementById('starw75').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw71').src="star21.png";
        document.getElementById('starw72').src="star21.png";
        document.getElementById('starw73').src="star22.png";
        document.getElementById('starw74').src="star2.png";
        document.getElementById('starw75').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw71').src="star21.png";
        document.getElementById('starw72').src="star21.png";
        document.getElementById('starw73').src="star22.png";
        document.getElementById('starw74').src="star23.png";
        document.getElementById('starw75').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw71').src="star21.png";
        document.getElementById('starw72').src="star21.png";
        document.getElementById('starw73').src="star22.png";
        document.getElementById('starw74').src="star23.png";
        document.getElementById('starw75').src="star23.png";
    }
}








let sweater18, c_value18, p_value18, s_value18;

sweater18 = JSON.parse(localStorage.getItem('sweater18'));

    document.querySelector('.sweater_8_h6').innerHTML = "  price :" + sweater18.price + "</br>" + " \n color :"  + sweater18.color  + "</br>"  + " \n size :" + sweater18.size;
    document.querySelector('.sweater_8_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw8() {

    s_value18 = String(document.querySelector(".input_size1").value);
    c_value18 = String(document.querySelector(".input_color1").value);
    p_value18 = Number(document.querySelector(".input_price1").value);

    sweater18.price = p_value18;
    sweater18.color = c_value18;
    sweater18.size = s_value18;
    localStorage.setItem('sweater18', JSON.stringify(sweater18));

}


function myfun_buyw8() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun8sw(num) {
    if (num === 1) {
        document.getElementById('starw81').src="star21.png";
        document.getElementById('starw82').src="star2.png";
        document.getElementById('starw83').src="star2.png";
        document.getElementById('starw84').src="star2.png";
        document.getElementById('starw85').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw82').src="star21.png";
        document.getElementById('starw83').src="star2.png";
        document.getElementById('starw84').src="star2.png";
        document.getElementById('starw85').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw81').src="star21.png";
        document.getElementById('starw82').src="star21.png";
        document.getElementById('starw83').src="star22.png";
        document.getElementById('starw84').src="star2.png";
        document.getElementById('starw85').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw81').src="star21.png";
        document.getElementById('starw82').src="star21.png";
        document.getElementById('starw83').src="star22.png";
        document.getElementById('starw84').src="star23.png";
        document.getElementById('starw85').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw81').src="star21.png";
        document.getElementById('starw82').src="star21.png";
        document.getElementById('starw83').src="star22.png";
        document.getElementById('starw84').src="star23.png";
        document.getElementById('starw85').src="star23.png";
    }
}







let sweater19, c_value19, p_value19, s_value19;

sweater19 = JSON.parse(localStorage.getItem('sweater19'));

    document.querySelector('.sweater_9_h6').innerHTML = "  price :" + sweater19.price + "</br>" + " \n color :"  + sweater19.color  + "</br>"  + " \n size :" + sweater19.size;
    document.querySelector('.sweater_9_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw9() {

    s_value19 = String(document.querySelector(".input_size1").value);
    c_value19 = String(document.querySelector(".input_color1").value);
    p_value19 = Number(document.querySelector(".input_price1").value);

    sweater19.price = p_value19;
    sweater19.color = c_value19;
    sweater19.size = s_value19;
    localStorage.setItem('sweater19', JSON.stringify(sweater19));

}

function myfun_buyw9() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun9sw(num) {
    if (num === 1) {
        document.getElementById('starw91').src="star21.png";
        document.getElementById('starw92').src="star2.png";
        document.getElementById('starw93').src="star2.png";
        document.getElementById('starw94').src="star2.png";
        document.getElementById('starw95').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw92').src="star21.png";
        document.getElementById('starw93').src="star2.png";
        document.getElementById('starw94').src="star2.png";
        document.getElementById('starw95').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw91').src="star21.png";
        document.getElementById('starw92').src="star21.png";
        document.getElementById('starw93').src="star22.png";
        document.getElementById('starw94').src="star2.png";
        document.getElementById('starw95').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw91').src="star21.png";
        document.getElementById('starw92').src="star21.png";
        document.getElementById('starw93').src="star22.png";
        document.getElementById('starw94').src="star23.png";
        document.getElementById('starw95').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw91').src="star21.png";
        document.getElementById('starw92').src="star21.png";
        document.getElementById('starw93').src="star22.png";
        document.getElementById('starw94').src="star23.png";
        document.getElementById('starw95').src="star23.png";
    }
}









let sweater110, c_value110, p_value110, s_value110;

sweater110 = JSON.parse(localStorage.getItem('sweater110'));

    document.querySelector('.sweater_10_h6').innerHTML = "  price :" + sweater110.price + "</br>" + " \n color :"  + sweater110.color  + "</br>"  + " \n size :" + sweater110.size;
    document.querySelector('.sweater_10_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw10() {

    s_value110 = String(document.querySelector(".input_size1").value);
    c_value110 = String(document.querySelector(".input_color1").value);
    p_value110 = Number(document.querySelector(".input_price1").value);

    sweater110.price = p_value110;
    sweater110.color = c_value110;
    sweater110.size = s_value110;
    localStorage.setItem('sweater110', JSON.stringify(sweater110));

}


function myfun_buyw10() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun10sw(num) {
    if (num === 1) {
        document.getElementById('starw101').src="star21.png";
        document.getElementById('starw102').src="star2.png";
        document.getElementById('starw103').src="star2.png";
        document.getElementById('starw104').src="star2.png";
        document.getElementById('starw105').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw102').src="star21.png";
        document.getElementById('starw103').src="star2.png";
        document.getElementById('starw104').src="star2.png";
        document.getElementById('starw105').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw101').src="star21.png";
        document.getElementById('starw102').src="star21.png";
        document.getElementById('starw103').src="star22.png";
        document.getElementById('starw104').src="star2.png";
        document.getElementById('starw105').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw101').src="star21.png";
        document.getElementById('starw102').src="star21.png";
        document.getElementById('starw103').src="star22.png";
        document.getElementById('starw104').src="star23.png";
        document.getElementById('starw105').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw101').src="star21.png";
        document.getElementById('starw102').src="star21.png";
        document.getElementById('starw103').src="star22.png";
        document.getElementById('starw104').src="star23.png";
        document.getElementById('starw105').src="star23.png";
    }
}








let sweater111, c_valuew111, p_valuew111, s_valuew111;

sweater111 = JSON.parse(localStorage.getItem('sweater111'));
    document.querySelector('.sweater_11_h6').innerHTML = "  price :" + sweater111.price + "</br>" + "  color :"  + sweater111.color  + "</br>" + " size :" + sweater111.size;
    document.querySelector('.sweater_11_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw11() {

    s_valuew111 = String(document.querySelector(".input_size1").value);
    c_valuew111 = String(document.querySelector(".input_color1").value);
    p_valuew111 = Number(document.querySelector(".input_price1").value);

    sweater111.price = p_valuew111;
    sweater111.color = c_valuew111;
    sweater111.size = s_valuew111;
    localStorage.setItem('sweater111', JSON.stringify(sweater111));

}


function myfun_buysw11() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun11sw(num) {

    if (num === 1) {
        document.getElementById('starw111').src="star21.png";
        document.getElementById('starw112').src="star2.png";
        document.getElementById('starw113').src="star2.png";
        document.getElementById('starw114').src="star2.png";
        document.getElementById('starw115').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw111').src="star21.png";
        document.getElementById('starw112').src="star21.png";
        document.getElementById('starw113').src="star2.png";
        document.getElementById('starw114').src="star2.png";
        document.getElementById('starw115').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw111').src="star21.png";
        document.getElementById('starw112').src="star21.png";
        document.getElementById('starw113').src="star22.png";
        document.getElementById('starw114').src="star2.png";
        document.getElementById('starw115').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw111').src="star21.png";
        document.getElementById('starw112').src="star21.png";
        document.getElementById('starw113').src="star22.png";
        document.getElementById('starw114').src="star23.png";
        document.getElementById('starw115').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw111').src="star21.png";
        document.getElementById('starw112').src="star21.png";
        document.getElementById('starw113').src="star22.png";
        document.getElementById('starw114').src="star23.png";
        document.getElementById('starw115').src="star23.png";
    }
}



















let sweater112, c_valuew112, p_valuew112, s_valuew112;

sweater112 = JSON.parse(localStorage.getItem('sweater112'));
    document.querySelector('.sweater_12_h6').innerHTML = "  price :" + sweater112.price + "</br>" + "  color :"  + sweater112.color  + "</br>" + " size :" + sweater112.size;
    document.querySelector('.sweater_12_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunw12() {

    s_valuew112 = String(document.querySelector(".input_size1").value);
    c_valuew112 = String(document.querySelector(".input_color1").value);
    p_valuew112 = Number(document.querySelector(".input_price1").value);

    sweater112.price = p_valuew112;
    sweater112.color = c_valuew112;
    sweater112.size = s_valuew112;
    localStorage.setItem('sweater112', JSON.stringify(sweater112));

}


function myfun_buysw12() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun12sw(num) {

    if (num === 1) {
        document.getElementById('starw121').src="star21.png";
        document.getElementById('starw122').src="star2.png";
        document.getElementById('starw123').src="star2.png";
        document.getElementById('starw124').src="star2.png";
        document.getElementById('starw125').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw121').src="star21.png";
        document.getElementById('starw122').src="star21.png";
        document.getElementById('starw123').src="star2.png";
        document.getElementById('starw124').src="star2.png";
        document.getElementById('starw125').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw121').src="star21.png";
        document.getElementById('starw122').src="star21.png";
        document.getElementById('starw123').src="star22.png";
        document.getElementById('starw124').src="star2.png";
        document.getElementById('starw125').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw121').src="star21.png";
        document.getElementById('starw122').src="star21.png";
        document.getElementById('starw123').src="star22.png";
        document.getElementById('starw124').src="star23.png";
        document.getElementById('starw125').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw121').src="star21.png";
        document.getElementById('starw122').src="star21.png";
        document.getElementById('starw123').src="star22.png";
        document.getElementById('starw124').src="star23.png";
        document.getElementById('starw125').src="star23.png";
    }
}







let trauther11, c_valuet11, p_valuet11, s_valuet11;

trauther11 = JSON.parse(localStorage.getItem('trauther11'));
    document.querySelector('.trauther_1_h6').innerHTML = "  price :" + trauther11.price + "</br>" + "  color :"  + trauther11.color  + "</br>" + " size :" + trauther11.size;
    document.querySelector('.trauther_1_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt1() {

    s_valuet11 = String(document.querySelector(".input_size2").value);
    c_valuet11 = String(document.querySelector(".input_color2").value);
    p_valuet11 = Number(document.querySelector(".input_price2").value);

    trauther11.price = p_valuet11;
    trauther11.color = c_valuet11;
    trauther11.size = s_valuet11;
    localStorage.setItem('trauther11', JSON.stringify(trauther11));

}


function myfun_buyt1() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun1t(num) {

    if (num === 1) {
        document.getElementById('start11').src="star21.png";
        document.getElementById('start12').src="star2.png";
        document.getElementById('start13').src="star2.png";
        document.getElementById('start14').src="star2.png";
        document.getElementById('start15').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start11').src="star21.png";
        document.getElementById('start12').src="star21.png";
        document.getElementById('start13').src="star2.png";
        document.getElementById('start14').src="star2.png";
        document.getElementById('start15').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start11').src="star21.png";
        document.getElementById('start12').src="star21.png";
        document.getElementById('start13').src="star22.png";
        document.getElementById('start14').src="star2.png";
        document.getElementById('start15').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start11').src="star21.png";
        document.getElementById('start12').src="star21.png";
        document.getElementById('start13').src="star22.png";
        document.getElementById('start14').src="star23.png";
        document.getElementById('start15').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start11').src="star21.png";
        document.getElementById('start12').src="star21.png";
        document.getElementById('start13').src="star22.png";
        document.getElementById('start14').src="star23.png";
        document.getElementById('start15').src="star23.png";
    }
}







/* the following 8 are for the trauther only*/


let trauther22, c_value22, p_value22,s_value22;

trauther22 = JSON.parse(localStorage.getItem('trauther22'));

    document.querySelector('.trauther_2_h6').innerHTML = "  price :" + trauther22.price + "</br>"+ " \n color :"  + trauther22.color  + "</br>" + " \n size :" + trauther22.size;
    document.querySelector('.trauther_2_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt2() {

    s_value22 = String(document.querySelector(".input_size2").value);
    c_value22 = String(document.querySelector(".input_color2").value);
    p_value22 = Number(document.querySelector(".input_price2").value);

    trauther22.price = p_value22;
    trauther22.color = c_value22;
    trauther22.size = s_value22;
    localStorage.setItem('trauther22', JSON.stringify(trauther22));

}

function myfun_buyt1() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun2t(num) {
    if (num === 1) {
        document.getElementById('start21').src="star21.png";
        document.getElementById('start22').src="star2.png";
        document.getElementById('start23').src="star2.png";
        document.getElementById('start24').src="star2.png";
        document.getElementById('start25').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start22').src="star21.png";
        document.getElementById('start23').src="star2.png";
        document.getElementById('start24').src="star2.png";
        document.getElementById('start25').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start21').src="star21.png";
        document.getElementById('start22').src="star21.png";
        document.getElementById('start23').src="star22.png";
        document.getElementById('start24').src="star2.png";
        document.getElementById('start25').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start21').src="star21.png";
        document.getElementById('start22').src="star21.png";
        document.getElementById('start23').src="star22.png";
        document.getElementById('start24').src="star23.png";
        document.getElementById('start25').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start21').src="star21.png";
        document.getElementById('start22').src="star21.png";
        document.getElementById('start23').src="star22.png";
        document.getElementById('start24').src="star23.png";
        document.getElementById('start25').src="star23.png";
    }
}






let trauther23, c_value23, p_value23, s_value23;

trauther23 = JSON.parse(localStorage.getItem('trauther23'));


    document.querySelector('.trauther_3_h6').innerHTML = "  price :" + trauther23.price + "</br>"+ " \n color :"  + trauther23.color  + "</br>" + " \n size :" + trauther23.size;
    document.querySelector('.trauther_3_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt3() {

    s_value23 = String(document.querySelector(".input_size2").value);
    c_value23 = String(document.querySelector(".input_color2").value);
    p_value23 = Number(document.querySelector(".input_price2").value);

    trauther23.price = p_value23;
    trauther23.color = c_value23;
    trauther23.size = s_value23;
    localStorage.setItem('trauther23', JSON.stringify(trauther23));

}

function myfun_buyt3() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun3t(num) {
    if (num === 1) {
        document.getElementById('start31').src="star21.png";
        document.getElementById('start32').src="star2.png";
        document.getElementById('start33').src="star2.png";
        document.getElementById('start34').src="star2.png";
        document.getElementById('start35').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start32').src="star21.png";
        document.getElementById('start33').src="star2.png";
        document.getElementById('start34').src="star2.png";
        document.getElementById('start35').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start31').src="star21.png";
        document.getElementById('start32').src="star21.png";
        document.getElementById('start33').src="star22.png";
        document.getElementById('start34').src="star2.png";
        document.getElementById('start35').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start31').src="star21.png";
        document.getElementById('start32').src="star21.png";
        document.getElementById('start33').src="star22.png";
        document.getElementById('start34').src="star23.png";
        document.getElementById('start35').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start31').src="star21.png";
        document.getElementById('start32').src="star21.png";
        document.getElementById('start33').src="star22.png";
        document.getElementById('start34').src="star23.png";
        document.getElementById('start35').src="star23.png";
    }
}








let trauther24, c_value24, p_value24, s_value24;

trauther24 = JSON.parse(localStorage.getItem('trauther24'));

    document.querySelector('.trauther_4_h6').innerHTML = "  price :" + trauther24.price + "</br>"+ " \n color :"  + trauther24.color  + "</br>" + " \n size :" + trauther24.size;
    document.querySelector('.trauther_4_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt4() {

    s_value24 = String(document.querySelector(".input_size2").value);
    c_value24 = String(document.querySelector(".input_color2").value);
    p_value24 = Number(document.querySelector(".input_price2").value);

    trauther24.price = p_value24;
    trauther24.color = c_value24;
    trauther24.size = s_value24;
    localStorage.setItem('trauther24', JSON.stringify(trauther24));

}

function myfun_buyt4() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun4t(num) {
    if (num === 1) {
        document.getElementById('start41').src="star21.png";
        document.getElementById('start42').src="star2.png";
        document.getElementById('start43').src="star2.png";
        document.getElementById('start44').src="star2.png";
        document.getElementById('start45').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start42').src="star21.png";
        document.getElementById('start43').src="star2.png";
        document.getElementById('start44').src="star2.png";
        document.getElementById('start45').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start41').src="star21.png";
        document.getElementById('start42').src="star21.png";
        document.getElementById('start43').src="star22.png";
        document.getElementById('start44').src="star2.png";
        document.getElementById('start45').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start41').src="star21.png";
        document.getElementById('start42').src="star21.png";
        document.getElementById('start43').src="star22.png";
        document.getElementById('start44').src="star23.png";
        document.getElementById('start45').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start41').src="star21.png";
        document.getElementById('start42').src="star21.png";
        document.getElementById('start43').src="star22.png";
        document.getElementById('start44').src="star23.png";
        document.getElementById('start45').src="star23.png";
    }
}






let trauther25, c_value25, p_value25, s_value25;

trauther25 = JSON.parse(localStorage.getItem('trauther25'));

    document.querySelector('.trauther_5_h6').innerHTML = "  price :" + trauther25.price + "</br>"+ " \n color :"  + trauther25.color  + "</br>" + " \n size :" + trauther25.size;
    document.querySelector('.trauther_5_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt5() {

    s_value25 = String(document.querySelector(".input_size2").value);
    c_value25 = String(document.querySelector(".input_color2").value);
    p_value25 = Number(document.querySelector(".input_price2").value);

    trauther25.price = p_value25;
    trauther25.color = c_value25;
    trauther25.size = s_value25;
    localStorage.setItem('trauther25', JSON.stringify(trauther25));

}

function myfun_buyts() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun5t(num) {
    if (num === 1) {
        document.getElementById('start51').src="star21.png";
        document.getElementById('start52').src="star2.png";
        document.getElementById('start53').src="star2.png";
        document.getElementById('start54').src="star2.png";
        document.getElementById('start55').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start52').src="star21.png";
        document.getElementById('start53').src="star2.png";
        document.getElementById('start54').src="star2.png";
        document.getElementById('start55').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start51').src="star21.png";
        document.getElementById('start52').src="star21.png";
        document.getElementById('start53').src="star22.png";
        document.getElementById('start54').src="star2.png";
        document.getElementById('start55').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start51').src="star21.png";
        document.getElementById('start52').src="star21.png";
        document.getElementById('start53').src="star22.png";
        document.getElementById('start54').src="star23.png";
        document.getElementById('start55').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start51').src="star21.png";
        document.getElementById('start52').src="star21.png";
        document.getElementById('start53').src="star22.png";
        document.getElementById('start54').src="star23.png";
        document.getElementById('start55').src="star23.png";
    }
}




let trauther16, c_valuet16, p_valuet16, s_valuet16;

trauther16 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('trauther16')));
    document.querySelector('.trauther_6_h6').innerHTML = "  price :" + trauther16.price + "</br>" + "  color :"  + trauther16.color  + "</br>" + " size :" + trauther16.size;
    document.querySelector('.trauther_6_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt6(num) {

    s_valuet16 = String(document.querySelector(".input_size2").value);
    c_valuet16 = String(document.querySelector(".input_color2").value);
    p_valuet16 = Number(document.querySelector(".input_price2").value);

    trauther16.price = p_valuet16;
    trauther16.color = c_valuet16;
    trauther16.size = s_valuet16;
    localStorage.setItem('trauther16', JSON.stringify(trauther16));

}


function myfun_buyt6() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun6t(num) {

    if (num === 1) {
        document.getElementById('start61').src="star21.png";
        document.getElementById('start62').src="star2.png";
        document.getElementById('start63').src="star2.png";
        document.getElementById('start64').src="star2.png";
        document.getElementById('start65').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start61').src="star21.png";
        document.getElementById('start62').src="star21.png";
        document.getElementById('start63').src="star2.png";
        document.getElementById('start64').src="star2.png";
        document.getElementById('start65').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start61').src="star21.png";
        document.getElementById('start62').src="star21.png";
        document.getElementById('start63').src="star22.png";
        document.getElementById('start64').src="star2.png";
        document.getElementById('start65').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start61').src="star21.png";
        document.getElementById('start62').src="star21.png";
        document.getElementById('start63').src="star22.png";
        document.getElementById('start64').src="star23.png";
        document.getElementById('start65').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start61').src="star21.png";
        document.getElementById('start62').src="star21.png";
        document.getElementById('start63').src="star22.png";
        document.getElementById('start64').src="star23.png";
        document.getElementById('start65').src="star23.png";
    }
}








let trauther27, c_value27, p_value27, s_value27;

trauther27 = JSON.parse(localStorage.getItem('trauther27'));

    document.querySelector('.trauther_7_h6').innerHTML = "  price :" + trauther27.price + "</br>"+ " \n color :"  + trauther27.color  + "</br>" + " \n size :" + trauther27.size;
    document.querySelector('.trauther_7_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt7() {

    s_value27 = String(document.querySelector(".input_size2").value);
    c_value27 = String(document.querySelector(".input_color2").value);
    p_value27 = Number(document.querySelector(".input_price2").value);

    trauther27.price = p_value27;
    trauther27.color = c_value27;
    trauther27.size = s_value27;
    localStorage.setItem('trauther27', JSON.stringify(trauther27));

}

function myfun_buyt7() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun7t(num) {
    if (num === 1) {
        document.getElementById('start71').src="star21.png";
        document.getElementById('start72').src="star2.png";
        document.getElementById('start73').src="star2.png";
        document.getElementById('start74').src="star2.png";
        document.getElementById('start75').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start72').src="star21.png";
        document.getElementById('start73').src="star2.png";
        document.getElementById('start74').src="star2.png";
        document.getElementById('start75').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start71').src="star21.png";
        document.getElementById('start72').src="star21.png";
        document.getElementById('start73').src="star22.png";
        document.getElementById('start74').src="star2.png";
        document.getElementById('start75').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start71').src="star21.png";
        document.getElementById('start72').src="star21.png";
        document.getElementById('start73').src="star22.png";
        document.getElementById('start74').src="star23.png";
        document.getElementById('start75').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start71').src="star21.png";
        document.getElementById('start72').src="star21.png";
        document.getElementById('start73').src="star22.png";
        document.getElementById('start74').src="star23.png";
        document.getElementById('start75').src="star23.png";
    }
}





let trauther28, c_value28, p_value28, s_value28;

trauther28 = JSON.parse(localStorage.getItem('trauther28'));


    document.querySelector('.trauther_8_h6').innerHTML = "  price :" + trauther28.price + "</br>"+ " \n color :"  + trauther28.color  + "</br>" + " \n size :" + trauther28.size;
    document.querySelector('.trauther_8_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt8() {

    s_value28 = String(document.querySelector(".input_size2").value);
    c_value28 = String(document.querySelector(".input_color2").value);
    p_value28 = Number(document.querySelector(".input_price2").value);

    trauther28.price = p_value28;
    trauther28.color = c_value28;
    trauther28.size = s_value28;
    localStorage.setItem('trauther28', JSON.stringify(trauther28));

}

function myfun_buyt8() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}


function myfun8t(num) {
    if (num === 1) {
        document.getElementById('start81').src="star21.png";
        document.getElementById('start82').src="star2.png";
        document.getElementById('start83').src="star2.png";
        document.getElementById('start84').src="star2.png";
        document.getElementById('start85').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start82').src="star21.png";
        document.getElementById('start83').src="star2.png";
        document.getElementById('start84').src="star2.png";
        document.getElementById('start85').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start81').src="star21.png";
        document.getElementById('start82').src="star21.png";
        document.getElementById('start83').src="star22.png";
        document.getElementById('start84').src="star2.png";
        document.getElementById('start85').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start81').src="star21.png";
        document.getElementById('start82').src="star21.png";
        document.getElementById('start83').src="star22.png";
        document.getElementById('start84').src="star23.png";
        document.getElementById('start85').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start81').src="star21.png";
        document.getElementById('start82').src="star21.png";
        document.getElementById('start83').src="star22.png";
        document.getElementById('start84').src="star23.png";
        document.getElementById('start85').src="star23.png";
    }
}






let trauther29, c_value29, p_value29, s_value29;

trauther29 = JSON.parse(localStorage.getItem('trauther29'));

    document.querySelector('.trauther_9_h6').innerHTML = "  price :" + trauther29.price + "</br>"+ " \n color :"  + trauther29.color  + "</br>" + " \n size :" + trauther29.size;
    document.querySelector('.trauther_9_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt9() {

    s_value29 = String(document.querySelector(".input_size2").value);
    c_value29 = String(document.querySelector(".input_color2").value);
    p_value29 = Number(document.querySelector(".input_price2").value);

    trauther29.price = p_value29;
    trauther29.color = c_value29;
    trauther29.size = s_value29;
    localStorage.setItem('trauther29', JSON.stringify(trauther29));

}

function myfun_buyt9() {    /* w = 1 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun9t(num) {
    if (num === 1) {
        document.getElementById('start91').src="star21.png";
        document.getElementById('start92').src="star2.png";
        document.getElementById('start93').src="star2.png";
        document.getElementById('start94').src="star2.png";
        document.getElementById('start95').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start92').src="star21.png";
        document.getElementById('start93').src="star2.png";
        document.getElementById('start94').src="star2.png";
        document.getElementById('start95').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start91').src="star21.png";
        document.getElementById('start92').src="star21.png";
        document.getElementById('start93').src="star22.png";
        document.getElementById('start94').src="star2.png";
        document.getElementById('start95').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start91').src="star21.png";
        document.getElementById('start92').src="star21.png";
        document.getElementById('start93').src="star22.png";
        document.getElementById('start94').src="star23.png";
        document.getElementById('start95').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start91').src="star21.png";
        document.getElementById('start92').src="star21.png";
        document.getElementById('start93').src="star22.png";
        document.getElementById('start94').src="star23.png";
        document.getElementById('start95').src="star23.png";
    }
}







let trauther210, c_value210, p_value210, s_value210;

trauther210 = JSON.parse(localStorage.getItem('trauther210'));


    document.querySelector('.trauther_10_h6').innerHTML = "  price :" + trauther210.price + "</br>"+ " \n color :"  + trauther210.color + "</br>"  + " \n size :" + trauther210.size;
    document.querySelector('.trauther_10_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt10() {

    s_value210 = String(document.querySelector('.input_size2').value);
    c_value210 = String(document.querySelector('.input_color2').value);
    p_value210 = Number(document.querySelector('.input_price2').value);

    trauther210.price = p_value210;
    trauther210.color = c_value210;
    trauther210.size = s_value210;
    localStorage.setItem('trauther210', JSON.stringify(trauther210));

}


function myfun_buyt10() {    /* wt = 2 */
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun10t(num) {
    if (num === 1) {
        document.getElementById('start101').src="star21.png";
        document.getElementById('start102').src="star2.png";
        document.getElementById('start103').src="star2.png";
        document.getElementById('start104').src="star2.png";
        document.getElementById('start105').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start102').src="star21.png";
        document.getElementById('start103').src="star2.png";
        document.getElementById('start104').src="star2.png";
        document.getElementById('start105').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start101').src="star21.png";
        document.getElementById('start102').src="star21.png";
        document.getElementById('start103').src="star22.png";
        document.getElementById('start104').src="star2.png";
        document.getElementById('start105').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start101').src="star21.png";
        document.getElementById('start102').src="star21.png";
        document.getElementById('start103').src="star22.png";
        document.getElementById('start104').src="star23.png";
        document.getElementById('start105').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start101').src="star21.png";
        document.getElementById('start102').src="star21.png";
        document.getElementById('start103').src="star22.png";
        document.getElementById('start104').src="star23.png";
        document.getElementById('start105').src="star23.png";
    }
}







let trauther111, c_valuet111, p_valuet111, s_valuet111;

trauther111 = JSON.parse(localStorage.getItem('trauther111'));
    document.querySelector('.trauther_11_h6').innerHTML = "  price :" + trauther111.price + "</br>" + "  color :"  + trauther111.color  + "</br>" + " size :" + trauther111.size;
    document.querySelector('.trauther_11_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt11() {

    s_valuet111 = String(document.querySelector(".input_size2").value);
    c_valuet111 = String(document.querySelector(".input_color2").value);
    p_valuet111 = Number(document.querySelector(".input_price2").value);

    trauther111.price = p_valuet111;
    trauther111.color = c_valuet111;
    trauther111.size = s_valuet111;
    localStorage.setItem('trauther111', JSON.stringify(trauther111));

}


function myfun_buyt11() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun11t(num) {

    if (num === 1) {
        document.getElementById('start111').src="star21.png";
        document.getElementById('start112').src="star2.png";
        document.getElementById('start113').src="star2.png";
        document.getElementById('start114').src="star2.png";
        document.getElementById('start115').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start111').src="star21.png";
        document.getElementById('start112').src="star21.png";
        document.getElementById('start113').src="star2.png";
        document.getElementById('start114').src="star2.png";
        document.getElementById('start115').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start111').src="star21.png";
        document.getElementById('start112').src="star21.png";
        document.getElementById('start113').src="star22.png";
        document.getElementById('start114').src="star2.png";
        document.getElementById('start115').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start111').src="star21.png";
        document.getElementById('start112').src="star21.png";
        document.getElementById('start113').src="star22.png";
        document.getElementById('start114').src="star23.png";
        document.getElementById('start115').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start111').src="star21.png";
        document.getElementById('start112').src="star21.png";
        document.getElementById('start113').src="star22.png";
        document.getElementById('start114').src="star23.png";
        document.getElementById('start115').src="star23.png";
    }
}








let trauther112, c_valuet112, p_valuet112, s_valuet112;

trauther112 = JSON.parse(localStorage.getItem('trauther112'));
    document.querySelector('.trauther_12_h6').innerHTML = "  price :" + trauther112.price + "</br>" + "  color :"  + trauther112.color  + "</br>" + " size :" + trauther112.size;
    document.querySelector('.trauther_12_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfunt12() {

    s_valuet112 = String(document.querySelector(".input_size2").value);
    c_valuet112 = String(document.querySelector(".input_color2").value);
    p_valuet112 = Number(document.querySelector(".input_price2").value);

    trauther112.price = p_valuet112;
    trauther112.color = c_valuet112;
    trauther112.size = s_valuet112;
    localStorage.setItem('trauther112', JSON.stringify(trauther112));

}


function myfun_buyt12() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}





function myfun12t(num) {

    if (num === 1) {
        document.getElementById('start121').src="star21.png";
        document.getElementById('start122').src="star2.png";
        document.getElementById('start123').src="star2.png";
        document.getElementById('start124').src="star2.png";
        document.getElementById('start125').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start121').src="star21.png";
        document.getElementById('start122').src="star21.png";
        document.getElementById('start123').src="star2.png";
        document.getElementById('start124').src="star2.png";
        document.getElementById('start125').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start121').src="star21.png";
        document.getElementById('start122').src="star21.png";
        document.getElementById('start123').src="star22.png";
        document.getElementById('start124').src="star2.png";
        document.getElementById('start125').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start121').src="star21.png";
        document.getElementById('start122').src="star21.png";
        document.getElementById('start123').src="star22.png";
        document.getElementById('start124').src="star23.png";
        document.getElementById('start125').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start121').src="star21.png";
        document.getElementById('start122').src="star21.png";
        document.getElementById('start123').src="star22.png";
        document.getElementById('start124').src="star23.png";
        document.getElementById('start125').src="star23.png";
    }
}




let dress11, c_valued11, p_valued11, s_valued11;

dress11 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress11')));
    document.querySelector('.dress_1_h6').innerHTML = "  price :" + dress11.price + "</br>" + "  color :"  + dress11.color  + "</br>" + " size :" + dress11.size;
    document.querySelector('.dress_1_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfund1() {

    s_valued11 = String(document.querySelector(".input_size3").value);
    c_valued11 = String(document.querySelector(".input_color3").value);
    p_valued11 = Number(document.querySelector(".input_price3").value);

    dress11.price = p_valued11;
    dress11.color = c_valued11;
    dress11.size = s_valued11;
    localStorage.setItem('dress11', JSON.stringify(dress11));

}


function myfun_buyd1() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun1d(num) {

    if (num === 1) {
        document.getElementById('stard11').src="star21.png";
        document.getElementById('stard12').src="star2.png";
        document.getElementById('stard13').src="star2.png";
        document.getElementById('stard14').src="star2.png";
        document.getElementById('stard15').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard11').src="star21.png";
        document.getElementById('stard12').src="star21.png";
        document.getElementById('stard13').src="star2.png";
        document.getElementById('stard14').src="star2.png";
        document.getElementById('stard15').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard11').src="star21.png";
        document.getElementById('stard12').src="star21.png";
        document.getElementById('stard13').src="star22.png";
        document.getElementById('stard14').src="star2.png";
        document.getElementById('stard15').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard11').src="star21.png";
        document.getElementById('stard12').src="star21.png";
        document.getElementById('stard13').src="star22.png";
        document.getElementById('stard14').src="star23.png";
        document.getElementById('stard15').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard11').src="star21.png";
        document.getElementById('stard12').src="star21.png";
        document.getElementById('stard13').src="star22.png";
        document.getElementById('stard14').src="star23.png";
        document.getElementById('stard15').src="star23.png";
    }
}





/* the following 8 are for the dress only*/


let dress42, c_value42, p_value42,s_value42;

dress42 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress42')));


    document.querySelector('.dress_2_h6').innerHTML = "  price :" + dress42.price + "</br>" + " \n color :"  + dress42.color  + "</br>"  + " \n size :" + dress42.size;
    document.querySelector('.dress_2_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfund12() {

    s_value42 = String(document.querySelector(".input_size4").value);
    c_value42 = String(document.querySelector(".input_color4").value);
    p_value42 = Number(document.querySelector(".input_price4").value);

    dress42.price = p_value42;
    dress42.color = c_value42;
    dress42.size = s_value42;
    localStorage.setItem('dress42', JSON.stringify(dress42));

}

function myfun_buyd2() {    
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun2d(num) {
    if (num === 1) {
        document.getElementById('stard21').src="star21.png";
        document.getElementById('stard22').src="star2.png";
        document.getElementById('stard23').src="star2.png";
        document.getElementById('stard24').src="star2.png";
        document.getElementById('stard25').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard22').src="star21.png";
        document.getElementById('stard23').src="star2.png";
        document.getElementById('stard24').src="star2.png";
        document.getElementById('stard25').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard21').src="star21.png";
        document.getElementById('stard22').src="star21.png";
        document.getElementById('stard23').src="star22.png";
        document.getElementById('stard24').src="star2.png";
        document.getElementById('stard25').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard21').src="star21.png";
        document.getElementById('stard22').src="star21.png";
        document.getElementById('stard23').src="star22.png";
        document.getElementById('stard24').src="star23.png";
        document.getElementById('stard25').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard21').src="star21.png";
        document.getElementById('stard22').src="star21.png";
        document.getElementById('stard23').src="star22.png";
        document.getElementById('stard24').src="star23.png";
        document.getElementById('stard25').src="star23.png";
    }
}




let dress43, c_value43, p_value43, s_value43;

dress43 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress43')));


    document.querySelector('.dress_3_h6').innerHTML = "  price :" + dress43.price + "</br>" + " \n color :"  + dress43.color  + "</br>"  + " \n size :" + dress43.size;
    document.querySelector('.dress_3_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun43() {

    s_value43 = String(document.querySelector(".input_size4").value);
    c_value43 = String(document.querySelector(".input_color4").value);
    p_value43 = Number(document.querySelector(".input_price4").value);

    dress43.price = p_value43;
    dress43.color = c_value43;
    dress43.size = s_value43;
    localStorage.setItem('dress43', JSON.stringify(dress43));

}


function myfun_buyd3() {    
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun3d(num) {
    if (num === 1) {
        document.getElementById('stard31').src="star21.png";
        document.getElementById('stard32').src="star2.png";
        document.getElementById('stard33').src="star2.png";
        document.getElementById('stard34').src="star2.png";
        document.getElementById('stard35').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard32').src="star21.png";
        document.getElementById('stard33').src="star2.png";
        document.getElementById('stard34').src="star2.png";
        document.getElementById('stard35').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard31').src="star21.png";
        document.getElementById('stard32').src="star21.png";
        document.getElementById('stard33').src="star22.png";
        document.getElementById('stard34').src="star2.png";
        document.getElementById('stard35').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard31').src="star21.png";
        document.getElementById('stard32').src="star21.png";
        document.getElementById('stard33').src="star22.png";
        document.getElementById('stard34').src="star23.png";
        document.getElementById('stard35').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard31').src="star21.png";
        document.getElementById('stard32').src="star21.png";
        document.getElementById('stard33').src="star22.png";
        document.getElementById('stard34').src="star23.png";
        document.getElementById('stard35').src="star23.png";
    }
}







let dress44, c_value44, p_value44, s_value44;

dress44 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress44')));


    document.querySelector('.dress_4_h6').innerHTML = "  price :" + dress44.price + "</br>" + " \n color :"  + dress44.color  + "</br>"  + " \n size :" + dress44.size;
    document.querySelector('.dress_4_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun44() {

    s_value44 = String(document.querySelector(".input_size4").value);
    c_value44 = String(document.querySelector(".input_color4").value);
    p_value44 = Number(document.querySelector(".input_price4").value);

    dress44.price = p_value44;
    dress44.color = c_value44;
    dress44.size = s_value44;
    localStorage.setItem('dress44', JSON.stringify(dress44));

}

function myfun_buyd4() {    
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun4d(num) {
    if (num === 1) {
        document.getElementById('stard41').src="star21.png";
        document.getElementById('stard42').src="star2.png";
        document.getElementById('stard43').src="star2.png";
        document.getElementById('stard44').src="star2.png";
        document.getElementById('stard45').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard42').src="star21.png";
        document.getElementById('stard43').src="star2.png";
        document.getElementById('stard44').src="star2.png";
        document.getElementById('stard45').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard41').src="star21.png";
        document.getElementById('stard42').src="star21.png";
        document.getElementById('stard43').src="star22.png";
        document.getElementById('stard44').src="star2.png";
        document.getElementById('stard45').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard41').src="star21.png";
        document.getElementById('stard42').src="star21.png";
        document.getElementById('stard43').src="star22.png";
        document.getElementById('stard44').src="star23.png";
        document.getElementById('stard45').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard41').src="star21.png";
        document.getElementById('stard42').src="star21.png";
        document.getElementById('stard43').src="star22.png";
        document.getElementById('stard44').src="star23.png";
        document.getElementById('stard45').src="star23.png";
    }
}







let dress45, c_value45, p_value45, s_value45;

dress45 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress45')));


    document.querySelector('.dress_5_h6').innerHTML = "  price :" + dress45.price + "</br>" + " \n color :"  + dress45.color  + "</br>"  + " \n size :" + dress45.size;
    document.querySelector('.dress_5_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun45() {

    s_value45 = String(document.querySelector(".input_size4").value);
    c_value45 = String(document.querySelector(".input_color4").value);
    p_value45 = Number(document.querySelector(".input_price4").value);

    dress45.price = p_value45;
    dress45.color = c_value45;
    dress45.size = s_value45;
    localStorage.setItem('dress45', JSON.stringify(dress45));

}

function myfun_buyd5() {    
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun5d(num) {
    if (num === 1) {
        document.getElementById('stard51').src="star21.png";
        document.getElementById('stard52').src="star2.png";
        document.getElementById('stard53').src="star2.png";
        document.getElementById('stard54').src="star2.png";
        document.getElementById('stard55').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard52').src="star21.png";
        document.getElementById('stard53').src="star2.png";
        document.getElementById('stard54').src="star2.png";
        document.getElementById('stard55').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard51').src="star21.png";
        document.getElementById('stard52').src="star21.png";
        document.getElementById('stard53').src="star22.png";
        document.getElementById('stard54').src="star2.png";
        document.getElementById('stard55').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard51').src="star21.png";
        document.getElementById('stard52').src="star21.png";
        document.getElementById('stard53').src="star22.png";
        document.getElementById('stard54').src="star23.png";
        document.getElementById('stard55').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard51').src="star21.png";
        document.getElementById('stard52').src="star21.png";
        document.getElementById('stard53').src="star22.png";
        document.getElementById('stard54').src="star23.png";
        document.getElementById('stard55').src="star23.png";
    }
}





let dress16, c_valued16, p_valued16, s_valued16;

dress16 = {
    price: "500",
    color: "red",
    size: "xxl"
}
    console.log(JSON.parse(localStorage.getItem('dress16')));
    document.querySelector('.dress_6_h6').innerHTML = "  price :" + dress16.price + "</br>" + "  color :"  + dress16.color  + "</br>" + " size :" + dress16.size;
    document.querySelector('.dress_6_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfund6() {

    s_valued16 = String(document.querySelector(".input_size3").value);
    c_valued16 = String(document.querySelector(".input_color3").value);
    p_valued16 = Number(document.querySelector(".input_price3").value);

    dress16.price = p_valued16;
    dress16.color = c_valued16;
    dress16.size = s_valued16;
    localStorage.setItem('dress16', JSON.stringify(dress16));

}


function myfun_buyd6() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun6d(num) {

    if (num === 1) {
        document.getElementById('stard61').src="star21.png";
        document.getElementById('stard62').src="star2.png";
        document.getElementById('stard63').src="star2.png";
        document.getElementById('stard64').src="star2.png";
        document.getElementById('stard65').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard61').src="star21.png";
        document.getElementById('stard62').src="star21.png";
        document.getElementById('stard63').src="star2.png";
        document.getElementById('stard64').src="star2.png";
        document.getElementById('stard65').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard61').src="star21.png";
        document.getElementById('stard62').src="star21.png";
        document.getElementById('stard63').src="star22.png";
        document.getElementById('stard64').src="star2.png";
        document.getElementById('stard65').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard61').src="star21.png";
        document.getElementById('stard62').src="star21.png";
        document.getElementById('stard63').src="star22.png";
        document.getElementById('stard64').src="star23.png";
        document.getElementById('stard65').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard61').src="star21.png";
        document.getElementById('stard62').src="star21.png";
        document.getElementById('stard63').src="star22.png";
        document.getElementById('stard64').src="star23.png";
        document.getElementById('stard65').src="star23.png";
    }
}






let dress47, c_value47, p_value47, s_value47;

dress47 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress47')));


    document.querySelector('.dress_7_h6').innerHTML = "  price :" + dress47.price + "</br>" + " \n color :"  + dress47.color  + "</br>"  + " \n size :" + dress47.size;
    document.querySelector('.dress_7_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun47() {

    s_value47 = String(document.querySelector(".input_size4").value);
    c_value47 = String(document.querySelector(".input_color4").value);
    p_value47 = Number(document.querySelector(".input_price4").value);

    dress47.price = p_value47;
    dress47.color = c_value47;
    dress47.size = s_value47;
    localStorage.setItem('dress47', JSON.stringify(dress47));

}

function myfun_buyd7() {    
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun7d(num) {
    if (num === 1) {
        document.getElementById('stard71').src="star21.png";
        document.getElementById('stard72').src="star2.png";
        document.getElementById('stard73').src="star2.png";
        document.getElementById('stard74').src="star2.png";
        document.getElementById('stard75').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard72').src="star21.png";
        document.getElementById('stard73').src="star2.png";
        document.getElementById('stard74').src="star2.png";
        document.getElementById('stard75').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard71').src="star21.png";
        document.getElementById('stard72').src="star21.png";
        document.getElementById('stard73').src="star22.png";
        document.getElementById('stard74').src="star2.png";
        document.getElementById('stard75').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard71').src="star21.png";
        document.getElementById('stard72').src="star21.png";
        document.getElementById('stard73').src="star22.png";
        document.getElementById('stard74').src="star23.png";
        document.getElementById('stard75').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard71').src="star21.png";
        document.getElementById('stard72').src="star21.png";
        document.getElementById('stard73').src="star22.png";
        document.getElementById('stard74').src="star23.png";
        document.getElementById('stard75').src="star23.png";
    }
}






let dress48, c_value48, p_value48, s_value48;

dress48 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress48')));


    document.querySelector('.dress_8_h6').innerHTML = "  price :" + dress48.price + "</br>" + " \n color :"  + dress48.color  + "</br>"  + " \n size :" + dress48.size;
    document.querySelector('.dress_8_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun48() {

    s_value48 = String(document.querySelector(".input_size4").value);
    c_value48 = String(document.querySelector(".input_color4").value);
    p_value48 = Number(document.querySelector(".input_price4").value);

    dress48.price = p_value48;
    dress48.color = c_value48;
    dress48.size = s_value48;
    localStorage.setItem('dress48', JSON.stringify(dress48));

}

function myfun_buyd8() {
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun8d(num) {
    if (num === 1) {
        document.getElementById('stard81').src="star21.png";
        document.getElementById('stard82').src="star2.png";
        document.getElementById('stard83').src="star2.png";
        document.getElementById('stard84').src="star2.png";
        document.getElementById('stard85').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard82').src="star21.png";
        document.getElementById('stard83').src="star2.png";
        document.getElementById('stard84').src="star2.png";
        document.getElementById('stard85').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard81').src="star21.png";
        document.getElementById('stard82').src="star21.png";
        document.getElementById('stard83').src="star22.png";
        document.getElementById('stard84').src="star2.png";
        document.getElementById('stard85').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard81').src="star21.png";
        document.getElementById('stard82').src="star21.png";
        document.getElementById('stard83').src="star22.png";
        document.getElementById('stard84').src="star23.png";
        document.getElementById('stard85').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard81').src="star21.png";
        document.getElementById('stard82').src="star21.png";
        document.getElementById('stard83').src="star22.png";
        document.getElementById('stard84').src="star23.png";
        document.getElementById('stard85').src="star23.png";
    }
}







let dress49, c_value49, p_value49, s_value49;

dress49 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress49')));


    document.querySelector('.dress_9_h6').innerHTML = "  price :" + dress49.price + "</br>" + " \n color :"  + dress49.color  + "</br>"  + " \n size :" + dress49.size;
    document.querySelector('.dress_9_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun49() {

    s_value49 = String(document.querySelector(".input_size4").value);
    c_value49 = String(document.querySelector(".input_color4").value);
    p_value49 = Number(document.querySelector(".input_price4").value);

    dress49.price = p_value49;
    dress49.color = c_value49;
    dress49.size = s_value49;
    localStorage.setItem('dress49', JSON.stringify(dress49));

}


function myfun_buyd9() {
    num1++;
    document.getElementById('p_cart').textContent = num1; 
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}

function myfun9d(num) {
    if (num === 1) {
        document.getElementById('stard91').src="star21.png";
        document.getElementById('stard92').src="star2.png";
        document.getElementById('stard93').src="star2.png";
        document.getElementById('stard94').src="star2.png";
        document.getElementById('stard95').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard92').src="star21.png";
        document.getElementById('stard93').src="star2.png";
        document.getElementById('stard94').src="star2.png";
        document.getElementById('stard95').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard91').src="star21.png";
        document.getElementById('stard92').src="star21.png";
        document.getElementById('stard93').src="star22.png";
        document.getElementById('stard94').src="star2.png";
        document.getElementById('stard95').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard91').src="star21.png";
        document.getElementById('stard92').src="star21.png";
        document.getElementById('stard93').src="star22.png";
        document.getElementById('stard94').src="star23.png";
        document.getElementById('stard95').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard91').src="star21.png";
        document.getElementById('stard92').src="star21.png";
        document.getElementById('stard93').src="star22.png";
        document.getElementById('stard94').src="star23.png";
        document.getElementById('stard95').src="star23.png";
    }
}







let dress410, c_value410, p_value410, s_value410;

dress410 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress410')));


    document.querySelector('.dress_10_h6').innerHTML = "  price :" + dress410.price + "</br>" + " \n color :"  + dress410.color + "</br>"   + " \n size :" + dress410.size;
    document.querySelector('.dress_10_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfun410() {

    s_value410 = String(document.querySelector(".input_size4").value);
    c_value410 = String(document.querySelector(".input_color4").value);
    p_value410 = Number(document.querySelector(".input_price4").value);

    dress410.price = p_value410;
    dress410.color = c_value410;
    dress410.size = s_value410;

    localStorage.setItem('dress410', JSON.stringify(dress410));

}


function myfun_buyd10() {
    num1++;
    localStorage.setItem('byd10', JSON.stringify(num1));
    num1 = JSON.parse(localStorage.getItem('byd10'));
    document.getElementById('p_cart').textContent = num1; 
}

function myfun10d(num) {
    if (num === 1) {
        document.getElementById('stard101').src="star21.png";
        document.getElementById('stard102').src="star2.png";
        document.getElementById('stard103').src="star2.png";
        document.getElementById('stard104').src="star2.png";
        document.getElementById('stard105').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard102').src="star21.png";
        document.getElementById('stard103').src="star2.png";
        document.getElementById('stard104').src="star2.png";
        document.getElementById('stard105').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard101').src="star21.png";
        document.getElementById('stard102').src="star21.png";
        document.getElementById('stard103').src="star22.png";
        document.getElementById('stard104').src="star2.png";
        document.getElementById('stard105').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard101').src="star21.png";
        document.getElementById('stard102').src="star21.png";
        document.getElementById('stard103').src="star22.png";
        document.getElementById('stard104').src="star23.png";
        document.getElementById('stard105').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard101').src="star21.png";
        document.getElementById('stard102').src="star21.png";
        document.getElementById('stard103').src="star22.png";
        document.getElementById('stard104').src="star23.png";
        document.getElementById('stard105').src="star23.png";
    }
}



let dress111, c_valued111, p_valued111, s_valued111;

dress111 = {
    price: "500",
    color: "red",
    size: "xxl"
}
    console.log(JSON.parse(localStorage.getItem('dress111')));
    document.querySelector('.dress_11_h6').innerHTML = "  price :" + dress111.price + "</br>" + "  color :"  + dress111.color  + "</br>" + " size :" + dress111.size;
    document.querySelector('.dress_11_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfund11() {

    s_valued111 = String(document.querySelector(".input_size3").value);
    c_valued111 = String(document.querySelector(".input_color3").value);
    p_valued111 = Number(document.querySelector(".input_price3").value);

    dress111.price = p_valued111;
    dress111.color = c_valued111;
    dress111.size = s_valued111;
    localStorage.setItem('dress111', JSON.stringify(dress111));

}


function myfun_buyd11() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun11d(num) {

    if (num === 1) {
        document.getElementById('stard111').src="star21.png";
        document.getElementById('stard112').src="star2.png";
        document.getElementById('stard113').src="star2.png";
        document.getElementById('stard114').src="star2.png";
        document.getElementById('stard115').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard111').src="star21.png";
        document.getElementById('stard112').src="star21.png";
        document.getElementById('stard113').src="star2.png";
        document.getElementById('stard114').src="star2.png";
        document.getElementById('stard115').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard111').src="star21.png";
        document.getElementById('stard112').src="star21.png";
        document.getElementById('stard113').src="star22.png";
        document.getElementById('stard114').src="star2.png";
        document.getElementById('stard115').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard111').src="star21.png";
        document.getElementById('stard112').src="star21.png";
        document.getElementById('stard113').src="star22.png";
        document.getElementById('stard114').src="star23.png";
        document.getElementById('stard115').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard111').src="star21.png";
        document.getElementById('stard112').src="star21.png";
        document.getElementById('stard113').src="star22.png";
        document.getElementById('stard114').src="star23.png";
        document.getElementById('stard115').src="star23.png";
    }
}




let dress112, c_valued112, p_valued112, s_valued112;

dress112 = {
    price: "500",
    color: "red",
    size: "xxl"
};
    console.log(JSON.parse(localStorage.getItem('dress112')));
    document.querySelector('.dress_12_h6').innerHTML = "  price :" + dress112.price + "</br>" + "  color :"  + dress112.color  + "</br>" + " size :" + dress112.size;
    document.querySelector('.dress_12_h6').style = "font-size: 12px; color:white; font-weight: bold;";


function myfund12() {

    s_valued112 = String(document.querySelector(".input_size3").value);
    c_valued112 = String(document.querySelector(".input_color3").value);
    p_valued112 = Number(document.querySelector(".input_price3").value);

    dress112.price = p_valued112;
    dress112.color = c_valued112;
    dress112.size = s_valued112;
    localStorage.setItem('dress112', JSON.stringify(dress112));

}


function myfun_buyd12() {
    num1++;
    document.getElementById('p_cart').textContent = num1;
    num1 = Number(document.getElementById('p_cart').textContent = num1);
}




function myfun12d(num) {

    if (num === 1) {
        document.getElementById('stard121').src="star21.png";
        document.getElementById('stard122').src="star2.png";
        document.getElementById('stard123').src="star2.png";
        document.getElementById('stard124').src="star2.png";
        document.getElementById('stard125').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard121').src="star21.png";
        document.getElementById('stard122').src="star21.png";
        document.getElementById('stard123').src="star2.png";
        document.getElementById('stard124').src="star2.png";
        document.getElementById('stard125').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard121').src="star21.png";
        document.getElementById('stard122').src="star21.png";
        document.getElementById('stard123').src="star22.png";
        document.getElementById('stard124').src="star2.png";
        document.getElementById('stard125').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard121').src="star21.png";
        document.getElementById('stard122').src="star21.png";
        document.getElementById('stard123').src="star22.png";
        document.getElementById('stard124').src="star23.png";
        document.getElementById('stard125').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard121').src="star21.png";
        document.getElementById('stard122').src="star21.png";
        document.getElementById('stard123').src="star22.png";
        document.getElementById('stard124').src="star23.png";
        document.getElementById('stard125').src="star23.png";
    }
}













