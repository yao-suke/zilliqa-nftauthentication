import getCallParameters from './getCallParameters';
import toast from 'react-hot-toast';
//@ts-ignore
import transitionMessageAlert from './transitionMessageAlert';
//@ts-ignore
import { decodeZilPayError } from './decodeMessage'; 
import ContextContainer from "./contextContainer";  

const { zilPay, contract } = ContextContainer.useContainer();

const isOwner = async ( ) => {
    try {
        const callTransition = await contract.call(
            'configureMinter',
            getCallParameters(zilPay)
        );
        transitionMessageAlert(zilPay, callTransition.ID, 'Minter Created');
    } catch (error) {
        toast.error(decodeZilPayError(error));
    }
};

export default isOwner;