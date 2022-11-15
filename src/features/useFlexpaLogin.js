import FlexpaLink from '@flexpa/link';

function useFlexpaLink(cb) {
  const flexpa = FlexpaLink;
  const publishableKey = process.env.REACT_APP_FLEXPA_KEY;

  const handleSuccess = (public_token) => {
    cb(public_token);
  };

  flexpa.create({
    publishableKey,
    onSuccess: handleSuccess,
  });

  return flexpa;
}

export default useFlexpaLink;
