import React, { ReactNode, ForwardedRef, MutableRefObject } from 'react';
import ThreeManager from './core/ThreeManager';
import useForwardedRef from '@psycholog-studio/utils/hooks/useForwardedRef';

export const ThreeManagerContext = React.createContext<
  MutableRefObject<ThreeManager | null>
>({ current: null });

type ThreeGraphicProps = {
  children: ReactNode;
  threeManager?: ThreeManager;
};

const ThreeGraphic = React.forwardRef<ThreeManager, ThreeGraphicProps>(
  (props: ThreeGraphicProps, ref: ForwardedRef<ThreeManager>) => {
    const { threeManager, children } = props;
    let targetThreeManager = threeManager;

    if (!targetThreeManager) {
      targetThreeManager = new ThreeManager();
    }

    const threeManagerRef = useForwardedRef<ThreeManager>(
      ref,
      targetThreeManager,
    );

    return (
      <ThreeManagerContext.Provider value={threeManagerRef}>
        {children}
      </ThreeManagerContext.Provider>
    );
  },
);

ThreeGraphic.displayName = 'ThreeGraphic';

export default ThreeGraphic;
