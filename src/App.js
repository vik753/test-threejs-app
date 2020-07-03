import React from "react";
import * as THREE from "three";
import "./App.scss";
import { OrbitControls } from "./vendors/orbitsControl";

let scene, light, camera, renderer, wrapper, uuidWrapper, orbitsControl;

function App() {
  const [figure, setFigure] = React.useState("cylinder");
  const [scale, setScale] = React.useState(1);
  const [figures, setFigures] = React.useState([]);

  const init = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333);

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(-1, 2, 2);
    scene.add(light);

    camera = new THREE.PerspectiveCamera(
      75,
      wrapper.clientWidth / wrapper.clientHeight,
      0.01,
      100
    );
    camera.position.set(5, 5, 10);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
    wrapper.appendChild(renderer.domElement);

    orbitsControl = new OrbitControls(camera, renderer.domElement);
  };

  const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    orbitsControl.update();
  };

  React.useEffect(() => {
    wrapper = document.querySelector(".scene-wrapper");
    uuidWrapper = document.querySelector(".uuid-wrapper");
    init();
    animate();
  }, []);

  const onChangeFiguresSelector = (e) => {
    const value = e.target.value;
    setFigure(() => value);
  };

  const onChangeScale = (e) => {
    const value = +e.target.value;
    setScale(() => value);
  };

  const deleteFigureHandler = (e) => {
    console.log(e.target.dataset.uuid);
    const object = scene.getObjectByProperty("uuid", e.target.dataset.uuid);
    object.geometry.dispose();
    object.material.dispose();
    scene.remove(object);
    e.target.parentNode.removeChild(e.target);
  };

  const createCylinder = () => {
    const geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 0.5, 20);
    geometry.scale(scale, scale, scale);
    const material = new THREE.MeshPhongMaterial({
      color: 0x44aa88,
      // wireframe: true,
    });
    const cylinder = new THREE.Mesh(geometry, material);
    //uuid
    const uuid = cylinder.uuid;
    setFigures((state) => [...state, uuid]);
    const btn = document.createElement("BUTTON");
    btn.innerHTML = `${uuid}`;
    btn.setAttribute("data-uuid", uuid);
    btn.addEventListener("click", deleteFigureHandler);
    uuidWrapper.appendChild(btn);

    cylinder.position.x = Math.floor(Math.random() * 5);
    cylinder.position.y = Math.floor(Math.random() * 5);
    cylinder.position.z = Math.floor(Math.random() * 5);
    scene.add(cylinder);
  };

  const createBox = () => {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    geometry.scale(scale, scale, scale);
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
    const box = new THREE.Mesh(geometry, material);
    const uuid = box.uuid;
    setFigures((state) => [...state, uuid]);

    const btn = document.createElement("BUTTON");
    btn.innerHTML = `${uuid}`;
    btn.setAttribute("data-uuid", uuid);
    btn.addEventListener("click", deleteFigureHandler);
    uuidWrapper.appendChild(btn);

    box.position.x = Math.floor(Math.random() * 5);
    box.position.y = Math.floor(Math.random() * 5);
    box.position.z = Math.floor(Math.random() * 5);
    scene.add(box);
  };

  const createSphere = () => {
    const geometry = new THREE.SphereGeometry(0.5, 20, 20);
    geometry.scale(scale, scale, scale);
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
    const sphere = new THREE.Mesh(geometry, material);
    const uuid = sphere.uuid;
    setFigures((state) => [...state, uuid]);

    const btn = document.createElement("BUTTON");
    btn.innerHTML = `${uuid}`;
    btn.setAttribute("data-uuid", uuid);
    btn.addEventListener("click", deleteFigureHandler);
    uuidWrapper.appendChild(btn);

    sphere.position.x = Math.floor(Math.random() * 5);
    sphere.position.y = Math.floor(Math.random() * 5);
    sphere.position.z = Math.floor(Math.random() * 5);
    scene.add(sphere);
  };

  const createFigureHandler = (scene) => {
    console.log(figures);
    switch (figure) {
      case "cylinder":
        createCylinder();
        break;
      case "box":
        createBox();
        break;
      case "sphere":
        createSphere();
        break;
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="figure">Choose a figure </label>
        <select name="figures" id="figures" onChange={onChangeFiguresSelector}>
          <option value="cylinder">Cylinder</option>
          <option value="box">Box</option>
          <option value="sphere">Sphere</option>
        </select>
        <br />
        <label htmlFor="">Scale </label>
        <input
          id="scale"
          type="number"
          min="1"
          max="10"
          defaultValue={scale}
          onChange={onChangeScale}
        />
        <br />
        <button onClick={() => createFigureHandler(scene)}>Create</button>
      </div>
      <div className="scene-wrapper" />
      <div className="uuid-wrapper" />
    </div>
  );
}

export default App;
