import HeaderData from "../Components/HeaderData";
import VerticalSlider from "../Components/verticalSlider";


const HomeContainer: React.FC = () => {

    return (
        <>
           <section className="content-wrapper py-4">
               <HeaderData username="Giannex" quote="How're you?" level={3}/>
               <div className="w-100">
                    <VerticalSlider />
               </div>
               <div className="row mt-5">
                   <div className="col py-3">
                       <div className="card">
                           0
                       </div>
                   </div>
                   <div className="col py-3">
                        <div className="card">
                           1
                        </div>
                   </div>
                   <div className="col py-3">
                        <div className="card">
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