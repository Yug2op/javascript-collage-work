
        // function ghy(){
        //     document.querySelector("#abc").classList.toggle("xyz")
        // }
        // let ab = document.querySelector(".item").style.color="tomato"
        // let a = document.querySelector("#abc").style.backgroundColor = "blue"
        // console.log(a)
        // document.querySelector("#abc").classList.add("xyz")
       
        // let acb = document.querySelector("#abc").classList
        // console.log(acb)





        document.querySelector(".header").onmouseenter = sss;
        document.querySelector("#headdd").onmouseleave = tss;
        function sss() {
            document.querySelector(".header").classList.add("xyz");
        }
        function tss() {
            document.querySelector(".header").classList.remove("xyz");
        }
        document.querySelector("#headdd").addEventListener("mouseenter",tts)
        function tts() {
            document.querySelector("#headdd").style.color="yellow"
        }
        document.querySelector("#headdd").addEventListener("mouseleave",ttt)
        function ttt() {
            document.querySelector("#headdd").style.color="rgb(130, 20, 99)"
        }
           


        document.querySelector("#item1").addEventListener("mouseenter",aaa)
        function aaa() {
            document.querySelector("#item1").style.color="yellow"
        }
        document.querySelector("#item1").addEventListener("mouseleave",function() {
            document.querySelector("#item1").style.color="rgb(130, 20, 99)"
        } )



        // let dd= document.createElement("h3")
        // console.log(dd)
        // let dad= document.createTextNode("Hello I'm Yugank Tripathi")
        // console.log(dad)
        // dd.appendChild(dad)
        // document.querySelector("#item2").appendChild(dd)
        // we can use insertBefore to adjust the position of appended text
        // let vv = document.querySelector("#item1")
        // vv.insertAdjacentElement("beforebegin",dd)
        // vv.insertAdjacentElement("afterbegin" ,dd)
        // vv.insertAdjacentElement("afterend",dd)
        // vv.insertAdjacentElement("beforeend",dd)
        // let a = "<h2>This is jaruri</h2>"
        // vv.insertAdjacentHTML("beforebegin",a)
     


        // let df = document.createElement("li")
        // let dfg = document.createTextNode("Honolulu")
        // df.appendChild(dfg)

        // let aaaa = document.getElementById("list")


        // let rrr =aaaa.children[1]
        // console.log(rrr)

        // rrr.replaceChild(df,rrr)
        // let v;
        // v=document.getElementsByClassName("container").innerHTML;
 




        
   
   
   