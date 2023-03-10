import { useCallback, ReactNode } from 'react';
import { cx } from '@emotion/css';
import useThreeManager from '../hooks/useThreeManager';
import * as styles from './UILayer.styles';

export interface UILayerProps {
  className?: string;
  children?: ReactNode;
}

const UILayer = (props: UILayerProps): JSX.Element => {
  const { className, children } = props;

  const threeManager = useThreeManager();

  const uiWarpper = useCallback(
    (element: HTMLDivElement) => {
      if (element) {
        const handleResize = () => {
          const rect =
            threeManager.layerController.webglApp.getBoundingClientRect();

          element.style.height = `${rect.height}px`;
          element.style.width = `${rect.width}px`;
        };

        threeManager.layerController.subscribeWebglAppResize(handleResize);

        requestAnimationFrame(() => {
          handleResize();
        });
      }
    },
    [threeManager],
  );

  return (
    <div className={cx(styles.root, className)}>
      <div ref={uiWarpper} className={styles.uiContentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default UILayer;
