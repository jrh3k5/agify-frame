import { useEffect, useCallback, useState } from 'react';
import sdk from '@farcaster/frame-sdk';
import type { Context } from '@farcaster/frame-core';
import { lineGenerator } from '~/lib/line_generator';

export default function Agify() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.FrameContext>();
  const [isContextOpen, setIsContextOpen] = useState(false);
  const [userAge, setUserAge] = useState(null);

  useEffect(() => {
    const load = async () => {
      const sdkContext = await sdk.context;
      setContext(sdkContext);

      const response = await fetch(`https://api.agify.io/?name=${sdkContext?.user?.displayName}`);
      const data = await response.json();

      setUserAge(data.age);

      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  const toggleContext = useCallback(() => {
    setIsContextOpen((prev) => !prev);
  }, []);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[300px] mx-auto py-4 px-2">
      <h1 className="text-2xl font-bold text-center mb-4">Guess Your Age</h1>

      <div className="mb-4">
        {lineGenerator(userAge)}
      </div>
    </div>
  );
}