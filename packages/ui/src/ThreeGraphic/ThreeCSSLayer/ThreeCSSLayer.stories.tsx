import { useEffect, useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import ThreeCSSLayer from './ThreeCSSLayer';
import * as THREE from 'three';
import ThreeManager from '../core/ThreeManager';
import ThreeCSSObject from './ThreeCSSObject';
import ThreeGraphic from '../ThreeGraphic';

export default {
  title: 'ui/ThreeGraphic/ThreeCSSLayer',
  component: ThreeCSSLayer,
} as Meta;

const Template: Story = (args) => {
  const sceneRef = useRef(new THREE.Scene());
  const threeManagerRef = useRef<ThreeManager | null>(null);

  useEffect(() => {
    if (threeManagerRef.current) {
      threeManagerRef.current.layerController.setScene(sceneRef.current);
    }

    return () => {
      if (threeManagerRef.current) {
        threeManagerRef.current.layerController.setScene(undefined);
      }
    };
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeGraphic ref={threeManagerRef}>
        <ThreeCSSLayer {...args} scene={sceneRef.current}>
          {[...Array(7).keys()].map((_v, index) => {
            return (
              <ThreeCSSObject
                key={index}
                ref={(obj) => {
                  if (obj) {
                    obj.scale.set(
                      10 - index * 0.3,
                      10 - index * 0.3,
                      10 - index * 0.3,
                    );
                    obj.position.set(50 + index * 100, -300 + index * 200, 100);
                    obj.rotateZ((Math.PI * index) / 20);
                    obj.rotateY(Math.PI / 10);
                    obj.rotateX(Math.PI / 5);
                  }
                }}
              >
                <span>ThreeCSSLayer </span>
                <span
                  style={{ color: 'red', fontSize: '1.3em', fontWeight: 900 }}
                >
                  {index}
                </span>
              </ThreeCSSObject>
            );
          })}

          <ThreeCSSObject
            ref={(obj) => {
              if (obj) {
                obj.scale.set(10, 10, 10);
                obj.position.set(-200, 400, 100);
                obj.rotateZ(Math.PI / 2);
                obj.rotateY(Math.PI / 2);
              }
            }}
          >
            ThreeCSSLayer Test!
          </ThreeCSSObject>
          <ThreeCSSObject
            ref={(obj) => {
              if (obj) {
                obj.scale.set(10, 10, 10);
                obj.position.set(-200, -400, 0);
                obj.rotateZ(Math.PI / 2);
                obj.rotateY(-Math.PI / 2);
              }
            }}
          >
            ThreeCSSLayer Test!
          </ThreeCSSObject>
        </ThreeCSSLayer>
      </ThreeGraphic>
    </div>
  );
};

export const Normal = Template.bind({});

Normal.args = {};
