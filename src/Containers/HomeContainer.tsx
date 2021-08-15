import HeaderData from "../Components/HeaderData";
import VerticalSlider from "../Components/verticalSlider";


const HomeContainer: React.FC = (username) => {

    return (
        <>
           <section className="py-3">
               <HeaderData username="Giannex"/>
               <div className="w-100">
                    <VerticalSlider/>
               </div>
               <div className="row mt-5">
                   <div className="col">
                       <div className="card" style={{height: '100px'}}>
                           0
                       </div>
                   </div>
                   <div className="col">
                        <div className="card" style={{height: '100px'}}>
                           1
                        </div>
                   </div>
                   <div className="col">
                        <div className="card" style={{height: '100px'}}>
                           2
                        </div>
                   </div>
               </div>
               <div className="row mt-5">
                   <div className="col">
                        <div className="card" style={{height: '200px'}}>
                           2
                        </div>
                   </div>
                   <div className="col">
                        <div className="card" style={{height: '200px'}}>
                           2
                        </div>
                   </div>
               </div>
           </section>
        </>
    );
}

export default HomeContainer