  //Javascript 
  
  function dis(input){
    let n1= document.getElementById("res");
    n1.value += input;
  }

  function cle(){
    let c = document.getElementById("res");
    c.value = '';
  }

  function result(){
    let n = document.getElementById("res").value;
    let m = eval(n);
    document.getElementById('res').value=m;

  }

  function del(x){
    let naveen = document.getElementById("res");
    naveen.value = naveen.value.slice(0,-1);
  }
