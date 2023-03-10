import * as THREE from 'three';
import ThreeManager from '../ThreeManager';

const baseScale = 2200;

export type ThreeBackgroundOptions = THREE.MeshBasicMaterialParameters & {
  getThreeManager?: () => ThreeManager;
};

class ThreeBackground {
  geometry: THREE.PlaneGeometry;
  material: THREE.MeshBasicMaterial;
  mesh: THREE.Mesh;
  getThreeManager?: () => ThreeManager;

  constructor(textureUrl: string, options: ThreeBackgroundOptions = {}) {
    const { getThreeManager, ...meshBasicMaterialOptions } = options;

    this.getThreeManager = getThreeManager;

    const threeManager = this.getThreeManager?.();
    const aspect = threeManager?.backgroundController.aspect ?? 1;

    this.geometry = new THREE.PlaneGeometry(aspect * baseScale, baseScale);

    const texture = new THREE.TextureLoader().load(textureUrl);

    this.material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: texture,
      ...meshBasicMaterialOptions,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.z = 0;
  }
}

export type ThreeBackgroundGenerator = (
  textureUrl: string,
  options: ThreeBackgroundOptions,
) => ThreeBackground;

export const useThreeBackgroundGenerator = (
  getThreeManager?: () => ThreeManager,
): ThreeBackgroundGenerator => {
  return (textureUrl: string, options: ThreeBackgroundOptions) => {
    return new ThreeBackground(textureUrl, { getThreeManager, ...options });
  };
};

export default ThreeBackground;
