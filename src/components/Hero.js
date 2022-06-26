import React from "react";
import "./Hero.css";

const Hero = () =>{

    const [tabOne, setTabOne] = React.useState(true);
    const [tabTwo, setTabTwo] = React.useState(false);
    const [tabThree, setTabThree] = React.useState(false);

    const tabOneEvent = () =>{
        setTabOne(true);
        setTabTwo(false);
        setTabThree(false);
    };

    const tabTwoEvent = () =>{
        setTabOne(false);
        setTabTwo(true);
        setTabThree(false);
    };

    const tabThreeEvent = () =>{
        setTabOne(false);
        setTabTwo(false);
        setTabThree(true);
    };

    return(
        <>
            <section id="features-section">

                <div className="section-hero">

                    <div className="overlay-hero">

                        <div className="overlay-buttons-hero">
                            <button className={tabOne ? "button-true-hero" : "button-tab"} onClick={tabOneEvent}>Tab 1</button>
                            <button className={tabTwo ? "button-true-hero" : "button-tab"} onClick={tabTwoEvent}>Tab 2</button>
                            <button className={tabThree ? "button-true-hero" : "button-tab"} onClick={tabThreeEvent}>Tab 3</button>
                        </div>

                        <div>
                            {tabOne &&
                                <>
                                    <p className="title-hero">Some Title</p>
                                    <p className="info-hero">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Laboriosam repellendus esse consectetur possimus voluptatem veniam quas ducimus ullam deleniti? 
                                        Possimus, unde eveniet suscipit perspiciatis dicta numquam voluptate fuga id, optio.
                                    </p>
                                    <p className="info-hero">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Laboriosam repellendus esse consectetur possimus voluptatem veniam quas ducimus ullam deleniti? 
                                        Possimus, unde eveniet suscipit perspiciatis dicta numquam voluptate fuga id, optio.
                                    </p>
                                    <button className="button-download-hero">Download</button>
                                </>
                            }

                            {tabTwo &&
                                <>
                                    <p className="title-hero">Another Title</p>
                                    <p className="info-hero">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Velit unde totam nostrum, sunt accusamus in delectus aspernatur, nisi eligendi ipsum eum! 
                                        Aspernatur recusandae nihil rem qui quam vero, saepe inventore tempora? Necessitatibus corporis, nam minus reiciendis rerum? 
                                        Eius voluptatem facilis, vitae minima modi corrupti ullam, temporibus vel eum fugit inventore obcaecati provident ratione, ab aliquid perspiciatis commodi, autem in nemo.
                                    </p>
                                    <p className="info-other-hero">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                    <p className="info-hero">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Velit unde totam nostrum, sunt accusamus in delectus aspernatur, nisi eligendi ipsum eum! 
                                        Aspernatur recusandae nihil rem qui quam vero, saepe inventore tempora? Necessitatibus corporis, nam minus reiciendis rerum? 
                                        Eius voluptatem facilis, vitae minima modi corrupti ullam, temporibus vel eum fugit inventore obcaecati provident ratione, ab aliquid perspiciatis commodi, autem in nemo.
                                    </p>
                                </>
                            }

                            {tabThree &&
                                <>
                                    <p className="title-hero">Some Other</p>
                                    <p className="info-hero">
                                        Consectetur amet architecto, temporibus, debitis impedit dolore eius. 
                                        Enim alias beatae architecto iusto incidunt pariatur reprehenderit impedit ipsum ex at deserunt, inventore corrupti rerum eius obcaecati. 
                                        Itaque repellendus illum aut beatae ex quasi doloremque voluptatem. 
                                        Numquam at possimus, obcaecati, voluptas aut vel nam recusandae pariatur error illum quaerat sunt! 
                                        Ipsam rerum enim hic atque nemo debitis, voluptate obcaecati inventore culpa. Odit adipisci eos natus fugiat. Id, deserunt qui aliquam? 
                                        Provident tempora repellat, repellendus consequatur quia dolor at dolore temporibus esse in rem ea necessitatibus quo nesciunt eos a dolorum voluptates, tenetur non eius quasi! Autem provident amet, maiores tenetur, eveniet dicta, laborum odio velit sint consequatur beatae nemo at! 
                                        Aperiam magnam eveniet rerum, optio consequuntur quas maiores ullam necessitatibus nesciunt.
                                    </p>
                                </>
                            }
                        </div>

                    </div>

                </div>
            </section>
        </>

    );
};

export default Hero;