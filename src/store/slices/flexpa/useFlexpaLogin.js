import FlexpaLink from '@flexpa/link';
import { useDispatch } from 'react-redux';
import flexpaApi from 'store/slices/flexpa';

function useFlexpaLink() {
  const flexpa = FlexpaLink;
  const publishableKey = process.env.REACT_APP_FLEXPA_KEY;
  const dispatch = useDispatch();
  const handleSuccess = (public_token) => {
    console.log('useFlexpaLogin:onSuccess', public_token);
    dispatch(flexpaApi.endpoints.getAccessToken.initiate({ public_token }));
  };
  flexpa.create({
    publishableKey,
    onSuccess: handleSuccess,
  });
  return flexpa;
}

export default useFlexpaLink;
