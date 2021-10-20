import getCallParameters from './getCallParameters';
import toast from 'react-hot-toast';
//@ts-ignore
import transitionMessageAlert from './transitionMessageAlert';
import ContextContainer from "./contextContainer";  
import decodeZilPayError from './decodeMessage';

const configureMinter = async (zilPay: any, 
        contract: any
    ) => { 
  
    try {
        const callTransition = await contract.call(
            'configureMinter',[ 
                { 
                    vname: "minter", 
                    type: "ByStr20",
                    value: zilPay,
                }
            ],
            getCallParameters(zilPay)
        );
        transitionMessageAlert(zilPay, callTransition.ID, 'Minter Created');
    } catch (error) {
        toast.error(decodeZilPayError(JSON.stringify(error)));
    }
};

export default configureMinter;