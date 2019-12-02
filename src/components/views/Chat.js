import React from "react";


import "./../../stylesheets/global.css";

export default function Chat() {
    return(<>

<div id="titleCardSmall">
     
     <div className="chooseSide" id="blackside" >
      
         
       </div>
       
     <div className="chooseSide" id="whiteside" >
         
       </div>
      
 </div>
 <h1 id="chooseSideBanner">Choose Your Side</h1>
 <div className="" id="chessboardContainer">

   <table id="chessboard" border="1px">
     <tr>
       <td className="chessBlock file" status="error">8</td>
       <td className="chessBlock whitebg a8" id="wr" value="a8" status="white"></td>
       <td className="chessBlock blackbg b8" id="wkn" value="b8" status="white"></td>
       <td className="chessBlock whitebg c8" id="wb" value="c8" status="white"></td>
       <td className="chessBlock blackbg d8" id="wq" value="d8" status="white"></td>
       <td className="chessBlock whitebg e8" id="wkg" value="e8" status="white"></td>
       <td className="chessBlock blackbg f8" id="wb" value="f8" status="white"></td>
       <td className="chessBlock whitebg g8" id="wkn" value="g8" status="white"></td>
       <td className="chessBlock blackbg h8" id="wr" value="h8" status="white"></td>

     </tr>

     <tr>
       <td className="chessBlock file" status="error">7</td>
       <td className="chessBlock blackbg a7" id="wp" value="a7" status="white"></td>
       <td className="chessBlock whitebg b7" id="wp" value="b7" status="white"></td>
       <td className="chessBlock blackbg c7" id="wp" value="c7" status="white"></td>
       <td className="chessBlock whitebg d7" id="wp" value="d7" status="white"></td>
       <td className="chessBlock blackbg e7" id="wp" value="e7" status="white"></td>
       <td className="chessBlock whitebg f7" id="wp" value="f7" status="white"></td>
       <td className="chessBlock blackbg g7" id="wp" value="g7" status="white"></td>
       <td className="chessBlock whitebg h7" id="wp" value="h7" status="white"></td>

     </tr>

     <tr>
       <td className="chessBlock file" status="error">6</td>
       <td className="chessBlock whitebg a6" id="" value="a6" status="empty"></td>
       <td className="chessBlock blackbg b6" id="" value="b6" status="empty"></td>
       <td className="chessBlock whitebg c6" id="" value="c6" status="empty"></td>
       <td className="chessBlock blackbg d6" id="" value="d6" status="empty"></td>
       <td className="chessBlock whitebg e6" id="" value="e6" status="empty"></td>
       <td className="chessBlock blackbg f6" id="" value="f6" status="empty"></td>
       <td className="chessBlock whitebg g6" id="" value="g6" status="empty"></td>
       <td className="chessBlock blackbg h6" id="" value="h6" status="empty"></td>

     </tr>

     <tr>
       <td className="chessBlock file" status="error">5</td>
       <td className="chessBlock blackbg a5" id="" value="a5" status="empty"></td>
       <td className="chessBlock whitebg b5" id="" value="b5" status="empty"></td>
       <td className="chessBlock blackbg c5" id="" value="c5" status="empty"></td>
       <td className="chessBlock whitebg d5" id="" value="d5" status="empty"></td>
       <td className="chessBlock blackbg e5" id="" value="e5" status="empty"></td>
       <td className="chessBlock whitebg f5" id="" value="f5" status="empty"></td>
       <td className="chessBlock blackbg g5" id="" value="g5" status="empty"></td>
       <td className="chessBlock whitebg h5" id="" value="h5" status="empty"></td>
     </tr>

     <tr>
       <td className="chessBlock file" status="error">4</td>
       <td className="chessBlock whitebg a4" id="" value="a4" status="empty"></td>
       <td className="chessBlock blackbg b4" id="" value="b4" status="empty"></td>
       <td className="chessBlock whitebg c4" id="" value="c4" status="empty"></td>
       <td className="chessBlock blackbg d4" id="" value="d4" status="empty"></td>
       <td className="chessBlock whitebg e4" id="" value="e4" status="empty"></td>
       <td className="chessBlock blackbg f4" id="" value="f4" status="empty"></td>
       <td className="chessBlock whitebg g4" id="" value="g4" status="empty"></td>
       <td className="chessBlock blackbg h4" id="" value="h4" status="empty"></td>

     </tr>
     <tr>
       <td className="chessBlock file" status="error">3</td>
       <td className="chessBlock blackbg a3" id="" value="a3" status="empty"></td>
       <td className="chessBlock whitebg b3" id="" value="b3" status="empty"></td>
       <td className="chessBlock blackbg c3" id="" value="c3" status="empty"></td>
       <td className="chessBlock whitebg d3" id="" value="d3" status="empty"></td>
       <td className="chessBlock blackbg e3" id="" value="e3" status="empty"></td>
       <td className="chessBlock whitebg f3" id="" value="f3" status="empty"></td>
       <td className="chessBlock blackbg g3" id="" value="g3" status="empty"></td>
       <td className="chessBlock whitebg h3" id="" value="h3" status="empty"></td>


     </tr>
     <tr>
       <td className="chessBlock file" status="error">2</td>
       <td className="chessBlock whitebg a2" id="bp"  value="a2" status="black"></td>
       <td className="chessBlock blackbg b2" id="bp"  value="b2" status="black"></td>
       <td className="chessBlock whitebg c2" id="bp"  value="c2" status="black"></td>
       <td className="chessBlock blackbg d2" id="bp"  value="d2" status="black"></td>
       <td className="chessBlock whitebg e2" id="bp"  value="e2" status="black"></td>
       <td className="chessBlock blackbg f2" id="bp"  value="f2" status="black"></td>
       <td className="chessBlock whitebg g2" id="bp"  value="g2" status="black"></td>
       <td className="chessBlock blackbg h2" id="bp"  value="h2" status="black"></td>
     </tr>
     <tr>
       <td className="chessBlock file" status="error">1</td>
       <td className="chessBlock blackbg a1" id="br"   value="a1" status="black"></td>
       <td className="chessBlock whitebg b1" id="bkn"  value="b1" status="black"></td>
       <td className="chessBlock blackbg c1" id="bb"   value="c1" status="black"></td>
       <td className="chessBlock whitebg d1" id="bq"   value="d1" status="black"></td>
       <td className="chessBlock blackbg e1" id="bkg"  value="e1" status="black"></td>
       <td className="chessBlock whitebg f1" id="bb"   value="f1" status="black"></td>
       <td className="chessBlock blackbg g1" id="bkn"  value="g1" status="black"></td>
       <td className="chessBlock whitebg h1" id="br"   value="h1" status="black"></td>

     </tr>
     <tr>
       <td className="chessBlock" status="error"></td>
       <td className=" chessBlock rank" status="error">A</td>
       <td className="chessBlock rank" status="error">B</td>
       <td className="chessBlock rank" status="error">C</td>
       <td className="chessBlock rank" status="error">D</td>
       <td className="chessBlock rank" status="error">E</td>
       <td className="chessBlock rank" status="error">F</td>
       <td className="chessBlock rank" status="error">G</td>
       <td className="chessBlock rank" status="error">H</td>

     </tr>

   </table>


 </div>

 <div id="loginBox">
   <form action="/login" method="POST" id="loginBoxForm">


     <div className="" id="newUser">Chat</div>
   </form>
 </div>

 <div id="myModal" className="modal">

 
   <div className="modal-content">
     <span className="close">&times;</span>


     <div className="chatBoxContainer" id="newUserEntry">
       <div className="chatBox"></div>

     </div>

     <div id="chatInputDiv" >
       <input id="chatInput" type="text"/>
       <br></br>
       <div className="submit sendmessage" id="registerSubmit">Send Message</div>
     </div>

   </div>
   </div>


        </>
    )
}