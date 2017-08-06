		  var matricNumber;
		  function getPoint(grade){
			switch(grade){
			case "A" : return 4.0;
			case "AB" : return 3.5;
			case "B" : return 3.0;
			case "BC" : return 2.5;
			case "C" : return 2.0;
			case "D" : return 1.5;
			case "E" : return 1.0;
			case "F" : return 0.0;
			case undefined : return 0.0;
			case "" : return 0.0;
			case 0 : return 0.0;
			default : return 0.0;
			}
		  }
		  function getGrade(score){
				if(score>=70){
					return "A"
				}
				else if(score>=65 && score<70){
					return "AB";
				}
				else if(score>=60 && score<65){
					return "B";
				}
				else if(score>=55 && score<60){
					return "BC";
				}
				else if(score>=50 && score<55){
					return "C"
				}
				else if(score>=45 && score<50){
					return "D"
				}
				else if(score>=40 && score<45){
					return "E";
				}
				else {
					return "F";
				}
		  }
		  //$(document).one("pagecreate","#sim1resultpage",function(){
				 $("#login").on("tap",function(){
					var matNum = document.getElementById("matricNumber").value;
					if(matNum===undefined){
						console.log("pls enter a matric number");
					}
					else{
						matricNumber=matNum;
						document.getElementById("loginsatus").innerHTML="MatricNumber : "+matricNumber;
						$.ajax({
							url: "http://softwork.herokuapp.com/api/getsim1Result?matricNumber="+matricNumber,
							success: updateSim1ResultForm
						});
					}
					
				});
				function updateSim1ResultForm(myObj){
					//myObj = JSON.parse(myObj);
					for(i=1; i<=15; i++){
					document.getElementById("sim1cc"+i).value = myObj["sim1cc"+i];
					document.getElementById("sim1cu"+i).value = myObj["sim1cu"+i];
					document.getElementById("sim1score"+i).value = myObj["sim1score"+i];
					document.getElementById("sim1grade"+i).value = myObj["sim1grade"+i];
					}
					matricNumber = document.getElementById("matricNumber").value;
					$.ajax({
							url: "http://softwork.herokuapp.com/api/getsim2Result?matricNumber="+matricNumber,
							success: updateSim2ResultForm
						});
				}
				function updateSim2ResultForm(myObj){
					//myObj = JSON.parse(myObj);
					for(i=1; i<=15; i++){
					document.getElementById("sim2cc"+i).value = myObj["sim2cc"+i];
					document.getElementById("sim2cu"+i).value = myObj["sim2cu"+i];
					document.getElementById("sim2score"+i).value = myObj["sim2score"+i];
					document.getElementById("sim2grade"+i).value = myObj["sim2grade"+i];
					}
					$.ajax({
							url: "http://softwork.herokuapp.com/api/getsim3Result?matricNumber="+matricNumber,
							success: updateSim3ResultForm
						});
				}
				function updateSim3ResultForm(myObj){
					//myObj = JSON.parse(myObj);
					for(i=1; i<=15; i++){
					document.getElementById("sim3cc"+i).value = myObj["sim3cc"+i];
					document.getElementById("sim3cu"+i).value = myObj["sim3cu"+i];
					document.getElementById("sim3score"+i).value = myObj["sim3score"+i];
					document.getElementById("sim3grade"+i).value = myObj["sim3grade"+i];
					}
					$.ajax({
							url: "http://softwork.herokuapp.com/api/getsim4Result?matricNumber="+matricNumber,
							success: updateSim4ResultForm
						});
				}
				function updateSim4ResultForm(myObj){
					//myObj = JSON.parse(myObj);
					for(i=1; i<=15; i++){
					document.getElementById("sim4cc"+i).value = myObj["sim4cc"+i];
					document.getElementById("sim4cu"+i).value = myObj["sim4cu"+i];
					document.getElementById("sim4score"+i).value = myObj["sim4score"+i];
					document.getElementById("sim4grade"+i).value = myObj["sim4grade"+i];
					}
				}
				$("#sim1score1").blur(function(){
					var score = document.getElementById("sim1score1").value;
					document.getElementById("sim1grade1").value =getGrade(score);
				});
				$("#sim1score2").blur(function(){
					var score = document.getElementById("sim1score2").value;
					document.getElementById("sim1grade2").value =getGrade(score);
				});
				$("#sim1score3").blur(function(){
					var score = document.getElementById("sim1score3").value;
					document.getElementById("sim1grade3").value =getGrade(score);
				});
				$("#sim1score4").blur(function(){
					var score = document.getElementById("sim1score4").value;
					document.getElementById("sim1grade4").value =getGrade(score);
				});
				$("#sim1score5").blur(function(){
					var score = document.getElementById("sim1score5").value;
					document.getElementById("sim1grade5").value =getGrade(score);
				});
				$("#sim1score6").blur(function(){
					var score = document.getElementById("sim1score6").value;
					document.getElementById("sim1grade6").value =getGrade(score);
				});
				$("#sim1score7").blur(function(){
					var score = document.getElementById("sim1score7").value;
					document.getElementById("sim1grade7").value =getGrade(score);
				});
				$("#sim1score8").blur(function(){
					var score = document.getElementById("sim1score8").value;
					document.getElementById("sim1grade8").value =getGrade(score);
				});
				$("#sim1score9").blur(function(){
					var score = document.getElementById("sim1score9").value;
					document.getElementById("sim1grade9").value =getGrade(score);
				});
				$("#sim1score10").blur(function(){
					var score = document.getElementById("sim1score10").value;
					document.getElementById("sim1grade10").value =getGrade(score);
				});
				$("#sim1score11").blur(function(){
					var score = document.getElementById("sim1score11").value;
					document.getElementById("sim1grade11").value =getGrade(score);
				});
				$("#sim1score12").blur(function(){
					var score = document.getElementById("sim1score12").value;
					document.getElementById("sim1grade12").value =getGrade(score);
				});
				$("#sim1score13").blur(function(){
					var score = document.getElementById("sim1score13").value;
					document.getElementById("sim1grade13").value =getGrade(score);
				});
				$("#sim1score14").blur(function(){
					var score = document.getElementById("sim1score14").value;
					document.getElementById("sim1grade14").value =getGrade(score);
				});
				$("#sim1score15").blur(function(){
					var score = document.getElementById("sim1score15").value;
					document.getElementById("sim1grade15").value =getGrade(score);
				});
				
				
				
				
				
				$("#sim2score1").blur(function(){
					var score = document.getElementById("sim2score1").value;
					document.getElementById("sim2grade1").value =getGrade(score);
				});
				$("#sim2score2").blur(function(){
					var score = document.getElementById("sim2score2").value;
					document.getElementById("sim2grade2").value =getGrade(score);
				});
				$("#sim2score3").blur(function(){
					var score = document.getElementById("sim2score3").value;
					document.getElementById("sim2grade3").value =getGrade(score);
				});
				$("#sim2score4").blur(function(){
					var score = document.getElementById("sim2score4").value;
					document.getElementById("sim2grade4").value =getGrade(score);
				});
				$("#sim2score5").blur(function(){
					var score = document.getElementById("sim2score5").value;
					document.getElementById("sim2grade5").value =getGrade(score);
				});
				$("#sim2score6").blur(function(){
					var score = document.getElementById("sim2score6").value;
					document.getElementById("sim2grade6").value =getGrade(score);
				});
				$("#sim2score7").blur(function(){
					var score = document.getElementById("sim2score7").value;
					document.getElementById("sim2grade7").value =getGrade(score);
				});
				$("#sim2score8").blur(function(){
					var score = document.getElementById("sim2score8").value;
					document.getElementById("sim2grade8").value =getGrade(score);
				});
				$("#sim2score9").blur(function(){
					var score = document.getElementById("sim2score9").value;
					document.getElementById("sim2grade9").value =getGrade(score);
				});
				$("#sim2score10").blur(function(){
					var score = document.getElementById("sim2score10").value;
					document.getElementById("sim2grade10").value =getGrade(score);
				});
				$("#sim2score11").blur(function(){
					var score = document.getElementById("sim2score11").value;
					document.getElementById("sim2grade11").value =getGrade(score);
				});
				$("#sim2score12").blur(function(){
					var score = document.getElementById("sim2score12").value;
					document.getElementById("sim2grade12").value =getGrade(score);
				});
				$("#sim2score13").blur(function(){
					var score = document.getElementById("sim2score13").value;
					document.getElementById("sim2grade13").value =getGrade(score);
				});
				$("#sim2score14").blur(function(){
					var score = document.getElementById("sim2score14").value;
					document.getElementById("sim2grade14").value =getGrade(score);
				});
				$("#sim2score15").blur(function(){
					var score = document.getElementById("sim2score15").value;
					document.getElementById("sim2grade15").value =getGrade(score);
				});
				
				
				
				
				
				$("#sim3score1").blur(function(){
					var score = document.getElementById("sim3score1").value;
					document.getElementById("sim3grade1").value =getGrade(score);
				});
				$("#sim3score2").blur(function(){
					var score = document.getElementById("sim3score2").value;
					document.getElementById("sim3grade2").value =getGrade(score);
				});
				$("#sim3score3").blur(function(){
					var score = document.getElementById("sim3score3").value;
					document.getElementById("sim3grade3").value =getGrade(score);
				});
				$("#sim3score4").blur(function(){
					var score = document.getElementById("sim3score4").value;
					document.getElementById("sim3grade4").value =getGrade(score);
				});
				$("#sim3score5").blur(function(){
					var score = document.getElementById("sim3score5").value;
					document.getElementById("sim3grade5").value =getGrade(score);
				});
				$("#sim3score6").blur(function(){
					var score = document.getElementById("sim3score6").value;
					document.getElementById("sim3grade6").value =getGrade(score);
				});
				$("#sim3score7").blur(function(){
					var score = document.getElementById("sim3score7").value;
					document.getElementById("sim3grade7").value =getGrade(score);
				});
				$("#sim3score8").blur(function(){
					var score = document.getElementById("sim3score8").value;
					document.getElementById("sim3grade8").value =getGrade(score);
				});
				$("#sim3score9").blur(function(){
					var score = document.getElementById("sim3score9").value;
					document.getElementById("sim3grade9").value =getGrade(score);
				});
				$("#sim3score10").blur(function(){
					var score = document.getElementById("sim3score10").value;
					document.getElementById("sim3grade10").value =getGrade(score);
				});
				$("#sim3score11").blur(function(){
					var score = document.getElementById("sim3score11").value;
					document.getElementById("sim3grade11").value =getGrade(score);
				});
				$("#sim3score12").blur(function(){
					var score = document.getElementById("sim3score12").value;
					document.getElementById("sim3grade12").value =getGrade(score);
				});
				$("#sim3score13").blur(function(){
					var score = document.getElementById("sim3score13").value;
					document.getElementById("sim3grade13").value =getGrade(score);
				});
				$("#sim3score14").blur(function(){
					var score = document.getElementById("sim3score14").value;
					document.getElementById("sim3grade14").value =getGrade(score);
				});
				$("#sim3score15").blur(function(){
					var score = document.getElementById("sim3score15").value;
					document.getElementById("sim3grade15").value =getGrade(score);
				});
				
				
				
				
				$("#sim4score1").blur(function(){
					var score = document.getElementById("sim4score1").value;
					document.getElementById("sim4grade1").value =getGrade(score);
				});
				$("#sim4score2").blur(function(){
					var score = document.getElementById("sim4score2").value;
					document.getElementById("sim4grade2").value =getGrade(score);
				});
				$("#sim4score3").blur(function(){
					var score = document.getElementById("sim4score3").value;
					document.getElementById("sim4grade3").value =getGrade(score);
				});
				$("#sim4score4").blur(function(){
					var score = document.getElementById("sim4score4").value;
					document.getElementById("sim4grade4").value =getGrade(score);
				});
				$("#sim4score5").blur(function(){
					var score = document.getElementById("sim4score5").value;
					document.getElementById("sim4grade5").value =getGrade(score);
				});
				$("#sim4score6").blur(function(){
					var score = document.getElementById("sim4score6").value;
					document.getElementById("sim4grade6").value =getGrade(score);
				});
				$("#sim4score7").blur(function(){
					var score = document.getElementById("sim4score7").value;
					document.getElementById("sim4grade7").value =getGrade(score);
				});
				$("#sim4score8").blur(function(){
					var score = document.getElementById("sim4score8").value;
					document.getElementById("sim4grade8").value =getGrade(score);
				});
				$("#sim4score9").blur(function(){
					var score = document.getElementById("sim4score9").value;
					document.getElementById("sim4grade9").value =getGrade(score);
				});
				$("#sim4score10").blur(function(){
					var score = document.getElementById("sim4score10").value;
					document.getElementById("sim4grade10").value =getGrade(score);
				});
				$("#sim4score11").blur(function(){
					var score = document.getElementById("sim4score11").value;
					document.getElementById("sim4grade11").value =getGrade(score);
				});
				$("#sim4score12").blur(function(){
					var score = document.getElementById("sim4score12").value;
					document.getElementById("sim4grade12").value =getGrade(score);
				});
				$("#sim4score13").blur(function(){
					var score = document.getElementById("sim4score13").value;
					document.getElementById("sim4grade13").value =getGrade(score);
				});
				$("#sim4score14").blur(function(){
					var score = document.getElementById("sim4score14").value;
					document.getElementById("sim4grade14").value =getGrade(score);
				});
				$("#sim4score15").blur(function(){
					var score = document.getElementById("sim4score15").value;
					document.getElementById("sim4grade15").value =getGrade(score);
				});
			    $("#calcSim1GpBtn").on("tap",function(){
					//http://localhost:8000/api/updateSim1Result/1234/hello
					var sim1result = new Object();
					for(i=1; i<=15; i++){
						sim1result["sim1cc"+i]=document.getElementById("sim1cc"+i).value;
						sim1result["sim1cu"+i]=document.getElementById("sim1cu"+i).value;
						sim1result["sim1score"+i]=document.getElementById("sim1score"+i).value;
						sim1result["sim1grade"+i]=document.getElementById("sim1grade"+i).value;
					}
					sim1result=JSON.stringify(sim1result);
					//console.log(sim1result);
					//console.log(sim1result);
					$.ajax({
						url: "http://softwork.herokuapp.com/api/updateSim1Result/"+matricNumber+"/"+sim1result
					});
						var totalcu=0;
						var totalpoint=0;
						for(i=1; i<=15; i++){
							var cu = parseFloat(document.getElementById("sim1cu"+i).value);
							totalcu=totalcu+cu;
							var grade=document.getElementById("sim1grade"+i).value;
							point=parseFloat(getPoint(grade));
							point*=cu;
							totalpoint+=point;
						}
						var sim1GPA=totalpoint/totalcu;
						document.getElementById("sim1GPA").innerHTML=sim1GPA;
						//console.log(sim1GPA);
						
						//var valu= $('#grade1').find(":selected").text()
						//console.log(valu);
				});
				$("#calcsim2GpBtn").on("tap",function(){
					//http://localhost:8000/api/updateSim1Result/1234/hello
					var sim2result = new Object();
					for(i=1; i<=15; i++){
						sim2result["sim2cc"+i]=document.getElementById("sim2cc"+i).value;
						sim2result["sim2cu"+i]=document.getElementById("sim2cu"+i).value;
						sim2result["sim2score"+i]=document.getElementById("sim2score"+i).value;
						sim2result["sim2grade"+i]=document.getElementById("sim2grade"+i).value;
					}
					sim2result=JSON.stringify(sim2result);
					//console.log(sim2result);
					//console.log(sim2result);
					$.ajax({
						url: "http://softwork.herokuapp.com/api/updateSim2Result/"+matricNumber+"/"+sim2result
					});
						var totalcu=0;
						var totalpoint=0;
						for(i=1; i<=15; i++){
							var cu = parseFloat(document.getElementById("sim2cu"+i).value);
							totalcu=totalcu+cu;
							var grade=document.getElementById("sim2grade"+i).value;
							point=parseFloat(getPoint(grade));
							point*=cu;
							totalpoint+=point;
						}
						var sim2GPA=totalpoint/totalcu;
						document.getElementById("sim2GPA").innerHTML=sim2GPA;
						console.log(sim2GPA);
						
						//var valu= $('#grade1').find(":selected").text()
						//console.log(valu);
				});
				$("#calcsim3GpBtn").on("tap",function(){
					//http://localhost:8000/api/updatesim3Result/1234/hello
					var sim3result = new Object();
					for(i=1; i<=15; i++){
						sim3result["sim3cc"+i]=document.getElementById("sim3cc"+i).value;
						sim3result["sim3cu"+i]=document.getElementById("sim3cu"+i).value;
						sim3result["sim3score"+i]=document.getElementById("sim3score"+i).value;
						sim1result["sim3grade"+i]=document.getElementById("sim3grade"+i).value;
					}
					sim3result=JSON.stringify(sim3result);
					//console.log(sim3result);
					//console.log(sim3result);
					$.ajax({
						url: "http://softwork.herokuapp.com/api/updateSim3Result/"+matricNumber+"/"+sim3result
					});
						var totalcu=0;
						var totalpoint=0;
						for(i=1; i<=15; i++){
							var cu = parseFloat(document.getElementById("sim3cu"+i).value);
							totalcu=totalcu+cu;
							var grade=document.getElementById("sim3grade"+i).value;
							point=parseFloat(getPoint(grade));
							point*=cu;
							totalpoint+=point;
						}
						var sim3GPA=totalpoint/totalcu;
						document.getElementById("sim3GPA").innerHTML=sim3GPA;
						//console.log(sim3GPA);
						
						//var valu= $('#grade1').find(":selected").text()
						//console.log(valu);
				});
				$("#calcsim4GpBtn").on("tap",function(){
					//http://localhost:8000/api/updatesim4Result/1234/hello
					var sim4result = new Object();
					for(i=1; i<=15; i++){
						sim4result["sim4cc"+i]=document.getElementById("sim4cc"+i).value;
						sim4result["sim4cu"+i]=document.getElementById("sim4cu"+i).value;
						sim4result["sim4score"+i]=document.getElementById("sim4score"+i).value;
						sim1result["sim4grade"+i]=document.getElementById("sim4grade"+i).value;
					}
					sim4result=JSON.stringify(sim4result);
					//console.log(sim4result);
					//console.log(sim4result);
					$.ajax({
						url: "http://softwork.herokuapp.com/api/updateSim4Result/"+matricNumber+"/"+sim4result
					});
						var totalcu=0;
						var totalpoint=0;
						for(i=1; i<=15; i++){
							var cu = parseFloat(document.getElementById("sim4cu"+i).value);
							totalcu=totalcu+cu;
							var grade=document.getElementById("sim4grade"+i).value;
							point=parseFloat(getPoint(grade));
							point*=cu;
							totalpoint+=point;
						}
						var sim4GPA=totalpoint/totalcu;
						document.getElementById("sim4GPA").innerHTML=sim4GPA;
						//console.log(sim4GPA);
						
						//var valu= $('#grade1').find(":selected").text()
						//console.log(valu);
				});                    
			//});