this.manager = new THREE.LoadingManager();
this.gltfLoader = new GLTFLoader(this.manager);
this.dracoLoader = new DRACOLoader();
this.dracoLoader.setDecoderPath("./js/draco/");
this.dracoLoader.setDecoderConfig({ type: "js" });
this.gltfLoader.setDRACOLoader(this.dracoLoader);
// 使用
this.gltfLoader.load("./shoes2-processed.gltf", (gltf) => {
  this.scene.add(gltf.scene);
});
