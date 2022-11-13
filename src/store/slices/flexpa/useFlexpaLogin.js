//import { setToken } from 'store/slices/flexpa';
import FlexpaLink from '@flexpa/link';

function useFlexpaLink() {
  const flexpa = FlexpaLink;
  const publishableKey = process.env.REACT_APP_FLEXPA_KEY;
  const handleSuccess = (token) => {
    console.log(token);
  };
  flexpa.create({
    publishableKey,
    onSuccess: handleSuccess,
  });
  return flexpa;
}

export default useFlexpaLink;
