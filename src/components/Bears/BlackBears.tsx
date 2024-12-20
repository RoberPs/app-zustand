import { useBearStore } from '../../stores';
import { WhiteCard } from '../shared/cards/WhiteCard';



export const BlackBears = ()=> {
    
    const blackBears = useBearStore(state=>state.blackBears)
    const updateBlackBearQuantity = useBearStore(state=>state.updateBlackBearQuantity)
    return (

       <WhiteCard centered>
        <div>

            <h2>Osos Negros</h2>
            <div className="flex flex-col md:flex-row">
            <button 
                onClick={()=>updateBlackBearQuantity(+1)}
            > +1
            </button>
            <span className="text-3xl mx-2 lg:mx-10">{blackBears}</span>
                <button
                    onClick={()=>{ 
                        if(blackBears > 0){
                            updateBlackBearQuantity(-1)
                            return;
                        }
                    }}
                > -1
                </button>
            </div>
        </div>
       </WhiteCard>
    

  )
}

