import React, {useState} from 'react'

export default function About() {

    // page wise darkmode scripts
    const [myStyle, setMyStyle] = useState({
        backgroundColor:"#FFF",
        color: "#000"
    });
    const [darkText, setdarkText] = useState("Enable Dark mode");
    const [darkStatus, setDarkStatus] = useState();


    const EnableDarkMode = ()=>{ 
        if(myStyle.backgroundColor === "#FFF"){
            setMyStyle({
                backgroundColor:"#000",
                color: "#FFF"
            });
            setdarkText("Enable Light mode")
            setDarkStatus(true);
        }
        else{
            setMyStyle({
                backgroundColor:"#FFF",
                color: "#000"
            });
            setdarkText("Enable Dark mode")
            setDarkStatus(false);

        }
    }
    
  return (
    <> 
        <section className="py-5" style={myStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <button className={darkStatus ? 'btn btn-warning mb-3' : 'btn btn-dark mb-3'} onClick={EnableDarkMode}>
                            {darkStatus ? ( <i class="fa-regular fa-sun"></i> ) : ( <i class="fa-regular fa-moon"></i> )} {darkText}
                        </button>
                        
                         <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle}  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle}  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle}  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
