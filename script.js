window.onload=function(){

      var time=document.getElementById('h1');
      var hex=document.getElementById('h3');

      function colour(){
      var date =new Date();
      var hours=date.getHours()%12;
      var min=date.getMinutes();
      var sec=date.getSeconds();
      if (hours<12) {
      	 hours="0"+hours;
      }
      if (min<10) {
      	 min="0"+min;
      }
      if (sec<10) {
      	sec="0"+sec;
      }
      var timeLayout=hours+":"+min+"."+sec;
      var hexLayout="#"+hours+min+sec;
      time.innerHTML=timeLayout;
      hex.innerHTML=hexLayout;
      document.body.style.background=hexLayout;
      }


      colour();
      setInterval(colour,1000);
}