// absolute imports
import React from 'react';
import { Button } from 'antd';

// relative imports
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'fuels';

interface MintButtonProps {
  // Component props
}

function MintButton(props: MintButtonProps) {
  const dispatch = useDispatch();
  const provider: Provider | null = useSelector((state: RootState) => state.providerReducer.provider);

   return (
    <Button
      type="primary"
      onClick={()=> console.log('I want to do Mint!')}
    >
      Mint
    </Button>
   );
}

export default MintButton