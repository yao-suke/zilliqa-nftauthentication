import toast from 'react-hot-toast';
//@ts-ignore
import transitionMessageAlert from './transitionMessageAlert';
//@ts-ignore
import { decodeZilPayError } from './decodeMessage'; 
import ContextContainer from "./contextContainer";  
import getCallParameters from './getCallParameters';

const { zilPay, contract } = ContextContainer.useContainer();

const mint = async ( 
    to: any, 
    token_id: any, 
    token_uri: any
) => { 
  
    try {
        const callTransition = await contract.call(
            "mint",
            [
                {
                    vname: "to",
                    type: "ByStr20",
                    value: to,
                },
                {
                    vname: "token_id",
                    type: "Uint256",
                    value: token_id,
                }, 
                {
                    vname: "token_uri",
                    type: "String",
                    value: token_uri,
                },
            ], 
            getCallParameters(zilPay)
            
        );
        transitionMessageAlert(zilPay, callTransition.ID, 'Minting NFT to to new employee');
    } catch (error) {
        toast.error(decodeZilPayError(error));
    }
};

export default mint;